import PropTypes from "prop-types";

const InputGroup = ({
  name,
  label,
  type,
  value,
  placeholder,
  handleChange,
  ref,
}) => {
  return (
    <>
      <div className="font-semibold= font-facultyGlyphic flex flex-col gap-5">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          className="w-full p-2 border-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
        />
      </div>
    </>
  );
};

export default InputGroup;
InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  ref: PropTypes.string,
};
