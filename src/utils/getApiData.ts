import axios from "axios";

async function getDataApi(endpoint: string) {
    const { data } = await axios.get(endpoint, { signal: AbortSignal.timeout(4000) });
    return data;
}

export default getDataApi;