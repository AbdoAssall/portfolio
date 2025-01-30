import PropTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";

export default function SlickArrowLeft({ currentSlide, ...props }) {
    return (
        <button
            {...props}
            className={
                "slick-prev slick-arrow " +
                (currentSlide === 0 ? " slick-disabled" : "") 
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            style={{color: '#6229cf'}}
        >
            <IoIosArrowBack  />
        </button>
    );
};

SlickArrowLeft.propTypes = {
    currentSlide: PropTypes.string.isRequired,
    slideCount: PropTypes.string.isRequired
}