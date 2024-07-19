import axios from "axios";
import { baseUrl } from "./Components/constants/constants1";

const instance = axios.create({
    baseURL: baseUrl,
   
  });

  export default instance