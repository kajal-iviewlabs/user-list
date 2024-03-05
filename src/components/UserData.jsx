import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData, deleteData, showCard } from "./actions";

function UserData({ index, mouseEnter, mouseLeave }) {
  const userlist = useSelector((state) => state.userdata);
  const { avatar, first_name, last_name, email, id, status, access } =
    userlist[index] || {};
  const [activestatus, setActivestatus] = useState(status);
  const [accessStatus, setAccessstatus] = useState(access);
  const [selectedId, setSelectedId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setActivestatus(status);
    setAccessstatus(access);
  }, [id, userlist]);

  useEffect(() => {
    dispatch(updateData(selectedId, activestatus, accessStatus));
  }, [selectedId, activestatus, accessStatus]);

  const handleDelete = () => {
    dispatch(deleteData(index));
  };

  const handleMouseEnter = () => {
    dispatch(showCard(index));
    mouseEnter();
  };

  return (
    // <div className="flex items-center justify-center">
    <div className="w-fit p-1 m-1 border-t rounded-md grid lg:grid-cols-[300px_150px_150px_40px] grid-cols-[200px_100px_100px_20px] flex items-center justify-center gap-4">
      <div
        className="flex gap-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full " />
        <div className="flex flex-col">
          <span className="text-sm">{first_name + ` ` + last_name}</span>
          <span className="text-sm">{email}</span>
        </div>
      </div>
      <div>
        <select
          value={activestatus}
          onChange={(e) => {
            setActivestatus(e.target.value);
            setSelectedId(id);
          }}
          className="lg:py-2 py-1 m-2 lg:m-0 lg:px-5 px-2 bg-blue-50 w-fit rounded border border-blue-200 font-normal outline-none cursor-pointer"
        >
          <option value={activestatus}>{activestatus}</option>
          <option value={activestatus === `Active` ? `Inactive` : `Active`}>
            {activestatus === `Active` ? `Inactive` : `Active`}
          </option>
        </select>
      </div>
      <div>
        <select
          value={accessStatus}
          onChange={(e) => {
            setAccessstatus(e.target.value);
            setSelectedId(id);
          }}
          className="lg:py-2 py-1 lg:px-5 lg:m-0 px-1 m-2 bg-blue-50 w-fit rounded border border-blue-200 font-normal outline-none cursor-pointer"
        >
          <option value={accessStatus}>{accessStatus}</option>
          <option value={accessStatus === `Manager` ? `Employee` : `Manager`}>
            {accessStatus === `Manager` ? `Employee` : `Manager`}
          </option>
        </select>
      </div>
      <div>
        <button className="p-1 rounded" onClick={handleDelete}>
          <img
            src="https://papaya-smakager-063868.netlify.app/delete.png"
            alt="Delete User"
            className="lg:h-6 h-3"
          />
        </button>
      </div>
    </div>
    // </div>
  );
}

export default UserData;
