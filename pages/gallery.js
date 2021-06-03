import useFirestore from "../hooks/useFirestore";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import { useState } from "react";

function gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
      <section
        className="page-title"
        style={{ background: " url(/images/resources/research.jpg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>Gallery</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>Gallery</li>
          </ul>
        </div>
      </section>
      <div className="admin container">
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}

export default gallery;
