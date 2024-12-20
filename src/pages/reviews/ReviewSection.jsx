import PropTypes from "prop-types";
import ReviewGroup from "./ReviewGroup";

const ReviewsSection = ({ reviews }) => {
  // Calculează media overallRating-urilor
  const averageOverallRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.overallRating, 0) /
        reviews.length
      : 0;

  const averageDifficultyRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.difficultyRating, 0) /
        reviews.length
      : 0;

  const averageIngredientsRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.ingredientsRating, 0) /
        reviews.length
      : 0;

  const averageClarityRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.clarityRating, 0) /
        reviews.length
      : 0;

  const averageImprovementsRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.improvementsRating, 0) /
        reviews.length
      : 0;

  const averageRecommendationRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.recommendation, 0) /
        reviews.length
      : 0;

  // Formatează media pentru a afișa două zecimale
  const formattedOverallRating = averageOverallRating.toFixed(1);
  const formattedDifficultyRating = averageDifficultyRating.toFixed(1);
  const formattedIngredientsRating = averageIngredientsRating.toFixed(1);
  const formattedClarityRating = averageClarityRating.toFixed(1);
  const formattedImprovementsRating = averageImprovementsRating.toFixed(1);
  const formattedRecommendationRating = averageRecommendationRating.toFixed(1);

  return (
    <div className="ml-10">
      <h1 className="text-3xl font-semibold font-facultyGlyphic text-blue-700 mb-6">
        Reviews
      </h1>

      {reviews.length > 0 ? (
        <>
          <div>
            <ReviewGroup
              title={"Overall rating:"}
              formattedRating={formattedOverallRating}
              reviewsLength={reviews.length}
            />
            <ReviewGroup
              title={"Level of difficulty"}
              formattedRating={formattedDifficultyRating}
              reviewsLength={reviews.length}
            />
            <ReviewGroup
              title={"Ease of finding ingredients"}
              formattedRating={formattedIngredientsRating}
              reviewsLength={reviews.length}
            />

            <ReviewGroup
              title={"Clarity of instructions"}
              formattedRating={formattedClarityRating}
              reviewsLength={reviews.length}
            />
            <ReviewGroup
              title={"Necessity of improvements"}
              formattedRating={formattedImprovementsRating}
              reviewsLength={reviews.length}
            />
            <ReviewGroup
              title={"Possibility of recommendation"}
              formattedRating={formattedRecommendationRating}
              reviewsLength={reviews.length}
            />
          </div>
          <div>
            <p className="text-xl font-faculty-Glyphic text-gray-800 font-semibold">
              Comments
            </p>
            {reviews.map(
              (review) =>
                // Verifică dacă reviewText nu este gol
                review.reviewText?.trim() ? (
                  <div
                    key={review.id}
                    className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <p className="text-xl font-faculty-Glyphic text-gray-800">
                      {review.reviewText}
                    </p>
                  </div>
                ) : null // Dacă reviewText este gol, nu se va reda nimic
            )}
          </div>
        </>
      ) : (
        <p className="text-xl font-nunito text-gray-500">
          No reviews available yet.
        </p>
      )}
    </div>
  );
};

export default ReviewsSection;

ReviewsSection.propTypes = {
  reviews: PropTypes.array,
};
