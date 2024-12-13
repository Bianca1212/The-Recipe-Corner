import NavigationButton from "../../components/NavigationButton";
import PropTypes from "prop-types";

const MobileNavigationLink = ({ path, children }) => {
  return (
    <NavigationButton
      path={path}
      className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
    >
      {children}
    </NavigationButton>
  );
};
export default MobileNavigationLink;

MobileNavigationLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.object,
};
