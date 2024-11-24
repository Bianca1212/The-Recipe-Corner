import { useState } from "react";
import StarReview from "./StarReview";
import PropTypes from "prop-types";
import QuestionGroup from "./QuestionGroup";
// import useReviews from "../../hooks/useReviews";
import axios from "axios";

const RecipeReviewModal = ({ isOpen, onClose, recipe, getReviews }) => {
  const [review, setReview] = useState("");
  const [question1Rating, setQuestion1Rating] = useState(0);
  const [question2Rating, setQuestion2Rating] = useState(0);
  const [question3Rating, setQuestion3Rating] = useState(0);
  const [question4Rating, setQuestion4Rating] = useState(0);
  const [question5Rating, setQuestion5Rating] = useState(0);
  const [question6Rating, setQuestion6Rating] = useState(0);
  // const { postReviews } = useReviews();

  const reviewData = {
    recipeId: recipe.id,
    recipeName: recipe.name,
    overallRating: question1Rating,
    difficultyRating: question2Rating,
    recommendation: question3Rating,
    ingredientsRating: question4Rating,
    clarityRating: question5Rating,
    improvementsRating: question6Rating,
    reviewText: review ? review : undefined,
  };

  const isFormValid = () => {
    return (
      question1Rating > 0 &&
      question2Rating > 0 &&
      question3Rating > 0 &&
      question4Rating > 0 &&
      question5Rating > 0 &&
      question6Rating > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert(
        "Please provide a rating for all the questions before submitting your review."
      );
      return; // Oprește submit-ul dacă nu toate ratingurile sunt completate
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/reviews",
        reviewData
      );
      console.log("Review submitted:", response.data);
      onClose(); // Închide modalul după trimitere
      getReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("There was an error submitting your review.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">
          Leave a Review for {recipe.name}
        </h2>

        <form onSubmit={handleSubmit}>
          <QuestionGroup>
            How would you rate the overall taste of this recipe?
            <StarReview
              rating={question1Rating}
              onRatingChange={setQuestion1Rating}
            />
          </QuestionGroup>
          <QuestionGroup>
            How would you rate the difficulty of making this recipe?
            <StarReview
              rating={question2Rating}
              onRatingChange={setQuestion2Rating}
            />
          </QuestionGroup>
          <QuestionGroup>
            Would you recommend this recipe to others?
            <StarReview
              rating={question3Rating}
              onRatingChange={setQuestion3Rating}
            />
          </QuestionGroup>
          <QuestionGroup>
            How easy was it to find the ingredients needed for this recipe?
            <StarReview
              rating={question4Rating}
              onRatingChange={setQuestion4Rating}
            />
          </QuestionGroup>
          <QuestionGroup>
            How would you rate the clarity and ease of following the
            instructions?
            <StarReview
              rating={question5Rating}
              onRatingChange={setQuestion5Rating}
            />
          </QuestionGroup>
          <QuestionGroup>
            How would you rate the recipe in terms of needed improvements?
            <StarReview
              rating={question6Rating}
              onRatingChange={setQuestion6Rating}
            />
          </QuestionGroup>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Do you have any additional comments?
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your review here..."
            />
          </div>

          <div className="mt-4 text-center flex justify-between">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeReviewModal;

RecipeReviewModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  recipe: PropTypes.object,
  getReviews: PropTypes.func,
};
