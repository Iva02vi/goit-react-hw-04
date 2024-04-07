import css from "./ImageCard.module.css";

const Card = ({
  onOpen,
  card,
  card: {
    likes,
    description,
    urls: { small },
    user: { name },
  },
}) => {
  return (
    <div className={css.container} onClick={() => onOpen(card)}>
      <img className={css.image} src={small} alt={description} />
      <div className={css.info}>
        <div>
          <span className={css.bold}>Likes:</span> {likes}
        </div>
        <div>
          <span className={css.bold}>Author:</span> {name}
        </div>
      </div>
    </div>
  );
};

export default Card;
