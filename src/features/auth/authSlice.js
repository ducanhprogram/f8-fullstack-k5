import authService from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoading: true,
};

export const getCurrentUser = createAsyncThunk(
    //action type
    "auth/getCurrentUser",
    async () => {
        const response = await authService.getCurrentUser();
        return response.data;
        //Dữ liệu return sẽ nhận ở action.payload (extraReducers)
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //Hàm setCurrentUser trong reducers sinh ra một action creator có tên setCurrentUser
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        //setUserLoading sinh ra action creator setUserLoading.
        setUserLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
    //extraReducers: Dùng để xử lý các action bên ngoài hoặc không được định nghĩa trong reducers
    extraReducers: (builder) => {
        console.log(builder);
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            //state là state hiện tại;
            state.currentUser = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
//authSlice.actions là một object chứa tất cả các action creators được sinh ra từ các reducers trong slice
export const { setCurrentUser, setUserLoading } = authSlice.actions;

console.log(authSlice.reducer);
export default authSlice.reducer;

/*
{
  setCurrentUser: (payload) => ({ type: "auth/setCurrentUser", payload }),
  setUserLoading: (payload) => ({ type: "auth/setUserLoading", payload })
}

Ví dụ minh họa:
function authReducer(state = initialState, action) {
    switch (action.type) {
        case "auth/setCurrentUser":
            return { ...state, currentUser: action.payload };
        case "auth/setUserLoading":
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}

Hàm này được lưu trong authSlice.reducer.

Tên slice (name: "auth" trong createSlice).
Tên hàm reducer (setCurrentUser, setUserLoading).

Xử lý:
dispatch(setCurrentUser({ id: 1, name: "John" }));
Action creator tạo action object:
{ type: "auth/setCurrentUser", payload: { id: 1, name: "John" } }
*/
