import useFirestore from "../hooks/useFirestore";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import { useState } from "react";

function gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
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
