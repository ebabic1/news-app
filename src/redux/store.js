import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import articleReducer from './articlesSlice';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const reducer = combineReducers({
    articles: articleReducer, 
})
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
})
export const persistor = persistStore(store);

