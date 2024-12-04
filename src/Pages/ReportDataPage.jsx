import { useEffect, useRef, useState } from "react";
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
import traceabilityService from "../Services/data-service/TraceabilityData";
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
const columns = [
  {
    id: "id",
    label: "ID",
    sortable: true,
    aln: "center",
  },
  // {
  //   id: "productionDateDesc",
  //   label: "Fecha",
  //   sortable: true,
  //   aln: "center",
  // },
  {
    id: "productionDate",
    label: "Fecha y Hora",
    sortable: true,
    aln: "center",
  },
  // {
  //   id: "productionTimeDesc",
  //   label: "Hora",
  //   sortable: true,
  //   aln: "center",
  // },
  {
    id: "jigDesc",
    label: "dispositivo de fijación",
    sortable: true,
    w: 150,
    aln: "center",
  },
  {
    id: "partNumber",
    label: "Número de Parte",
    sortable: true,
    w: 200,
    aln: "center",
  },
  {
    id: "totalJudgementDesc",
    label: "Juicio Total",
    w: 150,
    sortable: true,
    aln: "center",
  },
  {
    id: "loadValue",
    label: "Carga (N)",
    sortable: true,
    w: 150,
    aln: "center",
  },
  {
    id: "loadJudgementDesc",
    label: "Juicio de Carga",
    sortable: true,
    w: 150,
    aln: "center",
  },
  {
    id: "distanceValue",
    label: "Distancia (mm)",
    sortable: true,
    w: 150,
    aln: "center",
  },
  {
    id: "distanceJudgementDesc",
    label: "Juicio de Distancia",
    sortable: true,
    w: 150,
    aln: "center",
  },

  {
    id: "boxNumber",
    label: "Número de Caja",
    sortable: true,
    w: 200,
    aln: "center",
  },
  {
    id: "palletNumber",
    label: "Número de Palet",
    sortable: true,
    w: 200,
    aln: "center",
  },
];
const DataReport = () => {
  // const today = new Date().toISOString().split("T")[0];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("lastUpdateDate");
  const [rows, setRows] = useState([]);
  const now = new Date();
  const NOW = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const YESTERDAY = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${yesterday.getDate().toString().padStart(2, "0")}`;
  // ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
  const [toDate, setToDate] = useState(NOW);
  const [fromDate, setFromDate] = useState(YESTERDAY);
  const [serialNumber, setSerialNumber] = useState("");
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [dropDown, setDropDown] = useState("");
  const inputRef = useRef(null);

  // const toggleDropdown = () => {
  //   console.log(dropDown);
  //   setDropdownOpen(!dropdownOpen);
  // };
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

  // const mapStatus = (value) => {
  //   if (value === 2 || value === 3 || value === "FAIL" || value === "FAILED")
  //     return "FAIL";
  //   if (value === 1 || value === "PASS" || value === "PASSED") return "PASS";
  //   if (value === 0 || value !== 1 || value !== 2) return null;
  //   return value;
  // };

  // const getColor = (value) => {
  //   if (value === 0 || value === 2 || value === "NG") return "red";
  //   if (value === 1 || value === "OK") return "green";
  //   return "inherit";
  // };

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   setSerialNumber(event.target.value);
  // };

  const formatToCustomAmPm = (isoDate) => {
    const date = new Date(isoDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12

    return `${year}-${month}-${day} ${hours}.${minutes} ${ampm}`;
  };

  const handleFromDateChange = (event) => {
    const inputValue = event.target.value;
    const Format = inputValue.replace("T", " ");
    console.log(Format);
    setFromDate(Format);
  };

  const handleToDateChange = (event) => {
    const inputValue = event.target.value;
    const Format = inputValue.replace("T", " ");

    setToDate(Format);
  };
  useEffect(() => {
    if (rows.length > 0) {
      inputRef.current?.focus();
    }
  }, [rows]);

  const handleClear = async () => {
    console.log(sortedRows);
    setSearchTerm("");
    setSerialNumber("");
    console.log(searchTerm);
    console.log(sortedRows);
    setRows([]);
    setFromDate(fromDate);
    setToDate(toDate);
  };
  const searchWithDate = async () => {
    try {
      await traceabilityService.getTraceabilityDataWithDate(
        traceabilityService.version,
        fromDate,
        toDate,
        setRows
      );
    } catch (err) {
      setError(err);
    }
  };
  const filteredRows = rows.filter((row) => {
    const rowDate = new Date(row.productionDate);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    // const isDateInRange = (!from || rowDate >= from) && (!to || rowDate <= to);
    const isDateInRange = () => {
      const rowDateStr = rowDate.toISOString().split("T")[0];
      const fromStr = from ? from.toISOString().split("T")[0] : null;
      const toStr = to ? to.toISOString().split("T")[0] : null;
    
      return (!fromStr || rowDateStr >= fromStr) && (!toStr || rowDateStr <= toStr);
    };
    const isSearchMatch =
      searchTerm === "" ||
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
// console.log(isDateInRange);
    const isSerialMatch =
      !serialNumber || row.serialCode.includes(serialNumber);
    return isDateInRange && isSearchMatch && isSerialMatch;
  });
  const sortedRows = sortRows(filteredRows, order, orderBy);
  // console.log(filteredRows);
  // 
  // console.log(sortedRows);
  
  const exportToCSV = () => {
    const headers = columns.map((column) => `"${column.label}"`).join(",");

    const csvRows = filteredRows.map((row) => {
      return columns
        .map((column) => {
          let value = row[column.id];
          if (column.id === "productionDate") {
            value = formatToCustomAmPm(value);
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
          <div className="mx-2 mb-2 flex ">
            {rows && rows.length > 0
              ? ""
              : // <div className="flex-row">
                //   <label
                //     htmlFor="serialNumber"
                //     className="block text-sm font-medium text-gray-700 dark:text-gray-800"
                //   >
                //     Serial Number
                //   </label>
                //   <input
                //     type="text"
                //     ref={inputRef}
                //     id="serialNumber"
                //     className="rounded-md h-9 text-sm border-gray-400 w-50 p-2"
                //     placeholder="Serial Number..."
                //     value={searchTerm}
                //     onChange={handleSearchChange}
                //   />
                // </div>
                ""}
            {/* <div className="flex"> */}
            <div className="flex">
              <div className="mx-2 mb-2 w-44">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-800">
                  <span className="font-semibold ">From Date :</span> {fromDate}
                </label>
                <input
                  type="date"
                  // type="datetime-local"
                  className="rounded-md h-9 text-sm border-gray-400 p-2 w-44"
                  value={fromDate}
                  onChange={handleFromDateChange}
                />
              </div>
              <div className="mx-2 mb-2 w-44">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-800">
                  <span className="font-semibold ">To Date :</span> {toDate}
                </label>
                <input
                  type="date"
                  // type="datetime-local"
                  className="rounded-md h-9 text-sm border-gray-400 p-2 w-44"
                  value={toDate}
                  onChange={handleToDateChange}
                />
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className="justify-items-center mx-2 mt-3">
            <button
              onClick={searchWithDate}
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
                          className={
                            column.id === "loadJudgementDesc" ||
                            column.id === "distanceJudgementDesc" ||
                            column.id === "totalJudgementDesc"
                              ? "font-semibold"
                              : ""
                          }
                          style={{
                            color:
                              (column.id === "loadJudgementDesc" ||
                                column.id === "distanceJudgementDesc" ||
                                column.id === "totalJudgementDesc") &&
                              row[column.id] === "OK"
                                ? "green"
                                : (column.id === "loadJudgementDesc" ||
                                    column.id === "distanceJudgementDesc" ||
                                    column.id === "totalJudgementDesc") &&
                                  row[column.id] !== "NOK"
                                ? "red"
                                : "inherit",
                          }}
                        >
                          {column.id === "productionDate"
                            ? formatToCustomAmPm(row[column.id])
                            : row[column.id]}
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
