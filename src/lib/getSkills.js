import axios from "axios";
import { getURL } from "./getURL";

export const getSkills = async () => {
    try {
        const url = await getURL();
        const res = await axios.get(`${url}/api/get-all-skills`);
        return res.data.res;
    } catch (error) {
        console.log(error);
        return [];
    }
}