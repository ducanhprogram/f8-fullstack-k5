// import authService from "@/services/authService";
// import { GET_CURRENT_USER, SET_CURRENT_USER } from "./constants";

// export const getCurrentUser = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: GET_CURRENT_USER,
//         });
//         try {
//             const res = await authService.getCurrentUser();
//             console.log(res);
//             dispatch(setCurrentUser(res.data));
//         } catch (e) {
//             dispatch(setCurrentUser(null));
//         } finally {
//             //Hello
//         }
//     };
// };

// export const setCurrentUser = (payload) => {
//     return {
//         type: SET_CURRENT_USER,
//         payload,
//     };
// };
