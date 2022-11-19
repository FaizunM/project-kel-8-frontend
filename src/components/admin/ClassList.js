import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CLAddBox from "./CLAddBox";

export default function ClassList(props) {
  const [CLAddBoxState, setCLAddBoxState] = useState(false);
  const apiUrl = "http://localhost:8000/api";
  const apiToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [classlistData, setClasslistData] = useState([]);
  const [page, setPage] = useState(1);

  const openCLAddBox = () => {
    setCLAddBoxState(true);
  };

  const closeCLAddBox = () => {
    setCLAddBoxState(false);
  };

  const getClasslistData = useCallback((topage) => {
    if (apiToken === null) {
      navigate("/login");
    }

    const to_page = topage;
    setPage(to_page);

    axios
      .post(
        apiUrl + "/major-class/all?per_page=30&&page=" + to_page,
        {},
        {
          headers: {
            Authorization: "Bearer " + apiToken,
          },
        }
      )
      .then((res) => {
        setClasslistData(res.data.data);
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
    if (page >= classlistData.last_page) {
      return;
    }
    const next = page + 1;
    getClasslistData(next);
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    const prev = page - 1;
    getClasslistData(prev);
  };

  useEffect(() => {
    getClasslistData(page);
  }, [getClasslistData]);

  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Daftar Kelas</h1>
      <div className="w-full h-auto mt-16">
        <div
          className="w-fit h-auto p-4 py-2 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-[rgba(0,0,0,0.0)] transition-all duration-150 ease-in-out hover:bg-blue-300 hover:text-white"
          onClick={openCLAddBox}
        >
          Tambah
        </div>
        {classlistData.data ? (
          <div className="w-full h-full grid grid-cols-3 gap-3 mt-8">
            {classlistData.data.map((cl) => (
              <div
                className="w-full h-auto p-4 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-0 transition-all duration-150 ease-in-out"
                key={cl.id}
              >
                <div className="w-full h-auto flex">
                  <div className="w-auto h-auto flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                      <img
                        src={
                          cl.image !== null
                            ? cl.image
                            : "https://onwaleed.sirv.com/Image/png-user-icon-customer-icon-1600.png"
                        }
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-fit h-auto text-sm font-medium ">
                      {cl.name}
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
      {CLAddBoxState ? (
        <CLAddBox close={closeCLAddBox} setMessage={props.setMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
