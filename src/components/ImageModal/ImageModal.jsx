import css from "./ImageModal.module.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose} 
      contentLabel="Image Modal"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true}
    >
      <div className={css.modalContainer}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}