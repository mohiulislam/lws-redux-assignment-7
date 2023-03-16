import axios from "../../utils/axios";

export async function getJobs() {
  const response = await axios.get("/jobs");
  return response.data;
}
export async function postJob(job) {
  const response = await axios.post("/jobs", job);
  return response.data;
}
