import { useEffect, useMemo, useState } from "react";
import HeaderLayout from "../Components/HeaderLayout-Component";
import Loading from "../Components/Loading";
import DataBar from "../Components/DataBar-Component";
import traceabilityService from "../Services/data-service/TraceabilityData";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
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
  // const initialData = useMemo(
  //   () => [
  //     {
  //       date: "01-11-2024",
  //       time: "15:46",
  //       partNumber: "TesT-77997",
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
  //       partNumber: "TesT-88001",
  //       totalJudgeMent: 0,
  //       load: 18.45,
  //       loadJudgeMent: 1,
  //       distance: 10.78,
  //       distanceJudgeMent: 1,
  //       logRequest: false,
  //       systemClock: true,
  //       lockAcknowladge: 0,
  //     },
  //   ],
  //   []
  // );
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setData(initialData);
  //     setData((prevData) => {
  //       return prevData.map((i) => ({
  //         ...i,
  //         partNumber:
  //           "TEST-" +
  //           String(Math.floor(Math.random() * 100000000)).padStart(8, "0"),
  //         load: i.load + Math.random(),
  //         distance: i.distance + Math.random(),
  //         loadJudgeMent: Math.floor(Math.random() * 4),
  //         distanceJudgeMent: Math.floor(Math.random() * 4),
  //         totalJudgeMent: Math.floor(Math.random() * 4),
  //       }));
  //     });
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [
  //   initialData
  // ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await traceabilityService.get2LastData(
          traceabilityService.version,
          setData
        );
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeaderLayout page="Main Page" />
      <div className="flex flex-col text-gray-700 bg-gray-300 m-4 pb-4 rounded-md w-90% h-fit">
        <div className="title bg-green-500 p-2 rounded-t-md font-bold">
          <p>EOLT Station : AUTO Mode</p>
        </div>

        {data.length > 0 && loading === false ? (
          data.map((i, idx) => (
            <div key={idx} className="container">
              <div className="content px-6 py-6 items-center">
                <div className="mb-2 bg-white p-4 rounded-lg w-fit">
                  <p className="font-bold text-2xl mb-2">
                    PartNumber :{" "}
                    <span className="text-gray-700">{i?.partNumber}</span>
                  </p>
                  <div className="search-card flex flex-between flex-wrap">
                    <DataBar
                      title="Fecha"
                      // title="Date"
                      type="text"
                      value={i?.productionDateDesc}
                      disable={true}
                    />
                    <DataBar
                      title="Hora"
                      // title="Time"
                      type="text"
                      value={i?.productionTimeDesc}
                      disable={true}
                    />
                  </div>
                  <div className="search-card flex flex-between flex-wrap">
                    <DataBar
                      title="Carga (N)"
                      // title="Load (N)"
                      type="text"
                      value={i?.loadValue}
                      disable={true}
                    />
                    <DataBar
                      title="Juicio de Carga"
                      // title="Load JudgeMent"
                      type="text"
                      value={getJudgementText(i?.loadJudgement)}
                      disable={true}
                    />
                    <DataBar
                      title="Distancia (mm)"
                      // title="Distance (mm)"
                      type="text"
                      value={i?.distanceValue}
                      disable={true}
                    />
                    <DataBar
                      title="Juicio de Distancia"
                      // title="Distance JudgeMent"
                      type="text"
                      value={getJudgementText(i?.distanceJudgement)}
                      disable={true}
                    />
                  </div>
                  <div className="search-card flex flex-between flex-wrap">
                    <DataBar
                      title="Juicio Total"
                      // title="Total JudgeMent"
                      type="text"
                      value={getJudgementText(i?.totalJudgement)}
                      disable={true}
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
        {/* {loading === true ? (
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
      )} */}
      </div>
    </>
  );
};

export default MainPage;
