import PropTypes from "prop-types";

const Button = ({ style }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-xl  font-poppins font-medium text-[18px] text-primary outline-none ${style} `}>
      Get Started
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
};

export default Button;
