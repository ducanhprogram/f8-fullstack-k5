import { useSelector } from "react-redux";

function useCurrentUser() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    return currentUser;
}

export default useCurrentUser;
