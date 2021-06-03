import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseConfig";
import AdminDashboard from "./adminDashboard";

function AdminLogin() {
  const { loginAdmin, logoutAdmin, admin } = useAuth();
  const [user] = useAuthState(auth);

  const router = useRouter();

  const initialValue = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState("");

  const { email, password } = values;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //loginAdmin(email, password);
    try {
      await loginAdmin(email, password);
      setValues(initialValue);
      router.push("/admin/adminDashboard");
    } catch {
      setError("Failed to login, Please try again");
    }
  };

  if (user) {
    router.push("/admin/adminDashboard");
    return <AdminDashboard />;
  }

  return (
    <div className="adminLogin">
      <div className="adminLoginContainer container px-2">
        <h1>ADMIN LOGIN</h1>
        <div className="rightFormContainer">
          {<p className="text-danger">{error}</p>}
          <form onSubmit={handleFormSubmit}>
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email *"
                    required
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                      setError("");
                    }}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value });
                      setError("");
                    }}
                    placeholder="Your Password *"
                    required
                    value={password}
                  />
                </div>
              </div>

              <div className="col-xl-12 col-sm-12">
                <div className="form-group form-bottom">
                  <input
                    id="form_botcheck"
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    className="thm-btn bg-clr1"
                    type="submit"
                    data-loading-text="Please wait..."
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
