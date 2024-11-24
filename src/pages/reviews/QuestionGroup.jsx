import PropTypes from "prop-types";

const QuestionGroup = ({ question, children }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">{question}</label>
        {children}
      </div>
    </>
  );
};

export default QuestionGroup;

QuestionGroup.propTypes = {
  children: PropTypes.array,
  question: PropTypes.string,
};
