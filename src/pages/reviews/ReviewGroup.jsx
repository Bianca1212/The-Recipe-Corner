import PropTypes from "prop-types";

const ReviewGroup = ({ title, formattedRating, reviewsLength }) => {
  return (
    <div className="mb-6 flex flex-col">
      <p className="text-xl font-facultyGlyphic text-gray-800">
        <strong>{title}</strong> {formattedRating}
        <span className="text-yellow-500">★</span>
      </p>
      <p className="text-sm text-gray-500">({reviewsLength} reviews)</p>
    </div>
  );
};
export default ReviewGroup;

ReviewGroup.propTypes = {
  title: PropTypes.string,
  formattedRating: PropTypes.string,
  reviewsLength: PropTypes.number,
};
