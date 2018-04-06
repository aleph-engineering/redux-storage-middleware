# What makes the library better?
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Installation
## Using npm:
```sh
npm i --save @cuban-engineer/redux-storage-middleware
```

# Usage
## If you are using ES modules:
```javascript
import reduxStorageMiddleware from '@cuban-engineer/redux-storage-middleware';
```

## Apply middleware to Redux:
```javascript
import { applyMiddleware, createStore } from 'redux';
import reduxStorageMiddleware from '@cuban-engineer/redux-storage-middleware';
import rootReducer from './reducers/index';
 
const store = createStore(
  rootReducer,
  applyMiddleware(reduxStorageMiddleware)
);
```

# Describe what needs to be saved in your Redux actions
## For simple Redux states
Suppose you already have this simple action for changing the logged user token in your application for sending requests to an API.
```javascript
export const changeUserToken = userToken =>
    ({
        type: 'CHANGE_USER_TOKEN',
        userToken
    });
```
Simply by adding the `sync` property which is an array of simple json objects that `@cuban-engineer/redux-storage-middleware` understands you can define what and where to save after the Reducer handle your action.
```javascript
export const changeUserToken = userToken =>
    ({
        type: 'CHANGE_USER_TOKEN',
        userToken,
        sync: [
            {
                name: 'userToken',
                where: ['session', 'local'],
                hierarchy: ['user'],
            },
        ],
    });
```
## Sync property Example
```javascript
    sync: [
        {
            // Key in which will be saved the data in the Browser storage. 
            // If is not defined the key will be the @name attribute.
            key: 'token',
            // Literal name of the object in the Redux State that wants to be saved to the Browser storage.
            name: 'userToken',
            // Array of string enumerating where to save the data in the Browser storage.
            // Currently only Session and Local Storage. Cookies storage is coming son.
            // If only want to save in a single place is also possible to define it as a simple string, like this:
            // where: 'session'
            // If not defined, saving will occur in the Session Storage. 
            where: ['session', 'local'],
            // For more complex Stores, if using combineReducers for instance, the entire tree hierarchy for
            // obtaining the object in the State can be defined in the hierarchy attribute.
            // If only one level is needed to reach the desire object from the state, is also possible to define
            // the attribute as a simple string, like this hierarchy: 'ui'.
            // Example: state.user.userToken 
            hierarchy: ['user'],
        },
    ]
``` 
