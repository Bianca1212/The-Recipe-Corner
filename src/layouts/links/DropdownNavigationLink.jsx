import NavigationButton from "../../components/NavigationButton";
import PropTypes from "prop-types";

const DropdownNavigationLink = ({ path, children }) => {
  return (
    <div>
      <NavigationButton path={path} className="font-facultyGlyphic">
        {children}
      </NavigationButton>
    </div>
  );
};

export default DropdownNavigationLink;

DropdownNavigationLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.object,
};
