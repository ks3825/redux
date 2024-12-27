import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../crud/usesSlice';
import { reducer } from '../labexercise/reducer';
const store = configureStore({
  reducer: {
    users: usersReducer,
    counter : reducer
    
  },
  
});

export default store;
