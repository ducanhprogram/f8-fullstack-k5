import authService from "@/services/authService";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

//1. Tạo ra context (createContext)
//2. Tạo Provider (cung cấp dữ liệu - component cha)
//3. Nhận dữ liệu useContext ([Context tạo từ bước 1])
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await authService.getCurrentUser();
                setUser(data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu người dùng: ", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const values = {
        user,
        loading,
        setUser,
        testValue: "testValue",
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.element,
};
