import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationButton = ({ path, className, onClick, children }) => {
  return (
    <>
      {/* <li> */}
      <Link to={path} className={className} onClick={onClick}>
        {children}
      </Link>
      {/* </li> */}
    </>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
};
