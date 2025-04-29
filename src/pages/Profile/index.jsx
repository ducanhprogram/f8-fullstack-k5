// src/components/Profile.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "@/services/authService";
import { ToastContainer } from "react-toastify";
import { useLoading } from "@/hooks/useLoading";

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [error_s, setError_s] = useState(null);
    const { setLoading } = useLoading();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [profileResponse, currentUserData] = await Promise.all([
                    authService.getUserProfile(username),
                    authService.getCurrentUser().catch(() => null),
                ]);

                let profileData = profileResponse.data || profileResponse;
                setUser(profileData);
                setCurrentUser(currentUserData);
            } catch (error) {
                setError_s(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [username, setLoading]);

    if (error_s) return <div style={{ textAlign: "center" }}>{error_s}</div>;
    if (!user)
        return (
            <div style={{ textAlign: "center" }}>
                Không có dữ liệu người dùng
            </div>
        );

    const fullName = `${user.lastName} ${user.firstName}`;
    const isOwnProfile = currentUser && currentUser.data?.id === user.id;

    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <div
                style={{
                    padding: "20px",
                    borderRadius: "5px",
                }}
            >
                <p>
                    <strong>Họ và tên:</strong> {fullName}
                </p>
                <p>
                    <strong>Tên người dùng:</strong> {user.username}
                </p>
                <p>
                    <strong>Email: </strong> {user.email}
                </p>
                <p>
                    <strong>Trạng thái xác minh: </strong>
                    {user.emailVerifiedAt
                        ? "Tài khoản đã được xác minh"
                        : "Tài khoản chưa xác minh"}
                </p>
                <p>
                    <strong>Tuổi: </strong> {user.age ?? "Chưa cập nhật"}
                </p>
                <p>
                    <strong>Giới tính:</strong> {user.gender || "Chưa cập nhật"}
                </p>
                <p>
                    <strong>Số điện thoại:</strong>{" "}
                    {user.phone || "Chưa cập nhật"}
                </p>
                <p>
                    <strong>Ngày sinh:</strong>{" "}
                    {user.birthDate ?? "Chưa cập nhật"}
                </p>
                <p>
                    <strong>Ảnh đại diện:</strong>
                    {user.image ? (
                        <img
                            src={user.image}
                            alt="Avatar"
                            style={{ width: "100px" }}
                        />
                    ) : (
                        "Chưa cập nhật"
                    )}
                </p>
                <p>
                    <strong>Ngày tạo tài khoản:</strong>{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                </p>
            </div>
            <ToastContainer />

            {isOwnProfile && (
                <button onClick={() => navigate(`/profile/${username}/edit`)}>
                    Chỉnh sửa
                </button>
            )}
        </div>
    );
};

export default Profile;
