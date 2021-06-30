function NewsPost({ id, title, description, createdAt, admin, handleDelete }) {
  return (
    <div className="newsPost row p-3 my-2 border-bottom shadow-sm rounded align-items-center">
      <div className={admin ? "col-9" : "col-12"}>
        <h5>{title}</h5>
        <small className="text-muted">
          {new Date().toLocaleDateString(createdAt?.toDate()) + 7 >
          new Date(createdAt?.toDate()).toLocaleString() ? (
            <span className="newNews position-relative">
              {new Date(createdAt?.toDate()).toLocaleString()}
              <span class="position-absolute bottom-0 start-100 ms-2 translate-bottom badge rounded-pill bg-danger">
                New
                <span class="visually-hidden">unread messages</span>
              </span>
            </span>
          ) : (
            <span>{new Date(createdAt?.toDate()).toLocaleString()}</span>
          )}
        </small>
        <p
          style={{
            textAlign: "left",
            marginBottom: 0,
            fontSize: "1.06rem",
            color: "#2d2d2d",
          }}
        >
          {description}
        </p>
      </div>
      {admin && (
        <div className="col-3">
          <button className="btn btn-danger" onClick={(id) => handleDelete(id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsPost;
