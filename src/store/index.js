import { configureStore,  } from '@reduxjs/toolkit';
 import filterReducer from '../slices/filter';

export const configStore = ( ) => {
 
  return configureStore({
    reducer: {
       filter: filterReducer,
    },
  });
};
 