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
export const putJob = async (id, data) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.data;
};
export const deleteJob = async (id) => {
  const response = axios.delete(`/jobs/${id}`);
  return response.data;
};
