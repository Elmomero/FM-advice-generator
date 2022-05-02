import axios from "axios";
export const getData = async () => {
  try {
    const url = "https://api.adviceslip.com/advice";
    const response = await axios.get(url);
    const { data } = response;
    return data.slip;
  } catch (error) {
    console.error(error);
  }
};
