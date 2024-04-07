import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, content: { description, urls } }) => {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {isOpen && (
        <img className={css.image} src={urls.regular} alt={description} />
      )}
    </Modal>
  );
};

export default ImageModal;
