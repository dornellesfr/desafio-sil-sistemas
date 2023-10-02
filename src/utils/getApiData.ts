import axios from "axios";

async function getDataApi(endpoint: string) {
  try {
    const { data } = await axios.get(endpoint, { signal: AbortSignal.timeout(4000) });
    return data;
  } catch (err) {
    return 'err';
  }
}

export default getDataApi;