import NavigationButton from "../../components/NavigationButton";
import PropTypes from "prop-types";

const NavigationLink = ({ path, children, onClick }) => {
  return (
    <div>
      <NavigationButton
        path={path}
        onClick={onClick}
        className="font-facultyGlyphic font-bold"
      >
        {children}
      </NavigationButton>
    </div>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object,
};
