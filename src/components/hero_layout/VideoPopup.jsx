import { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

const VideoPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="z-50">
      <button onClick={openModal}>Play Demo</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player Modal"
      >
        <button onClick={closeModal}>Close</button>
        <YouTube videoId="https://www.youtube.com/watch?v=sGZ6AlAnULc" />
      </Modal>
    </div>
  );
};

export { VideoPopup };
