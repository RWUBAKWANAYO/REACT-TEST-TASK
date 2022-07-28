import { configureStore, combineReducers } from '@reduxjs/toolkit';
import MetricsReducer from './metricsData';

const rootReducer = combineReducers({
  metrics_data:MetricsReducer
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;