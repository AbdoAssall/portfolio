import { useEffect } from "react";
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({
  projects, 
  itemsPerPage = 9, 
  onPageChange,
  currentPage,
  setCurrentPage
}) {
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages)
      setCurrentPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  useEffect(() => {
    const satrtIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = satrtIndex + itemsPerPage;
    onPageChange(projects.slice(satrtIndex, endIndex));
  }, [currentPage, projects, itemsPerPage, onPageChange]);

  return (
    <nav className="flex items-center justify-center gap-2 text-center mt-8" aria-label="Pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-3 py-2 leading-0 rounded font-medium transition-colors duration-300
            ${currentPage === 1
            ? "bg-gray-100 text-gray-400 dark:bg-dark-200 dark:text-gray-300  cursor-not-allowed"
            : "bg-themColor text-white hover:bg-gray-800 dark:bg-mainColor dark:hover:bg-dark-200/80 cursor-pointer"
          }`}
        aria-label="Previous"
      >
        <IoIosArrowBack className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={
              "inline-block py-2 px-3 pt-2.5 mx-1 rounded-lg text-sm font-semibold " +
              (currentPage === index + 1
                ? "bg-themColor text-white dark:bg-dark-100/ dark:bg-mainColor"
                : "text-gray-700 dark:text-gray-200 hover:bg-themColor dark:hover:bg-mainColor hover:text-white cursor-pointer")
            }
            disabled={currentPage === index}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className={`px-3 py-2 rounded font-medium transition-colors duration-300
          ${currentPage === totalPages
            ? "bg-gray-100 text-gray-400 dark:bg-dark-200 dark:text-gray-300 cursor-not-allowed"
            : "bg-themColor text-white hover:bg-gray-800 dark:bg-mainColor dark:hover:bg-dark-200/80 cursor-pointer"
          }`}
        aria-label={"Next"}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward className="w-5 h-5" aria-hidden="true" />
      </button>
    </nav>
  );
}

Pagination.propTypes = {
  projects: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};