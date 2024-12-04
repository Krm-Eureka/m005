import endpoint from "../axios";

const version = "1";

const getTraceabilityDataWithDate = (version, start, end, SET) => {
    console.log(start,"", end);
  const getData = async () => {
    const url = `/api/v${version}/TraceabilityLog/GetTraceabilityByDateRange?startDate=${start}&endDate=${end}`;
    console.log(url);
    try {
      const res = await endpoint.get(url);
      console.log("getTraceabilityDataWithDate :", res.data);
      SET(res.data.data);
    } catch (error) {
      console.error("Failed to fetch Data:", error);
      if (error.response) {
        console.error("Error Status:", error.response.status);
        console.error("Error Data:", error.response.data);
      }
    }
  };

  getData();
};

const traceabilityService = {
  version,
  getTraceabilityDataWithDate,
};

export default traceabilityService;
