import { useEffect, useState, useRef } from 'react';

interface IState<T> {
  error: Error | null;
  data: T | null;
  status: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: IState<null> = {
  status: 'idle',
  data: null,
  error: null,
};

export const useAsync = <T>(api: (...arg: any) => Promise<T>) => {
  const [state, setState] = useState<IState<T>>({
    ...defaultInitialState,
  });

  const data = useRef<T | null>(null);

  const setData = (data: T) =>
    setState({
      data,
      status: 'success',
      error: null,
    });

  const setError = (error: Error) =>
    setState({
      data: null,
      status: 'error',
      error,
    });

  const run = async (...arg: any) => {
    try {
      setState({ ...state, status: 'loading' });
      if (arg?.length > 0) {
        const res = await api(...arg);
        setData(res);
        data.current = res;
      } else {
        const res = await api();
        setData(res);
        data.current = res;
      }
    } catch (error) {
      setError(error as Error);
    }

    return data.current;
  };

  return {
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    run,
    ...state,
  };
};
