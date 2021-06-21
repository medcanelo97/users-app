import { useState } from "react";
const useAPICall = (params) => {
  //  Parsing params
  const { queryFunction } = params;

  //    Hook state
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //    Function to clear hook state
  const clearData = () => {
    setResponse(null);
    setError(null);
    setLoading(false);
  };

  //    Function to call api
  const callAPI = async (queryParams) => {
    setLoading(true);
    try {
      const response = await queryFunction(queryParams);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    callAPI,
    response,
    error,
    clearData,
  };
};

export default useAPICall;
