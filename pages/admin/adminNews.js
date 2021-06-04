import { useState } from "react";

import firebase from "firebase";
import { auth, store } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminLogin from "./index";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import NewsPost from "../../components/NewsPost";
import { useCollection } from "react-firebase-hooks/firestore";

function AdminNews() {
  const [realtimePosts, loading, error] = useCollection(
    store.collection("news").orderBy("createdAt", "desc")
  );
  const [user] = useAuthState(auth);
  const { logoutAdmin, admin } = useAuth();
  const router = useRouter();

  const initialValues = {
    newsTitle: "",
    newsDescription: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutAdmin();
      router.push("/admin");
    } catch {
      console.log("error");
    }
  };

  !user ? <AdminLogin /> : <AdminNews />;

  const { newsTitle, newsDescription } = values;

  const handleNewsUpload = (e) => {
    e.preventDefault();
    store.collection("news").add({
      newsTitle: newsTitle,
      newsDescription: newsDescription,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValues(initialValues);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this news?"
    );
    confirm &&
      store
        .collection("news")
        .doc(id)
        .delete()
        .then(() => alert("News Sucessfully Deleted!!"));
  };

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
          <h2>Add News</h2>
          <form onSubmit={handleNewsUpload}>
            <div className="row clearfix">
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="newsTitle"
                    className="form-control"
                    placeholder="News Title *"
                    required
                    onChange={(e) =>
                      setValues({ ...values, newsTitle: e.target.value })
                    }
                    value={newsTitle}
                  />
                </div>
              </div>

              <div className="col-xl-12 col-sm-12">
                <div className="form-group">
                  <textarea
                    name="news"
                    className="form-control textarea required"
                    required
                    placeholder="Type Your News Here . . ."
                    onChange={(e) =>
                      setValues({ ...values, newsDescription: e.target.value })
                    }
                    value={newsDescription}
                  ></textarea>
                </div>
                <div className="form-group form-bottom">
                  <button
                    className="thm-btn bg-clr1"
                    type="submit"
                    data-loading-text="Please wait..."
                  >
                    Upload News
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="newContainer">
            {realtimePosts &&
              realtimePosts.docs.map((news, i) => (
                <NewsPost
                  id={news.id}
                  admin={true}
                  key={i}
                  title={news.data().newsTitle}
                  description={news.data().newsDescription}
                  createdAt={news.data().createdAt}
                  handleDelete={(id) => handleDelete(news.id)}
                />
              ))}
          </div>
          {/* <p className="pt-3">
            Please make sure the images are png/jpg type files.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default AdminNews;
