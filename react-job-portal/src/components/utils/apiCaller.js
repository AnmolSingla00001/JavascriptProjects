const GetRequest = async (URL) => {
  if (!URL) {
    return;
  }
  try {
    const response = await fetch(URL);
    const candListObj = await response.json(); //extract JSON from the http response
    return candListObj;
  } catch (e) {
    return;
  }
};
export default GetRequest;
