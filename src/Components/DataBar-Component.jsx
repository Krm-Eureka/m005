import PropTypes from "prop-types";

const DataBar = ({
  cursor = "default",
  wth = "full",
  title = "Title",
  value = "",
  type = "text",
  disable = false,
}) => {
  const isError =
    value === "NONE" ||
    value === "Invalid Date" ||
    // value.trim() === "" ||
    value === "NOK";

  const isWarning =
    (title === "JIG" && value !== "1" && value !== "2") ||
    (title === "JIG" && value === "0") ||
    value === "Unknown" ||
    value === "No_Data" ||
    value === undefined ||
    value === null;

  const isSuccess = !isError && !isWarning;

  return (
    <div className="mr-4 mb-2 ">
      <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-black">
        {title}
      </label>
      <input
        type={type}
        id={title}
        value={
          value === "Invalid Date"
            ? "Invalid Date"
            : value === "NOK"
              ? "NOK"
              : isError
                ? "NONE"
                : isWarning
                  ? "Invalid_Data"
                  : value
        }
        className={`cursor-${cursor} w-${wth} p-1.5 bg-gray-50 ${isSuccess
          ? `bg-green-100 border-green-200`
          : isWarning
            ? `bg-yellow-100 border-yellow-200`
            : `bg-red-100 border-red-200`
          } border text-lg border-gray-300 text-gray-900 ${isSuccess
            ? `text-black font-semibold`
            : isWarning
              ? `text-black font-semibold`
              : `text-black font-semibold`
          } rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:text-white dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={title}
        disabled={disable}
      />
    </div>
  );
};

DataBar.propTypes = {
  cursor: PropTypes.string,
  wth: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disable: PropTypes.bool,
};

export default DataBar;
