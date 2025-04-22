import "./NextButton.css"; // Assuming you're placing styles in a separate file
import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";

const NextButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Optional: trigger any visual feedback here
    setTimeout(() => {
      navigate('/courses'); // your target route
    }, 500); // delay in ms (match your animation duration)
  };

  return (
    <button 

    className="cta" onClick={handleClick}>
      <span className="span d-flex justify-content-between fw-bold">ALL COURSES <i className="bi bi-arrow-right-circle ms-3"></i> </span>
      <span className="second">
        <svg
          width="50px"
          height="20px"
          viewBox="0 0 66 43"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow" fill="none">
            <path
              className="one"
              d="M40.1543933,3.89485454 L43.9763149,0.139296592 ..."
              fill="#FFFFFF"
            />
            <path
              className="two"
              d="M20.1543933,3.89485454 L23.9763149,0.139296592 ..."
              fill="#FFFFFF"
            />
            <path
              className="three"
              d="M0.154393339,3.89485454 L3.97631488,0.139296592 ..."
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </span>
    </button>
  );
};

export default NextButton;
