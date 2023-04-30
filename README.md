## project setup

eslint + prettier + husky + commitlint

## tech stack

react + redux + axios + typescript

## function description

search module:

1. user needs to input country and city to do a valid search
2. validation:

- if country or city is empty, will toast an error message
- country should be in the list of ISO 3166 country codes(src/config/countryCOdes)
- if geographical coordinates not found, will toast an error message

3. click search:

- make apis calls to get weather info
- a record will be added to search history

today's weather module:

1. display weather inf, including:

- current temperature
- highest temperature
- lowest temperature
- country(displayed as ISO 3166 country codes)&city
- search time
- humidity
- weather

search history module:

1. if no search records: display default no record UI
2. max 10 search records will be displayed
3. delete of a record
4. research of a record:

- call apis to get the weather data
- the date of the record will be updated to the latest date
- the record will move to the top of the records

## tech specs

redux:

1. implemented with redux toolkit
2. weather modules stores:

- search result
- search history list

axios:

1. add request and response interceptors
2. excapuslate axios method
3. create useAsync hook to manage request data and loading status
4. create useWeather hook to make api calls

## files description

├─ src
├─ apis // defined http methods
├─ assets  
 ├─ images // image resource
├─ styles // common styles
├─ components
├─ iconButton // icon button component
├─ search // search module
├─ searchHistory // search history wrapper
├─ searchHistoryItem // each search history record
├─ weather // today's weather module
├─ config
├─ apis // api addresses
├─ countryCode // ISO 3166 country codes list
├─ hooks
├─ useAsync // encapsulate of http request
├─ useWeather // manage query weather related api calls
├─ interfaces // definition of data types
├─ store  
 ├─ index // create store
├─ weather // maintain weather related data
├─ utils
├─ http // config and encapsulate axios method
├─ tools // common functions
