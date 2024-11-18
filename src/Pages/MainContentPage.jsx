import { useState } from "react";
import HeaderLayout from "../Components/HeaderLayout-Component";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const TestClick = () => {
    setData([
      {
        date: "01-11-2024",
        time: "15:46",
        partNumber: "TA77997",
        totalJudgement: 1,
        load: 23.12,
        loadJudgeMent: 2,
        distance: 12.34,
        distanceJudgeMent: 1,
        logRequest: true,
        systemClock: false,
        lockAcknowladge: 1,
      },
      {
        date: "02-11-2024",
        time: "10:30",
        partNumber: "TA88001",
        totalJudgement: 0,
        load: 18.45,
        loadJudgeMent: 1,
        distance: 10.78,
        distanceJudgeMent: 1,
        logRequest: false,
        systemClock: true,
        lockAcknowladge: 0,
      },
      {
        date: "03-11-2024",
        time: "12:20",
        partNumber: "TA66045",
        totalJudgement: 1,
        load: 29.34,
        loadJudgeMent: 3,
        distance: 15.23,
        distanceJudgeMent: 1,
        logRequest: true,
        systemClock: false,
        lockAcknowladge: 1,
      },
      {
        date: "04-11-2024",
        time: "09:15",
        partNumber: "TA55039",
        totalJudgement: 2,
        load: 22.89,
        loadJudgeMent: 2,
        distance: 11.67,
        distanceJudgeMent: 1,
        logRequest: true,
        systemClock: false,
        lockAcknowladge: 0,
      },
      {
        date: "05-11-2024",
        time: "14:50",
        partNumber: "TA99010",
        totalJudgement: 1,
        load: 25.9,
        loadJudgeMent: 3,
        distance: 14.32,
        distanceJudgeMent: 1,
        logRequest: true,
        systemClock: true,
        lockAcknowladge: 1,
      },
      {
        date: "06-11-2024",
        time: "16:00",
        partNumber: "TA33020",
        totalJudgement: 0,
        load: 20.78,
        loadJudgeMent: 2,
        distance: 12.45,
        distanceJudgeMent: 2,
        logRequest: false,
        systemClock: true,
        lockAcknowladge: 0,
      },
      {
        date: "07-11-2024",
        time: "11:25",
        partNumber: "TA11234",
        totalJudgement: 1,
        load: 27.55,
        loadJudgeMent: 3,
        distance: 13.78,
        distanceJudgeMent: 3,
        logRequest: true,
        systemClock: false,
        lockAcknowladge: 1,
      },
      {
        date: "08-11-2024",
        time: "08:40",
        partNumber: "TA44321",
        totalJudgement: 2,
        load: 19.34,
        loadJudgeMent: 1,
        distance: 10.89,
        distanceJudgeMent: 2,
        logRequest: false,
        systemClock: true,
        lockAcknowladge: 0,
      },
      {
        date: "09-11-2024",
        time: "13:05",
        partNumber: "TA55431",
        totalJudgement: 1,
        load: 24.67,
        loadJudgeMent: 2,
        distance: 12.34,
        distanceJudgeMent: 2,
        logRequest: true,
        systemClock: false,
        lockAcknowladge: 1,
      },
      {
        date: "10-11-2024",
        time: "17:30",
        partNumber: "TA88077",
        totalJudgement: 2,
        load: 21.89,
        loadJudgeMent: 2,
        distance: 11.78,
        distanceJudgeMent: 1,
        logRequest: false,
        systemClock: true,
        lockAcknowladge: 0,
      },
    ]);
  };
  return (
    <>
      <HeaderLayout page="Main Page" />
      <div className="content h-screen">
        <div className="flex flex-col text-gray-700 bg-gray-300 m-4 pb-4 rounded-md w-90% h-fit">
          <div className="title bg-green-500 p-2 rounded-t-md font-bold">
            <p>EOLT Station : AUTO Mode</p>
          </div>
          <div className="p-4">
            <button className="bg-red-500 rounded-md px-6" onClick={TestClick}>
              TEST
            </button>
            {/* <div className="result m-4 p-4 rounded-lg w-1/5 bg-red-400">
              <div>
                <p>PartNumber : ${12345}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Load(N)</p> <p>12.123</p>
                </div>
                <div className="justify-start bg-white">
                  <p>LoadJudgeMent</p> <span>OK</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Distance(mm)</p> <span>22.21</span>
                </div>
                <div>
                  <p>DistanceJudgeMent</p> <span>NOK</span>
                </div>
              </div>
            </div> */}
            <table className="w-full table-auto border-collapse ">
              <thead>
                <tr className="bg-white text-black">
                  <th className=" px-4 py-2">#</th>
                  <th className=" px-4 py-2">Date</th>
                  <th className=" px-4 py-2">Time</th>
                  <th className=" px-4 py-2">Total Judgement</th>
                  <th className=" px-4 py-2">Part Number</th>
                  <th className=" px-4 py-2">Load(N)</th>
                  <th className=" px-4 py-2">LoadJudgement</th>
                  <th className=" px-4 py-2">Distance(mm)</th>
                  <th className=" px-4 py-2">DistanceJudgement</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.partNo}
                    className="odd:bg-white even:bg-gray-100"
                  >
                    <td className="border border-gray-400 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item?.date}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item?.time}
                    </td>
                    <td
                      className={`border font-semibold  border-gray-400 px-4 py-2 ${
                        item?.totalJudgement === 1
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item?.totalJudgement
                        ? item?.totalJudgement === 1
                          ? "OK"
                          : item?.totalJudgement === 2
                          ? "NOK"
                          : "Unknown"
                        : "No Data"}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item?.partNumber}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item?.load}
                    </td>
                    <td
                      className={`border font-semibold  border-gray-400 px-4 py-2 ${
                        item?.loadJudgeMent === 1
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item?.loadJudgeMent
                        ? item?.loadJudgeMent === 1
                          ? "OK"
                          : item?.loadJudgeMent === 2
                          ? "NOK"
                          : "Unknown"
                        : "No Data"}
                    </td>{" "}
                    <td className="border border-gray-400 px-4 py-2">
                      {item?.distance}
                    </td>
                    <td
                      className={`border font-semibold border-gray-400 px-4 py-2 ${
                        item?.distanceJudgeMent === 1
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item?.distanceJudgeMent
                        ? item?.distanceJudgeMent === 1
                          ? "OK"
                          : item?.distanceJudgeMent === 2
                          ? "NOK"
                          : "Unknown"
                        : "No Data"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
