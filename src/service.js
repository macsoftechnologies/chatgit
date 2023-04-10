import axios from "axios";

const Service = async (methodType, url, obj) => {
  try {
    const response = await axios({
      method: methodType,
      url,
      data: obj,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response;
    return data;
  } catch (err) {
    throw err;
  }
};
export default Service;
