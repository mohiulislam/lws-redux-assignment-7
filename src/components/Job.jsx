import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillStopFill } from "react-icons/bs";
function Job({ job: { title, type, deadline, salary, id } }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/EditJob/${id}`);
  }
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <BsFillStopFill
              className={`!text-[${
                type === "Full Time"
                  ? "#FF8A00"
                  : type === "Internship"
                  ? "#FF5757"
                  : "#56E5C4"
              }] text-lg mr-1.5`}
            />

            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            onClick={handleEdit}
            type="button"
            className="lws-edit btn btn-primary"
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button type="button" className="lws-delete btn btn-danger">
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default Job;
