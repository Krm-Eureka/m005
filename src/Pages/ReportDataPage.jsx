import { useState } from "react";
import { styled } from "@mui/material/styles";
// import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import traceabilityService from "../../services/api-service/traceabilityReportData";
import { formatDateTimeSlash } from "../Services/timeStamp-Service";
import { TableSortLabel } from "@mui/material";
import HeaderLayout from "../Components/HeaderLayout-Component";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const columns =[{
  id: "date",
  label: "Date",
  sortable: true,
  aln: "center",
},
{
  id: "time",
  label: "Time",
  sortable: true,
  aln: "center",
},
{
  id: "partNumber",
  label: "Part Number",
  sortable: true,
  w: 340,
  aln: "center",
},
{
  id: "totalJudgeMent",
  label: "Total Jud",
  w: 200,
  sortable: true,
  aln: "center",
},
{
  id: "load",
  label: "Load",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "loadJudgeMent",
  label: "Load Jud",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "distance",
  label: "Distance",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "distanceJudgeMent",
  label: "Distance Jud",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "logRequest",
  label: "Log Request",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "systemClock",
  label: "System Clock",
  sortable: true,
  w: 200,
  aln: "center",
},
{
  id: "lockAcknowladge",
  label: "Lock Acknowladge",
  sortable: true,
  w: 200,
  aln: "center",
},]
// const columns = [
//   {
//     id: "id",
//     label: "Serial No",
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "modelType",
//     label: "Model",
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "lastUpdateDate",
//     label: "Date & Time",
//     w: 250,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "totalJudgement",
//     label: "Total Jud",
//     w: 200,
//     aln: "center",
//     sortable: true,
//   },

