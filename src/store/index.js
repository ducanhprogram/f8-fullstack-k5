import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import logger from "redux-logger";

export const store = configureStore({
    // Gắn authSlice.reducer vào store
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([logger]);
    },
    // middleware: (getDefaultMiddleware) => {
    //     console.log(getDefaultMiddleware);
    //     return [...getDefaultMiddleware(), logger];
    // },
});

/*
redux-logger là một middleware ghi log, in thông tin về action và state trước/sau khi action được xử lý vào console.
*/
