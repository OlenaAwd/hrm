import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    isListingFree: false,
    sortDirection: null,
    bedroomType:"",
    bathroomType:"",
    conditionType:"",
    styleType:"",
    resultArr:[],
    minPrice:"",
    maxPrice:""

  },
  reducers: {
    setIsListingFree: (state, { payload }) => ({ ...state, ...payload }),
    setSortDirection: (state, { payload }) => ({ ...state, ...payload }),
    setBedroomType: (state, { payload }) => ({ ...state, ...payload }),
    setBathroomType: (state, { payload }) => ({ ...state, ...payload }),
    setConditionType: (state, { payload }) => ({ ...state, ...payload }),
    setStyleType: (state, { payload }) => ({ ...state, ...payload }),
    setResultArr: (state, { payload }) => ({ ...state, ...payload }),
    setMinPrice: (state, { payload }) => ({ ...state, ...payload }),
    setMaxPrice: (state, { payload }) => ({ ...state, ...payload }),
   
  },
});

// ACTIONS

export const {
    setIsListingFree,
    setSortDirection,
    setBedroomType,
    setBathroomType,
    setConditionType,
    setStyleType,
    setResultArr,
    setMinPrice,
    setMaxPrice

} = filterSlice.actions;

// SELECTOR

export const selectFilter = state => state.filter;

// REDUCER

export default filterSlice.reducer;
