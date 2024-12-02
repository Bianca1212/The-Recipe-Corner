import PropTypes from "prop-types";

const TextAreaGroup = ({ name, value, rows, handleChange, ref }) => {
  return (
    <>
      <div className=" font-facultyGlyphic flex flex-col gap-5">
        <label>{name}</label>
        <textarea
          value={value}
          rows={rows}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ref={ref}
        />
      </div>
    </>
  );
};

export default TextAreaGroup;

TextAreaGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.string,
  handleChange: PropTypes.func,
  ref: PropTypes.string,
};
