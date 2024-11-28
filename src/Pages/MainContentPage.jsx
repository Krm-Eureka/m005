import { useEffect, useState } from "react";
import HeaderLayout from "../Components/HeaderLayout-Component";
import Loading from "../Components/Loading";
import DataBar from "../Components/DataBar-Component";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const getJudgementText = (value) => {
    return !value
      ? "No_Data"
      : value === 1
      ? "OK"
      : value === 2
      ? "NOK"
      : "Unknown";
  };
  const initialData = [
    {
      date: "01-11-2024",
      time: "15:46",
      partNumber: "TesT-77997",
      totalJudgeMent: 1,
      load: 23.12,
      loadJudgeMent: 2,
      distance: 12.34,
      distanceJudgeMent: 1,
      logRequest: true,
      systemClock: false,
      lockAcknowladge: 1,
    },
    // {
    //   date: "02-11-2024",
    //   time: "10:30",
    //   partNumber: "TesT-88001",
    //   totalJudgeMent: 0,
    //   load: 18.45,
    //   loadJudgeMent: 1,
    //   distance: 10.78,
    //   distanceJudgeMent: 1,
    //   logRequest: false,
    //   systemClock: true,
    //   lockAcknowladge: 0,
    // },
    // {
    //   date: "03-11-2024",
    //   time: "12:20",
    //   partNumber: "TesT-66045",
    //   totalJudgeMent: 1,
    //   load: 29.34,
    //   loadJudgeMent: 3,
    //   distance: 15.23,
    //   distanceJudgeMent: 1,
    //   logRequest: true,
    //   systemClock: false,
    //   lockAcknowladge: 1,
    // },
    // {
    //   date: "04-11-2024",
    //   time: "09:15",
    //   partNumber: "TesT-55039",
    //   totalJudgeMent: 2,
    //   load: 22.89,
    //   loadJudgeMent: 2,
    //   distance: 11.67,
    //   distanceJudgeMent: 1,
    //   logRequest: true,
    //   systemClock: false,
    //   lockAcknowladge: 0,
    // },
    // {
    //   date: "05-11-2024",
    //   time: "14:50",
    //   partNumber: "TesT-99010",
    //   totalJudgeMent: 1,
    //   load: 25.9,
    //   loadJudgeMent: 3,
    //   distance: 14.32,
    //   distanceJudgeMent: 1,
    //   logRequest: true,
    //   systemClock: true,
    //   lockAcknowladge: 1,
    // },
    // {
    //   date: "06-11-2024",
    //   time: "16:00",
    //   partNumber: "TesT-33020",
    //   totalJudgeMent: 0,
    //   load: 20.78,
    //   loadJudgeMent: 2,
    //   distance: 12.45,
    //   distanceJudgeMent: 2,
    //   logRequest: false,
    //   systemClock: true,
    //   lockAcknowladge: 0,
    // },
    // {
    //   date: "07-11-2024",
    //   time: "11:25",
    //   partNumber: "TesT-11234",
    //   totalJudgeMent: 1,
    //   load: 27.55,
    //   loadJudgeMent: 3,
    //   distance: 13.78,
    //   distanceJudgeMent: 3,
    //   logRequest: true,
    //   systemClock: false,
    //   lockAcknowladge: 1,
    // },
    // {
    //   date: "08-11-2024",
    //   time: "08:40",
    //   partNumber: "TesT-44321",
    //   totalJudgeMent: 2,
    //   load: 19.34,
    //   loadJudgeMent: 1,
    //   distance: 10.89,
    //   distanceJudgeMent: 2,
    //   logRequest: false,
    //   systemClock: true,
    //   lockAcknowladge: 0,
    // },
    // {
    //   date: "09-11-2024",
    //   time: "13:05",
    //   partNumber: "TesT-55431",
    //   totalJudgeMent: 1,
    //   load: 24.67,
    //   loadJudgeMent: 2,
    //   distance: 12.34,
    //   distanceJudgeMent: 2,
    //   logRequest: true,
    //   systemClock: false,
    //   lockAcknowladge: 1,
    // },
    // {
    //   date: "10-11-2024",
    //   time: "17:30",
    //   partNumber: "TesT-88077",
    //   totalJudgeMent: 2,
    //   load: 21.89,
    //   loadJudgeMent: 2,
    //   distance: 11.78,
    //   distanceJudgeMent: 1,
    //   logRequest: false,
    //   systemClock: true,
    //   lockAcknowladge: 0,
    // },
  ];
  useEffect(() => {
    setData(initialData);
    // data.length <= 0 ? setLoading(false) : setLoading(true);
    const interval = setInterval(() => {
      data.length <= 0 ? setLoading(false) : setLoading(true);
      console.log("Current Data:", data);
      setData((prevData) => {
        return prevData.map((i) => ({
          ...i,
          partNumber:
            "TEST-" +
            String(Math.floor(Math.random() * 100000000)).padStart(8, "0"),
          load: i.load + Math.random(),
          distance: i.distance + Math.random(),
          loadJudgeMent: Math.floor(Math.random() * 4),
          distanceJudgeMent: Math.floor(Math.random() * 4)
        }));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // const TestClick = () => {
  //   setData([
  //     {
  //       date: "01-11-2024",
  //       time: "15:46",
  //       partNumber: "TA77997",
  //       totalJudgeMent: 1,
  //       load: 23.12,
  //       loadJudgeMent: 2,
  //       distance: 12.34,
  //       distanceJudgeMent: 1,
  //       logRequest: true,
  //       systemClock: false,
  //       lockAcknowladge: 1,
  //     },
  //     {
  //       date: "02-11-2024",
  //       time: "10:30",
  //       partNumber: "TA88001",
  //       totalJudgeMent: 0,
  //       load: 18.45,
  //       loadJudgeMent: 1,
  //       distance: 10.78,
  //       distanceJudgeMent: 1,
  //       logRequest: false,
  //       systemClock: true,
  //       lockAcknowladge: 0,
  //     },
  //     {
  //       date: "03-11-2024",
  //       time: "12:20",
  //       partNumber: "TA66045",
  //       totalJudgeMent: 1,
  //       load: 29.34,
  //       loadJudgeMent: 3,
  //       distance: 15.23,
  //       distanceJudgeMent: 1,
  //       logRequest: true,
  //       systemClock: false,
  //       lockAcknowladge: 1,
  //     },
  //     {
  //       date: "04-11-2024",
  //       time: "09:15",
  //       partNumber: "TA55039",
  //       totalJudgeMent: 2,
  //       load: 22.89,
  //       loadJudgeMent: 2,
  //       distance: 11.67,
  //       distanceJudgeMent: 1,
  //       logRequest: true,
  //       systemClock: false,
  //       lockAcknowladge: 0,
  //     },
  //     {
  //       date: "05-11-2024",
  //       time: "14:50",
  //       partNumber: "TA99010",
  //       totalJudgeMent: 1,
  //       load: 25.9,
  //       loadJudgeMent: 3,
  //       distance: 14.32,
  //       distanceJudgeMent: 1,
  //       logRequest: true,
  //       systemClock: true,
  //       lockAcknowladge: 1,
  //     },
  //     {
  //       date: "06-11-2024",
  //       time: "16:00",
  //       partNumber: "TA33020",
  //       totalJudgeMent: 0,
  //       load: 20.78,
  //       loadJudgeMent: 2,
  //       distance: 12.45,
  //       distanceJudgeMent: 2,
  //       logRequest: false,
  //       systemClock: true,
  //       lockAcknowladge: 0,
  //     },
  //     {
  //       date: "07-11-2024",
  //       time: "11:25",
  //       partNumber: "TA11234",
  //       totalJudgeMent: 1,
  //       load: 27.55,
  //       loadJudgeMent: 3,
  //       distance: 13.78,
  //       distanceJudgeMent: 3,
  //       logRequest: true,
  //       systemClock: false,
  //       lockAcknowladge: 1,
  //     },
  //     {
  //       date: "08-11-2024",
  //       time: "08:40",
  //       partNumber: "TA44321",
  //       totalJudgeMent: 2,
  //       load: 19.34,
  //       loadJudgeMent: 1,
  //       distance: 10.89,
  //       distanceJudgeMent: 2,
  //       logRequest: false,
  //       systemClock: true,
  //       lockAcknowladge: 0,
  //     },
  //     {
  //       date: "09-11-2024",
  //       time: "13:05",
  //       partNumber: "TA55431",
  //       totalJudgeMent: 1,
  //       load: 24.67,
  //       loadJudgeMent: 2,
  //       distance: 12.34,
  //       distanceJudgeMent: 2,
  //       logRequest: true,
  //       systemClock: false,
  //       lockAcknowladge: 1,
  //     },
  //     {
  //       date: "10-11-2024",
  //       time: "17:30",
  //       partNumber: "TA88077",
  //       totalJudgeMent: 2,
  //       load: 21.89,
  //       loadJudgeMent: 2,
  //       distance: 11.78,
  //       distanceJudgeMent: 1,
  //       logRequest: false,
  //       systemClock: true,
  //       lockAcknowladge: 0,
  //     },
  //   ]);
  // };

  return (
    <div className="flex flex-col text-gray-700 bg-gray-300 m-4 pb-4 rounded-md w-full h-fit">
      <div className="title bg-green-500 p-2 rounded-t-md font-bold">
        <p>EOLT Station : AUTO Mode</p>
      </div>

      {loading === false ? (
        data.map((i, idx) => (
          <div key={idx} className="container">
            <div className="content px-6 py-6 items-center">
              <div>
                <p className="font-bold text-2xl">
                  PartNumber : {i?.partNumber}
                </p>
                <div className="search-card flex flex-between flex-wrap">
                  <DataBar title="Date" type="text" value={i?.date} />
                  <DataBar title="Time" type="text" value={i?.time} />
                </div>
                <div className="search-card flex flex-between flex-wrap">
                  <DataBar
                    title="Load (N)"
                    type="text"
                    value={i?.load.toFixed(2)}
                  />
                  <DataBar
                    title="Load JudgeMent"
                    type="text"
                    value={getJudgementText(i?.loadJudgeMent)}
                  />
                  <DataBar
                    title="Distance (mm)"
                    type="text"
                    value={i?.distance.toFixed(2)}
                  />
                  <DataBar
                    title="Distance JudgeMent"
                    type="text"
                    value={getJudgementText(i?.distanceJudgeMent)}
                  />
                </div>
                <div className="search-card flex flex-between flex-wrap">
                  <DataBar
                    title="Total JudgeMent"
                    type="text"
                    value={getJudgementText(i?.totalJudgeMent)}
                  />
                </div>
              </div>
              {/* <form
                className="search-card flex flex-between flex-wrap"
                action=""
              >
                <DataBar
                  title={"PartNumber"}
                  type="text"
                  value={i?.partNumber}
                />
                <DataBar
                  title={"Load"}
                  type="text"
                  value={i?.load.toFixed(2)}
                />
                <DataBar
                  title={"Load JudgeMent"}
                  type="text"
                  value={getJudgementText(i?.loadJudgeMent)}
                />
              </form> */}
            </div>
          </div>
        ))
      ) : (
        <Loading text="Data Not Found . . ." />
      )}
      {loading === true ? (
        <Loading text="Data Not Found . . ." />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="p-4 overflow-y-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-white text-black">
                <th className="px-4 py-2 font-semibold">#</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">Time</th>
                <th className="px-4 py-2 font-semibold">Part Number</th>
                <th className="px-4 py-2 font-semibold">Total Judgement</th>
                <th className="px-4 py-2 font-semibold">Load(N)</th>
                <th className="px-4 py-2 font-semibold">LoadJudgement</th>
                <th className="px-4 py-2 font-semibold">Distance(mm)</th>
                <th className="px-4 py-2 font-semibold">DistanceJudgement</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={`${index}`} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item?.date}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item?.time}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item?.partNumber}
                  </td>
                  <td
                    className={`border font-semibold border-gray-400 px-4 py-2 text-center ${
                      item?.totalJudgeMent === 1
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {getJudgementText(item?.totalJudgeMent)}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item?.load.toFixed(2)}
                  </td>
                  <td
                    className={`border font-semibold border-gray-400 px-4 py-2 text-center ${
                      item?.loadJudgeMent === 1
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {getJudgementText(item?.loadJudgeMent)}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item?.distance.toFixed(2)}
                  </td>
                  <td
                    className={`border font-semibold border-gray-400 px-4 py-2 text-center ${
                      item?.distanceJudgeMent === 1
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {getJudgementText(item?.distanceJudgeMent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MainPage;