//   {
//     id: "partNumber",
//     label: "Part Number",
//     sortable: true,
//     w: 340,
//     aln: "center",
//   },
//   {
//     id: "qrCode",
//     label: "Qr Code",
//     sortable: true,
//     w: 340,
//     aln: "center",
//   },
//   {
//     id: "qrJudgement",
//     label: "Qr Code Jud",
//     w: 200,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "currentMin",
//     label: "Current Min(mA)",
//     sortable: true,
//     w: 180,
//     aln: "center",
//   },
//   {
//     id: "currentMax",
//     label: "Current Max(mA)",
//     sortable: true,
//     w: 180,
//     aln: "center",
//   },
//   {
//     id: "currentMeasured",
//     label: "Current Measured(mA)",
//     w: 250,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "currentJud",
//     label: "Current Jud",
//     sortable: true,
//     w: 200,
//     aln: "center",
//   },
//   {
//     id: "sensitivityMin",
//     label: "Sensitivity Min(dBV/Pa)",
//     w: 250,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "sensitivityMax",
//     label: "Sensitivity Max(dBV/Pa)",
//     w: 250,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "sensitivityResult",
//     label: "Sensitivity Measured(dBV/Pa)",
//     w: 250,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "sensitivityJud",
//     label: "Sensitivity Jud",
//     w: 200,
//     sortable: true,
//     aln: "center",
//   },
//   { id: "thdMin", label: "THD Min(%)", sortable: true, w: 150, aln: "center" },
//   { id: "thdMax", label: "THD Max(%)", sortable: true, w: 150, aln: "center" },
//   {
//     id: "thdResult",
//     label: "THD Measured(%)",
//     sortable: true,
//     w: 200,
//     aln: "center",
//   },
//   { id: "thdJud", label: "THD Jud", sortable: true, w: 200, aln: "center" },
//   {
//     id: "frequencyJud",
//     label: "Frequency Jud",
//     w: 200,
//     sortable: true,
//     aln: "center",
//   },
//   {
//     id: "newSerialCode",
//     label: "QRCodeScanner",
//     sortable: true,
//     w: 340,
//     aln: "center",
//   },
//   {
//     id: "reTestFlag",
//     label: "ProductionMode",
//     w: 200,
//     sortable: true,
//     aln: "center",
//   },
// ];
const DataReport = () => {
  const today = new Date().toISOString().split("T")[0];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("lastUpdateDate");

  const [rows, setRows] = useState([]);
  const now = new Date();
  const NOW = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

  const [toDate, setToDate] = useState(NOW);
  const [fromDate, setFromDate] = useState(today + " 00:00");
  // const [toDate, setToDate] = useState(today + " 23:59");
  const [serialNumber, setSerialNumber] = useState("");
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");

  const toggleDropdown = () => {
    console.log(dropDown);
    setDropdownOpen(!dropdownOpen);
  };
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const sortRows = (rows, order, orderBy) => {
    return rows.slice().sort((a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];
      if (Date.parse(valueA) && Date.parse(valueB)) {
        return order === "asc"
          ? new Date(valueA) - new Date(valueB)
          : new Date(valueB) - new Date(valueA);
      }
      return order === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
        ? 1
        : -1;
    });
  };

  const mapStatus = (value) => {
    if (value === 2 || value === 3 || value === "FAIL" || value === "FAILED")
      return "FAIL";
    if (value === 1 || value === "PASS" || value === "PASSED") return "PASS";
    if (value === 0 || value !== 1 || value !== 2) return null;
    return value;
  };

  const getColor = (value) => {
    if (value === 0 || value === 1 || value === "FAIL" || value === "FAILED")
      return "red";
    if (
      value === 2 ||
      value === "PASS" ||
      value === "PASSED" ||
      value === false
    )
      return "green";
    if (value === 3 || value === "FAIL" || value === "FAILED" || value === true)
      return "red";

    return "inherit";
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSerialNumber(event.target.value);
  };

  const handleFromDateChange = (event) => {
    const inputValue = event.target.value;
    const Format = inputValue.replace("T", " ");
    // console.log(Format);
    setFromDate(Format);
  };

  const handleToDateChange = (event) => {
    const inputValue = event.target.value;
    const Format = inputValue.replace("T", " ");
    // console.log(Format);
    setToDate(Format);
  };

  const handleClear = () => {
    setRows([
      // {
      //   id: 1,
      //   modelType: "Status 1",
      //   lastUpdateDate: "2024-10-25 12:00",
      //   totalJudgement: 1,
      //   serialCode: "LM-12345",
      //   qrCode: "QR-54321",
      //   qrJudgement: 1,
      //   currentMin: 1.2,
      //   currentMax: 2.3,
      //   currentMeasured: 1.9,
      //   currentJud: 1,
      //   sensitivityMin: -45,
      //   sensitivityMax: -30,
      //   sensitivityResult: -35,
      //   sensitivityJud: 1,
      //   thdMin: 0.5,
      //   thdMax: 1.2,
      //   thdResult: 0.9,
      //   thdJud: 1,
      //   frequencyJud: 1,
      //   reTestFlag: true,
      //   newSerialCode: "1231213213213213213212132",
      // },
      // {
      //   id: 2,
      //   modelType: "Status 2",
      //   lastUpdateDate: "2024-10-25 12:05",
      //   totalJudgement: 2,
      //   serialCode: "LM-12346",
      //   qrCode: "QR-54322",
      //   qrJudgement: 2,
      //   currentMin: 1.1,
      //   currentMax: 2.5,
      //   currentMeasured: 2.6,
      //   currentJud: 2,
      //   sensitivityMin: -42,
      //   sensitivityMax: -28,
      //   sensitivityResult: -30,
      //   sensitivityJud: 2,
      //   thdMin: 0.6,
      //   thdMax: 1.3,
      //   thdResult: 1.1,
      //   thdJud: 2,
      //   frequencyJud: 2,
      //   reTestFlag: true,
      // },
      // {
      //   id: 3,
      //   modelType: "Status 3",
      //   lastUpdateDate: "2024-10-25 12:10",
      //   totalJudgement: 3,
      //   serialCode: "LM-12347",
      //   qrCode: "QR-54323",
      //   qrJudgement: 3,
      //   currentMin: 1.2,
      //   currentMax: 2.4,
      //   currentMeasured: 2.0,
      //   currentJud: 3,
      //   sensitivityMin: -47,
      //   sensitivityMax: -29,
      //   sensitivityResult: -32,
      //   sensitivityJud: 3,
      //   thdMin: 0.4,
      //   thdMax: 1.0,
      //   thdResult: 0.8,
      //   thdJud: 3,
      //   frequencyJud: 3,
      //   reTestFlag: true,
      // },
      // {
      //   id: 4,
      //   modelType: "Status 5",
      //   lastUpdateDate: "2024-10-25 12:15",
      //   totalJudgement: 5,
      //   serialCode: "LM-12348",
      //   qrCode: "QR-54324",
      //   qrJudgement: 5,
      //   currentMin: 1.5,
      //   currentMax: 2.7,
      //   currentMeasured: 2.3,
      //   currentJud: 5,
      //   sensitivityMin: -40,
      //   sensitivityMax: -26,
      //   sensitivityResult: -36,
      //   sensitivityJud: 5,
      //   thdMin: 0.7,
      //   thdMax: 1.4,
      //   thdResult: 1.3,
      //   thdJud: 5,
      //   frequencyJud: 5,
      //   reTestFlag: false,
      // },
      // {
      //   id: 5,
      //   modelType: "Status 0",
      //   lastUpdateDate: "2024-10-25 12:15",
      //   totalJudgement: 0,
      //   serialCode: "LM-12348",
      //   qrCode: "QR-54324",
      //   qrJudgement: 0,
      //   currentMin: 1.5,
      //   currentMax: 2.7,
      //   currentMeasured: 2.3,
      //   currentJud: 0,
      //   sensitivityMin: -40,
      //   sensitivityMax: -26,
      //   sensitivityResult: -36,
      //   sensitivityJud: 0,
      //   thdMin: 0.7,
      //   thdMax: 1.4,
      //   thdResult: 1.3,
      //   thdJud: 0,
      //   frequencyJud: 0,
      //   reTestFlag: false,
      // },
    ]);
    setSearchTerm("");
    setFromDate(fromDate);
    setToDate(toDate);
  };
  const searchWithDate = async () => {
    // try {
    //   await traceabilityService.getTraceabilityDataWithDate(
    //     "1",
    //     fromDate,
    //     toDate,
    //     serialNumber,
    //     setRows
    //   );
    // } catch (err) {
    //   setError(err);
    // }
  };
  const handleSearchBySerial = async () => {
    // try {
    //   await traceabilityService.getAcousticTraceLogBySerialNo(
    //     "1",
    //     searchTerm,
    //     setRows
    //   );
    // } catch (err) {
    //   setError(err);
    // }
  };
  const filteredRows = rows.filter((row) => {
    const rowDate = new Date(row.lastUpdateDate);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    if (from) {
      from.setHours(0, 0, 0, 0);
    }
    if (to) {
      to.setHours(23, 59, 59, 999);
    }
    const isDateInRange = (!from || rowDate >= from) && (!to || rowDate <= to);
    const isSearchMatch =
      searchTerm === "" ||
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );

    const isSerialMatch =
      !serialNumber || row.serialCode.includes(serialNumber);
    return isDateInRange && isSearchMatch && isSerialMatch;
  });
  const sortedRows = sortRows(filteredRows, order, orderBy);
  const toFixedTwo = (value) => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? value : numericValue.toFixed(2);
  };
  const exportToCSV = () => {
    const headers = columns.map((column) => `"${column.label}"`).join(",");

    const csvRows = filteredRows.map((row) => {
      return columns
        .map((column) => {
          let value = row[column.id];

          if (column.id === "lastUpdateDate" || column.id === "creationDate") {
            value = formatDateTimeSlash(value);
          }
          if (column.id === "id") {
            const extractedCode = row.serialCode
              ? row.serialCode.split("-").pop()
              : "N/A";

            const number =
              extractedCode !== "N/A" ? parseInt(extractedCode, 10) : "N/A";

            return number;
          }

          if (
            column.id === "sensitivityResult" ||
            column.id === "thdResult" ||
            column.id === "currentMeasured"
          ) {
            value = toFixedTwo(value);
          }

          if (
            column.id === "totalJudgement" ||
            column.id === "qrJudgement" ||
            column.id === "currentJud" ||
            column.id === "sensitivityJud" ||
            column.id === "thdJud" ||
            column.id === "frequencyJud"
          ) {
            if (column.id === "qrJudgement") {
              value =
                row[column.id] === 1 ||
                row[column.id] === "PASS" ||
                row[column.id] === "PASSED"
                  ? "PASS"
                  : row[column.id] === 5 ||
                    row[column.id] === 3 ||
                    row[column.id] === "FAIL" ||
                    row[column.id] === "FAILED"
                  ? "FAIL"
                  : row[column.id] !== 2 ||
                    row[column.id] !== 3 ||
                    row[column.id] !== "FAIL" ||
                    row[column.id] !== "FAILED"
                  ? "NA"
                  : mapStatus(row[column.id]);
            } else {
              value = mapStatus(row[column.id]);
            }
          }
          if (column.id === "reTestFlag") {
            return row[column.id] === false
              ? "A"
              : row[column.id] === true
              ? "R"
              : "unknown";
          }

          return typeof value === "string"
            ? `"${value.replace(/"/g, '""').replace(/,/g, "\\,")}"`
            : value || "";
        })
        .join(",");
    });

    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    let hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, "0") : "12";

    const formattedDate = `${day}_${month}_${year}_${hours}_${minutes}_${seconds} ${ampm}`;

    const csvContent = [
      `"Traceability Report"`,
      `"Date From : ${fromDate}" `,
      `"Date To   : ${toDate}"`,
      "",
      headers,
      ...csvRows,
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const fileName = `TraceabilityReport_${formattedDate}.csv`;
    a.href = url;
    a.download = fileName;

    a.click();
    URL.revokeObjectURL(url);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSerialChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  {
    error && (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error.message}</span>
      </div>
    );
  }
  return (
    <>
      <HeaderLayout page="Data Report" />
      <div className="flex flex-col text-gray-700 bg-gray-300 m-4 pb-4 rounded-md w-90% h-fit">
        <div className="title bg-green-500 p-2 rounded-t-md font-bold">
          <p>Traceability Report of EOLTStation</p>
        </div>
        <div className="flex flex-wrap mx-4 py-2 h-fit items-center justify-center">
          <div className="flex flex-col p-0">
            <button
              onClick={toggleDropdown}
              className=" relative w-fit text-white mt-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              {dropDown === "" || null
                ? "Filter Options"
                : dropDown === "date"
                ? "By Date"
                : dropDown === "serial"
                ? "By Serial Code"
                : "Filter Options"}

              <svg
                className="w-2.5 h-2.5 ml-4"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div>
                <ul className=" py-2 text-sm text-gray-700 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-fit mb-2">
                  <li>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 w-full cursor-pointer"
                      onClick={() => {
                        setDropDown("date");
                        toggleDropdown();
                      }}
                    >
                      By Date
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 w-full cursor-pointer"
                      onClick={() => {
                        setDropDown("serial");
                        toggleDropdown();
                      }}
                    >
                      By Serial Code
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="mx-2 mb-2 flex ">
            {rows && rows.length > 0 && dropDown !== "serial" ? (
              <div className="flex-row">
                <label
                  htmlFor="serialNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-800"
                >
                  Serial Number
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  className="rounded-md h-9 text-sm border-gray-400 w-50 p-2"
                  placeholder="Serial Number..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            ) : (
              ""
            )}
            {/* <div className="flex"> */}

            {dropDown === "date" ? (
              <div className="flex">
                <div className="mx-2 mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-800">
                    From Date
                  </label>
                  <input
                    // type="date"
                    type="datetime-local"
                    className="rounded-md h-9 text-sm border-gray-400 w-50 p-2"
                    value={fromDate}
                    onChange={handleFromDateChange}
                  />
                </div>
                <div className="mx-2 mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-800">
                    To Date
                  </label>
                  <input
                    // type="date"
                    type="datetime-local"
                    className="rounded-md h-9 text-sm border-gray-400 w-50 p-2"
                    value={toDate}
                    onChange={handleToDateChange}
                  />
                </div>
              </div>
            ) : dropDown === "serial" ? (
              <div className="flex flex-col">
                <label
                  htmlFor="serialNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-800"
                >
                  Serial Number
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  className="rounded-md h-9 text-sm border-gray-400 w-50 p-2"
                  placeholder="Serial Number..."
                  value={searchTerm}
                  onClick={handleSearchBySerial}
                  onChange={handleSerialChange}
                />
              </div>
            ) : (
              setDropDown("date")
            )}
            {/* </div> */}
          </div>

          <div className="justify-items-center mx-2 mt-3">
            <button
              onClick={
                dropDown === "serial" ? handleSearchBySerial : searchWithDate
              }
              className="mx-2 my-1 py-1 px-2 bg-green-500 hover:bg-green-700 text-gray-900 hover:text-white h-fit w-fit border rounded-btn"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className={`mx-2 my-1 py-1 px-2  bg-red-500 hover:bg-red-700 text-gray-900 hover:text-white h-fit w-fit border rounded-btn`}
            >
              CLEAR
            </button>
            {rows && rows.length > 0 ? (
              <>
                <button
                  onClick={exportToCSV}
                  className={`mx-2 my-1 py-1 px-2 ${
                    !searchTerm ? "hidden" : ""
                  } bg-blue-500 hover:bg-blue-700 text-gray-900 hover:text-white h-fit w-fit border rounded-btn`}
                >
                  EXPORT
                </button>
                <button
                  onClick={exportToCSV}
                  className={`mx-2 my-1 py-1 px-2 ${
                    searchTerm ? "hidden" : ""
                  } bg-blue-500 hover:bg-blue-600 text-gray-900 hover:text-white h-fit w-fit border rounded-btn`}
                >
                  EXPORT ALL
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={dropdownOpen === true ? "p-4" : "p-4"}>
          {/* <Paper
            
          > */}
          <TablePagination
            className={dropdownOpen === true ? "mt-12" : ""}
            rowsPerPageOptions={[5, 10, 500, 1000, 5000, 10000]}
            component="div"
            count={sortedRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 700,
              overflowY: "scroll",
              overflowX: "scroll",
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      sx={{ minWidth: column.w }}
                      align={column.aln || "center"}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      {column.sortable ? (
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : "asc"}
                          onClick={() => handleRequestSort(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      ) : (
                        column.label
                      )}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow key={row.id}>
                      {columns.map((column) => (
                        <StyledTableCell
                          key={column.id}
                          align={column.aln || "left"}
                          style={{
                            color: (() => {
                              if (
                                column.id === "totalJudgement" ||
                                column.id === "qrJudgement" ||
                                column.id === "currentJud" ||
                                column.id === "sensitivityJud" ||
                                column.id === "thdJud" ||
                                column.id === "frequencyJud"
                              ) {
                                if (column.id === "qrJudgement") {
                                  return row[column.id] === 1 ||
                                    row[column.id] === "PASS" ||
                                    row[column.id] === "PASSED"
                                    ? "green"
                                    : "red";
                                }
                                return row[column.id] === 1 ||
                                  row[column.id] === "PASS"
                                  ? "green"
                                  : "red";
                              }

                              if (
                                column.id === "thdJud" ||
                                column.id === "laserMarkStatus" ||
                                column.id === "creationDate" ||
                                column.id === "tracReportStatus" ||
                                column.id === "qrStatus" ||
                                column.id === "acousticStatus" ||
                                column.id === "reTestFlag"
                              ) {
                                return getColor(row[column.id]);
                              }
                              return "inherit";
                            })(),
                          }}
                        >
                          {(() => {
                            if (
                              column.id === "lastUpdateDate" ||
                              column.id === "creationDate"
                            ) {
                              return formatDateTimeSlash(row[column.id]);
                            }

                            if (
                              column.id === "sensitivityResult" ||
                              column.id === "thdResult" ||
                              column.id === "currentMeasured"
                            ) {
                              return toFixedTwo(row[column.id]);
                            }

                            if (column.id === "id") {
                              const extractedCode = row.serialCode
                                ? row.serialCode.split("-").pop()
                                : "N/A";

                              const number =
                                extractedCode !== "N/A"
                                  ? parseInt(extractedCode, 10)
                                  : "N/A";

                              return number;
                            }

                            if (
                              column.id === "totalJudgement" ||
                              column.id === "qrJudgement" ||
                              column.id === "currentJud" ||
                              column.id === "sensitivityJud" ||
                              column.id === "thdJud" ||
                              column.id === "frequencyJud"
                            ) {
                              if (column.id === "qrJudgement") {
                                return row[column.id] === 1 ||
                                  row[column.id] === "PASS" ||
                                  row[column.id] === "PASSED"
                                  ? "PASS"
                                  : row[column.id] === 5 ||
                                    row[column.id] === 3 ||
                                    row[column.id] === "FAIL" ||
                                    row[column.id] === "FAILED"
                                  ? "FAIL"
                                  : row[column.id] !== 2 ||
                                    row[column.id] !== 3 ||
                                    row[column.id] !== "FAIL" ||
                                    row[column.id] !== "FAILED"
                                  ? "NA"
                                  : mapStatus(row[column.id]);
                              }

                              return mapStatus(row[column.id]);
                            }
                            if (column.id === "reTestFlag") {
                              return row[column.id] === false
                                ? "A"
                                : row[column.id] === true
                                ? "R"
                                : "unknown";
                            }
                            return row[column.id] || "";
                          })()}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 500, 1000, 5000, 10000]}
            component="div"
            count={sortedRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {/* </Paper> */}
        </div>
      </div>
    </>
  );
};

export default DataReport;
