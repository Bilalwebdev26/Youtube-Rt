import axios from "axios";
const Base_Url = import.meta.env.VITE_BASE_URL;

const options = {
  method: "GET",
  // hostname: import.meta.env.BASE_URL,
  // port: null,
  // path: '/auto-complete/?q=desp&hl=en&gl=US',

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};
export const fetchData = async (url) => {
  try {
    console.log("Try block");
    console.log("Base URL:", Base_Url);
    console.log("Request URL:", `${Base_Url}/${url}`);
    console.log("Headers:", options.headers);
    const { data } = await axios.get(`${Base_Url}/${url}`, options); //help to make http req
    console.log(data);
    return data;
  } catch (error) {
    console.log("Catch block");
    console.log("Base URL:", Base_Url);
    console.log("Request URL:", `${Base_Url}/${url}`);
    console.log("Headers:", options.headers);
    console.log("Error while fetching : ", error);
    throw error;
  }
};
// 54dcefc50amsh639a1fc6f6df737p1307b1jsndf542b3232db
