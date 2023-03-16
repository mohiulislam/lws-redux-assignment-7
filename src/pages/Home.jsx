import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "../components/Job";
import Loading from "../components/Loading";
import JobsContainer from "../containers/JobsContainer";
import { fetchJobs } from "../features/job/jobSlice";
import MainLayout from "../layouts/MainLayout";

function Home() {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError, error } = useSelector((state) => state.job);
  const { searchBy } = useSelector((state) => state.search);
  const { sortBy } = useSelector((state) => state.sort);
  const { filterBy } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="text-yellow-300">{error}</div>;
  }
  if (!isLoading && !isError && !jobs.length > 0) {
    content = <div className="text-white">No jobs found!</div>;
  }

  if (!isLoading && !isError && jobs.length > 0) {
    content = [...jobs]
      .filter((job) => job.title.toLowerCase().includes(searchBy.toLowerCase()))
      .filter((job) =>
        filterBy === "internship"
          ? job.type === "Internship"
          : filterBy === "fulltime"
          ? job.type === "Full Time"
          : filterBy === "remote"
          ? job.type === "Remote"
          : true
      )
      .sort((a, b) =>
        sortBy === "lowToHigh"
          ? a.salary - b.salary
          : sortBy === "highToLow"
          ? b.salary - a.salary
          : 0
      )
      .map((job) => <Job key={job.id} job={job} />);
  }

  return (
    <MainLayout>
      <JobsContainer>{content}</JobsContainer>
    </MainLayout>
  );
}

export default Home;
