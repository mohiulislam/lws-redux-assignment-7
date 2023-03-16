import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { createJob } from "../features/job/jobSlice";
import MainLayout from "../layouts/MainLayout";

function AddJobForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const jobData = {
      title: elements.lwsJobTitle.value,
      type: elements.lwsJobType.value,
      salary: +elements.lwsJobSalary.value,
      deadline: elements.lwsJobDeadline.value,
    };
    dispatch(createJob(jobData));
    formRef.current.reset();
  };
  return (
    <MainLayout>
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select id="lws-JobTitle" name="lwsJobTitle" required>
                <option value="" hidden>
                  Select Job
                </option>
                <option name="Software Engineer">Software Engineer</option>
                <option name="Software Developer">Software Developer</option>
                <option name="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option name="MERN Stack Developer">
                  MERN Stack Developer
                </option>
                <option name="DevOps Engineer">DevOps Engineer</option>
                <option name="QA Engineer">QA Engineer</option>
                <option name="Product Manager">Product Manager</option>
                <option name="Social Media Manager">
                  Social Media Manager
                </option>
                <option name="Senior Executive">Senior Executive</option>
                <option name="Junior Executive">Junior Executive</option>
                <option name="Android App Developer">
                  Android App Developer
                </option>
                <option name="IOS App Developer">IOS App Developer</option>
                <option name="Frontend Developer">Frontend Developer</option>
                <option name="Frontend Engineer">Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select id="lws-JobType" name="lwsJobType" required>
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
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </main>
    </MainLayout>
  );
}

export default AddJobForm;
