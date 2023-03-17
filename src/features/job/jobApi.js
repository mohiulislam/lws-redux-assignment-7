import axios from "../../utils/axios";

export async function getJobs() {
  const response = await axios.get("/jobs");
  return response.data;
}
export async function getJobById(id) {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
}
export async function postJob(data) {
  const response = await axios.post("/jobs", data);
  return response.data;
}
export const patchJob = async (id, data) => {
  const response = await axios.patch(`/jobs/${id}`, data);
  return response.data;
};
