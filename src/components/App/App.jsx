import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchImages from "../../api";
import css from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({});
  const [loadBtn, setLoadBtn] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setLoader(true);
        const { imageData, totalPages } = await fetchImages(query, page);

        setImages((prevImages) => {
          return [...prevImages, ...imageData];
        });

        setLoadBtn(totalPages !== page && imageData.length > 0);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (inputQuery) => {
    setQuery(inputQuery);
    setLoadBtn(false);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  const handleOpen = (value) => {
    setIsOpen(true);
    setContent(value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <div className={css.main}>
        {images.length > 0 && (
          <ImageGallery images={images} onOpen={handleOpen} />
        )}
        {loader && <Loader />}
        {error && <ErrorMessage />}
        {loadBtn && <LoadMoreBtn onClick={handleLoadMore} />}

        <ImageModal isOpen={isOpen} onClose={handleClose} content={content} />
      </div>
    </div>
  );
};

export default App;
