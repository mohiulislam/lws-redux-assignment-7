import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobById, getJobs, patchJob, postJob } from "./jobApi";

const initialState = {
  jobs: [],
  jobToEdit: null,
  isLoading: false,
  isError: false,
  error: "",
};

// async thunks
export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId, data) => {
    const job = await patchJob(jobId, data);
    return job;
  }
);
export const createJob = createAsyncThunk("job/createJob", async (data) => {
  const job = await postJob(data);
  return job;
});
export const fetchWhichWillBeUpdate = createAsyncThunk(
  "job/fetchWhichWillBeUpdate",
  async (id) => {
    const jobs = await getJobById(id);
    return jobs;
  }
);
export const updateJob = createAsyncThunk(
  "job/updateJob",
  async ({ id, data }) => {
    const job = await patchJob(id, data);
    return job;
  }
);

// create slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      })

      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      .addCase(fetchWhichWillBeUpdate.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchWhichWillBeUpdate.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobToEdit = action.payload;
      })
      .addCase(fetchWhichWillBeUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
