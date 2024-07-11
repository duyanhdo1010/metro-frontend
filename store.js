import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authentication/authSlice';
// phục vụ cho persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //có thể sử dụng localStorage (default) hoặc sessionStorage

const persistConfig = {
  key: 'root',
  storage,
  // nếu không dùng white với blacklist thì mặc định sẽ lưu lại mọi thứ
  whitelist: ['auth'] //auth sẽ được lưu lại (có thể add thêm)
  // blacklist: ['product'] //product sẽ không đượ lưu lại
};

const rootReducer = combineReducers({
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
