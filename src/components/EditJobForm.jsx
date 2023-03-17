import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWhichWillBeUpdate, updateJob } from "../features/job/jobSlice";

function EditJobForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobToEdit } = useSelector((state) => state.job);
  useEffect(() => {
    dispatch(fetchWhichWillBeUpdate(id));
  }, [dispatch, id]);

  function handleEdit(event) {
    const { elements } = event.target;
    const jobData = {
      title: elements.lwsJobTitle.value,
      type: elements.lwsJobType.value,
      salary: +elements.lwsJobSalary.value,
      deadline: elements.lwsJobDeadline.value,
    };
    dispatch(updateJob(id, jobData));
  }
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="fieldContainer">
            <label
              htmlFor="lws-JobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              name="lwsJobTitle"
              required
            >
              <option value="" hidden>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select value={""} id="lws-JobType" name="lwsJobType" required>
              <option value="" hidden>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
            />
          </div>

          <div className="text-right">
            <button
              onClick={handleEdit}
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditJobForm;
