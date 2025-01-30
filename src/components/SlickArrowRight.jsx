import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

export default function SlickArrowRight({ currentSlide, slideCount, ...props }) {
    return (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <IoIosArrowForward />
        </button>
    );
}

SlickArrowRight.propTypes = {
    currentSlide: PropTypes.string.isRequired,
    slideCount: PropTypes.string.isRequired
}