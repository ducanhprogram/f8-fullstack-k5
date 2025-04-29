import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "@/reducers/product";
import { reducer as authReducer } from "@/reducers/auth";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const initState = {};

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["auth"],
};

const authPersistConfig = {
    key: "auth",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
        }),
    ],
};

const rootReducer = combineReducers({
    product: productReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(
    persistedReducer,
    initState,
    applyMiddleware(thunk, logger)
);

let persistor = persistStore(store);

export { store, persistor };
