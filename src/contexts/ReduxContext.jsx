import PropTypes from "prop-types";
import { createContext } from "react";

export const ReduxContext = createContext();
//1. Tạo ra context (createContext)
//2. Tạo Provider (cung cấp dữ liệu - component cha)
//3. Nhận dữ liệu useContext ([Context tạo từ bước 1])
export const ReduxProvider = ({ children, store }) => {
    // console.log(children, store);
    return (
        <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
    );
};

ReduxProvider.propTypes = {
    children: PropTypes.node,
    store: PropTypes.object,
};
