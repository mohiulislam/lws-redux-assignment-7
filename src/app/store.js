import { configureStore } from "@reduxjs/toolkit";
import filterJobsReducer from "../features/filterJobs/filterJobsSlice";
import jobReducer from "../features/job/jobSlice";
import searchJobReducer from "../features/searchJob/searchJobSlice";
import sortJobReducer from "../features/sortJob/sortJobSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    filter: filterJobsReducer,
    search: searchJobReducer,
    sort: sortJobReducer,
  },
});
