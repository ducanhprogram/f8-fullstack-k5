import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { ThemeProvider } from "./ThemeContext/ThemeContext.jsx";
import GlobalStyles from "./components/GlobalStyles/index.js";
import { store } from "./store/index.js";
// import { ReduxProvider } from "./contexts/ReduxContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
// import { Provider as ReduxProvider } from "react-redux";

//Phải bọc UserProvider ngoài App thì tất cả component con mới dùng được dữ liệu từ Context.

// createContext() chỉ tạo ra 1 cái "kênh truyền dữ liệu" thôi.
// Nhưng muốn component con lấy được dữ liệu từ context đó thì phải có Provider bao bên ngoài để cung cấp data.

//ReduxProvider sẽ cung cấp store cho tất cả component con. để tất cả component trong ứng dụng có thể truy cập store.

console.log(store.getState());
createRoot(document.getElementById("root")).render(
    <GlobalStyles>
        <ThemeProvider>
            <UserProvider>
                {/* Provider cung cấp store cho toàn bộ app. */}
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </UserProvider>
        </ThemeProvider>
    </GlobalStyles>
);
