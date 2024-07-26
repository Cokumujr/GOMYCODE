// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../Tasks/taskSlice.js';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
