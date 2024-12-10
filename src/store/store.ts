// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import languageReducer from './languageSlice';
import languageReducer from './slice/langSlice'

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;