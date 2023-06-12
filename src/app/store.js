import { configureStore } from '@reduxjs/toolkit';

import carReducer from "../features/Car/Carslice"
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
