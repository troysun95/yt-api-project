import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./slices/accessTokenSlice";
//persist 部分
import storage from "redux-persist/lib/storage"; // 默認使用 localStorage 作為存儲引擎
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// 配置 persist
const persistConfig = {
  key: "root",
  storage, // 定義存儲引擎為 localStorage
  whitelist: ["accessToken"], // 只持久化 accessToken
};

// 將 reducers 組合並且與 persist 連接
const rootReducer = combineReducers({
  accessToken: accessTokenSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 配置 store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    // 若有使用序列化檢查token , 關閉序列化檢查，避免和 persist 冲突
      serializableCheck: false, 
    }),
});

// 創建 persistor 來控制持久化存儲
export const persistor = persistStore(store);

export default store;