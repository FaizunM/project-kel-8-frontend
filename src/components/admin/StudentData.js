import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SDAddBox from "./SDAddBox";

export default function StudentData(props) {
  const [SDAddBoxState, setSDAddBoxState] = useState(false);
  const apiUrl = "http://localhost:8000/api";
  const apiToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [page, setPage] = useState(1);

  const getStudentData = useCallback((topage) => {
    if (apiToken === null) {
      navigate("/login");
    }

    const to_page = topage;
    setPage(to_page);

    axios
      .post(
        apiUrl + "/student/all?per_page=30&&page=" + to_page,
        {},
        {
          headers: {
            Authorization: "Bearer " + apiToken,
          },
        }
      )
      .then((res) => {
        setStudentData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        props.setMessage(err.response.data.message);
        if (err.response.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  const nextPage = () => {
    if (page >= studentData.last_page) {
      return;
    }
    const next = page + 1;
    getStudentData(next);
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    const prev = page - 1;
    getStudentData(prev);
  };

  const openSDAddBox = () => {
    setSDAddBoxState(true);
  };

  const closeSDAddBox = () => {
    setSDAddBoxState(false);
  };

  useEffect(() => {
    getStudentData(page);
  }, [getStudentData]);

  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Data diri siswa</h1>
      <div className="w-full h-auto mt-16">
        <div
          className="w-fit h-auto p-4 py-2 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-[rgba(0,0,0,0.0)] transition-all duration-150 ease-in-out hover:bg-blue-300 hover:text-white"
          onClick={openSDAddBox}
        >
          Tambah
        </div>
        {studentData.data ? (
          <div className="w-full h-full grid grid-cols-3 gap-3 mt-8">
            {studentData.data.map((s) => (
              <div
                className="w-full h-auto p-4 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-0 transition-all duration-150 ease-in-out"
                key={s.id}
              >
                <div className="w-full h-auto flex">
                  <div className="w-auto h-auto flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border-[rgba(0,0,0,0.075)]">
                      <img
                        src={
                          s.image !== null
                            ? s.image
                            : "https://onwaleed.sirv.com/Image/png-user-icon-customer-icon-1600.png"
                        }
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="w-fit h-auto text-sm font-medium ">
                        {s.fullname}
                      </div>
                      <div className="w-fit h-auto text-xs mt-2 font-medium text-gray-400">
                        {s.nisn}
                      </div>
                    </div>
                    <div className="w-fit h-fit p-3 py-2 text-black hover:text-white rounded text-xs bg-gray-100 hover:bg-blue-300 transition-all duration-150 ease-in-out ml-auto">
                      Open
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[250px] flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center animate-spin rounded-full text-3xl">
              <i className="fa-solid fa-circle-notch"></i>
            </div>
          </div>
        )}
        <div className="w-full h-auto flex justify-center mt-8">
          <div className="w-auto h-auto flex" onClick={prevPage}>
            <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg flex justify-center items-center text-[rgba(0,0,0,0.5)] rounded-r-none border-r-0  hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>

          <div className="w-auto h-auto flex">
            <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] flex justify-center items-center text-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
              {page}
            </div>
          </div>

          <div className="w-auto h-auto flex" onClick={nextPage}>
            <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg flex justify-center items-center text-[rgba(0,0,0,0.5)] rounded-l-none border-l-0 hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      {SDAddBoxState ? (
        <SDAddBox close={closeSDAddBox} setMessage={props.setMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
