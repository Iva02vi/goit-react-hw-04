import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onOpen }) => {
  images.map((image) => console.log(image));
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.image}>
          <ImageCard card={image} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
