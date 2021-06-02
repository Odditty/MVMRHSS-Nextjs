import { useState } from "react";
import ImageGrid from "../../components/ImageGrid";
import Modal from "../../components/Modal";
import UploadForm from "../../components/UploadForm";

import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminLogin from "./index";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

function AdminDashboard() {
  const [user] = useAuthState(auth);
  const [selectedImg, setSelectedImg] = useState(null);
  const { logoutAdmin, admin } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!admin) {
  //     router.push("/admin");
  //   }
  //   return admin;
  // }, [admin, router]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutAdmin();
      router.push("/admin");
    } catch {
      console.log("error");
    }
  };

  if (!user) return <AdminLogin />;

  return (
    <div className="admin">
      <div className="container">
        <div className="title">
          <h1>ADMIN </h1>
          {admin ? (
            <button className="logoutBtn btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
          <h2>Upload Pictures</h2>
          <p className="pt-3">
            Please make sure the images are png/jpg type files.
          </p>
        </div>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
