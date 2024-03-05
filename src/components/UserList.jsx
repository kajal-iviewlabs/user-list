import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addData } from "./actions";
import UserData from "./UserData";
import CardData from "./CardData";

function Userlist() {
  const [pageNo, setPageNo] = useState(1);
  const [cardVisibleStatus, setCardVisibleStatus] = useState(false); // Define cardVisibleStatus here
  const userlist = useSelector((state) => state.userdata);
  const cardRef = useRef();
  const dispatch = useDispatch();

  const changePage = (pageNo) => {
    setPageNo(pageNo);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://reqres.in/api/users?page=${pageNo}`
        );
        dispatch(addData(data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNo, dispatch]);

  return (
    <div className="flex flex-col h-screen bg-backGroundColor">
      <h1 className="py-5 text-lg text-white bg-customBlue font-sans antialiased font-semibold tracking-widest pl-20">
        User List Using React and Redux
      </h1>

      <div className="flex flex-col items-center justify-center flex-grow lg:px-44 md:px-36 text-center">
        <div className="border rounded-2xl w-11/12 p-5 bg-white">
          <div className="grid grid-cols-[300px_200px_150px_40px] grid-cols-[200px_100px_100px_20px] py-2">
            <div className="font-bold text-textColor font-serif text-xl">
              Name
            </div>
            <div className="font-bold text-textColor font-serif text-xl">
              Status
            </div>
            <div className="font-bold text-textColor font-serif text-xl">
              Access
            </div>
          </div>

          {userlist.length > 0 && (
            <div>
              {userlist.map((user, index) => (
                <UserData
                  key={index}
                  index={index}
                  mouseEnter={() => setCardVisibleStatus(true)}
                  mouseLeave={() => setCardVisibleStatus(false)}
                />
              ))}
            </div>
          )}

          <div className="pt-2">
            <button
              className="px-3 py-2 mr-1 border border-blue-200 rounded-md bg-blue-100 hover:bg-blue-300"
              onClick={() => changePage(1)}
            >
              1
            </button>
            <button
              className="px-3 py-2 border border-blue-200 rounded-md bg-blue-100 hover:bg-blue-300"
              onClick={() => changePage(2)}
            >
              2
            </button>
          </div>

          <div
            className={`absolute top-1/2 transform -translate-y-1/2  right-40 ${
              cardVisibleStatus ? "block" : "hidden"
            } w-64`}
            ref={cardRef}
          >
            <CardData />
          </div>
        </div>
      </div>

      <h1 className="py-5 text-lg text-white bg-customBlue font-sans antialiased font-semibold tracking-widest text-center">
        Link to Github repository
      </h1>
    </div>
  );
}

export default Userlist;
