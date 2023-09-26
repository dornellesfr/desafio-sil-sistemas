import axios from "axios";

async function getDataApi(endpoint: string) {
  try {
    const response = await axios.get(endpoint);
    return response.data
  } catch (error) {
    return 'error'
  }
}