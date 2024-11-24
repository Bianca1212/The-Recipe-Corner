import PropTypes from "prop-types";

const StarReview = ({ rating, onRatingChange }) => {
  const handleStarClick = (ratingValue) => {
    onRatingChange(ratingValue); // Răspunde la click și transmite rating-ul
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-${
            rating >= star ? "yellow" : "gray"
          }-500`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarReview;

StarReview.propTypes = {
  rating: PropTypes.number,
  onRatingChange: PropTypes.func,
};
