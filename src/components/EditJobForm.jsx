import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWhichWillBeUpdate, updateJob } from "../features/job/jobSlice";

function EditJobForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobToEdit } = useSelector((state) => state.job);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    dispatch(fetchWhichWillBeUpdate(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        title: jobToEdit.title,
        type: jobToEdit.type,
        salary: jobToEdit.salary,
        deadline: jobToEdit.deadline,
      });
    }
  }, [jobToEdit]);

  function handleEdit(event) {
    event.preventDefault();
    const jobData = {
      title: formData.title,
      type: formData.type,
      salary: +formData.salary,
      deadline: formData.deadline,
    };
    dispatch(updateJob({ id: Number(id), jobData }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
              onChange={handleChange}
              id="lws-JobTitle"
              name="title"
              required
              value={formData.title}
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
            <select
              onChange={handleChange}
              value={formData.type}
              id="lws-JobType"
              name="type"
              required
            >
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
                value={formData.salary}
                onChange={handleChange}
                type="number"
                name="salary"
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
              value={formData.deadline}
              onChange={handleChange}
              type="date"
              name="deadline"
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
