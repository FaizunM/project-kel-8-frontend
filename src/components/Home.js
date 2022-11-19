import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Notification from "./Notification";

export default function Home() {
  const [data, setData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [message, setMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const apiUrl = "http://127.0.0.1:8000/api";

  const changeMessage = (text) => {
    setMessage(text);
  };

  const getData = useCallback((topage) => {
    const to_page = topage;
    setPage(to_page);
    axios
      .post(apiUrl + `/student/all?per_page=20&&page=` + to_page)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  }, []);

  const nextPage = () => {
    if (page >= data.last_page) {
      return;
    }
    const next = page + 1;
    getData(next);
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    const prev = page - 1;
    getData(prev);
  };

  const changePage = (num) => {
    setPage(num);
  };

  const pageNum = () => {
    var items = [];

    return items;
  };

  useEffect(() => {
    getData(page);
  }, [getData]);

  return (
    <div className="w-full h-screen bg-[#ffffff]">
      <Navigation isLogged={isLogged} />
      <div className="w-full h-auto lg:px-64 pb-32">
        <div className="w-auto py-8 pt-24 lg:pt-32 font-semibold text-2xl px-8">
          Hasil nilai ujian tahun ajaran 2022/2023
        </div>
        <div className="w-full lg:w-[300px] h-auto p-4">
          <form action="">
            <div className="flex">
              <input
                type="search"
                className="w-full h-12 border-2 border-[rgba(0,0,0,0.1)] px-4 border-r-[rgba(0,0,0,0)] rounded-lg rounded-r-none outline-none focus:border-[rgba(0,0,0,0.25)] font-medium transition-all duration-150 ease-in-out"
                name="s"
                id="search"
                placeholder="Cari nama peserta ujian atau NISN"
              />
              <div className="w-14 h-12 border-2 border-[rgba(0,0,0,0.1)] border-l-0 rounded-lg rounded-l-none flex items-center justify-center text-[rgba(0,0,0,0.25)] hover:bg-[rgba(0,0,0,0.025)]">
                <i className="fa-solid fa-search"></i>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-fit h-auto overflow-x-scroll bg-white pb-16 lg:shadow-default lg:rounded-lg">
          <div className="w-fit h-auto flex items-center font-medium border-b-[1px] border-[rgba(0,0,0,0.1)] px-4">
            <div className="min-w-[96px] text-center h-auto py-4">
              Peringkat
            </div>
            <div className="min-w-[48px] text-center h-auto py-4 mx-4"></div>
            <div className="min-w-[164px] text-center h-auto py-4">
              Nama Lengkap
            </div>
            <div className="min-w-[96px] text-center h-auto py-4">NISN</div>
            <div className="min-w-[96px] text-center h-auto py-4">Kelas</div>
            <div className="min-w-[128px] lg:max-w-[128px] text-center h-auto py-4">
              Lulus/Tidak Lulus
            </div>
            <div className="min-w-[72px] text-center h-auto py-4">Poin</div>
          </div>
          <div className="w-full h-auto text-sm">
            {data.data ? (
              data.data.map((d, index) => (
                <div
                  className="w-fit h-auto py-4 flex items-center font-medium text-[rgba(0,0,0,0.5)] px-4 hover:text-[rgba(0,0,0,0.75)] hover:shadow-default transition-all duration-150 ease-in-out"
                  key={d.id}
                >
                  <div className="min-w-[96px] text-center h-auto">
                    {index + 1 + (page * data.per_page - data.per_page)}
                  </div>
                  <div className="w-[48px] h-[48px] mx-4 overflow-hidden rounded-full">
                    <img
                      src={
                        d.image !== null
                          ? d.image
                          : "https://onwaleed.sirv.com/Image/png-user-icon-customer-icon-1600.png"
                      }
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="min-w-[164px] lg:max-w-[164px] text-center h-auto">
                    {d.fullname}
                  </div>
                  <div className="min-w-[96px] text-center h-auto">
                    {d.nisn}
                  </div>
                  <div className="min-w-[96px] text-center h-auto"></div>
                  <div className="min-w-[128px] text-center h-auto">
                    {d.status === "Lulus" ? (
                      <div className="text-green-500">{d.status}</div>
                    ) : (
                      <div className="text-red-500">{d.status}</div>
                    )}
                  </div>
                  <div className="min-w-[72px] text-center h-auto">
                    {d.poin}
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-[250px] flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center animate-spin rounded-full text-3xl">
                  <i className="fa-solid fa-circle-notch"></i>
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-auto flex justify-center mt-8">
            <div className="w-auto h-auto flex" onClick={prevPage}>
              <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg flex justify-center items-center text-[rgba(0,0,0,0.5)] rounded-r-none border-r-0  hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </div>

            <div className="w-auto h-auto flex" onClick={prevPage}>
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
      </div>
      {message !== null ? (
        <Notification message={message} set={changeMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
