import { useCallback, useEffect } from "react";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    var data = [
      {
        id: 1,
        nisn: 20669473,
        image: "",
        fullname: "Muhamad Faizun Musthofa",
        class: "XII TKJ A",
        status: "Lulus",
        poin: "802.56",
      },
      {
        id: 2,
        nisn: 20669473,
        image: "",
        fullname: "Faizun Musthofa",
        class: "XII TKJ A",
        status: "Lulus",
        poin: "802.56",
      },
      {
        id: 3,
        nisn: 20669473,
        image: "",
        fullname: "Musthofa",
        class: "XII TKJ A",
        status: "Lulus",
        poin: "802.56",
      },
    ];
    setData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="w-screen h-screen bg-[#f5f5f5]">
      <Navigation />
      <div className="w-full h-auto">
        <div className="w-full h-auto p-4">
          <form action="">
            <div className="flex">
              <input
                type="search"
                className="w-full h-12 border-2 border-[rgba(0,0,0,0.1)] px-4 border-r-[rgba(0,0,0,0)] rounded-lg rounded-r-none outline-none focus:border-[rgba(0,0,0,0.25)] font-medium transition-all duration-150 ease-in-out"
                name="s"
                id="search"
                placeholder="Cari nama peserta ujian"
              />
              <div className="w-14 h-12 border-2 border-[rgba(0,0,0,0.1)] border-l-0 rounded-lg rounded-l-none flex items-center justify-center text-[rgba(0,0,0,0.25)] hover:bg-[rgba(0,0,0,0.075)]">
                <i className="fa-solid fa-search"></i>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full h-auto overflow-x-scroll bg-white pb-16">
          <div className="w-fit h-auto flex items-center font-medium border-b-[1px] border-[rgba(0,0,0,0.1)] px-4">
            <div className="min-w-[128px] text-center h-auto p-4">
              Peringkat
            </div>
            <div className="min-w-[48px] text-center h-auto p-4 mx-4"></div>
            <div className="min-w-[96px] text-center h-auto p-4">NISN</div>
            <div className="min-w-[164px] text-center h-auto p-4">
              Nama Lengkap
            </div>
            <div className="min-w-[96px] text-center h-auto p-4">Kelas</div>
            <div className="min-w-[128px] text-center h-auto p-4">
              Lulus/Tidak Lulus
            </div>
            <div className="min-w-[72px] text-center h-auto p-4">Poin</div>
          </div>
          <div className="w-full h-auto">
            {data.map((d, index) => (
              <div
                className="w-fit h-auto py-4 flex items-center font-medium text-[rgba(0,0,0,0.5)] px-4 hover:text-[rgba(0,0,0,0.75)] hover:bg-[rgba(0,0,0,0.01)]"
                key={d.id}
              >
                <div className="min-w-[128px] text-center h-auto">
                  {index + 1}
                </div>
                <div className="min-w-[48px] min-h-[48px] mx-4 overflow-hidden rounded-full">
                  <img
                    className="w-[48px] h-[48px]"
                    src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
                    width="512"
                    height="512"
                    alt=""
                  />
                </div>
                <div className="min-w-[96px] text-center h-auto">{d.nisn}</div>
                <div className="min-w-[164px] text-center h-auto">
                  {d.fullname}
                </div>
                <div className="min-w-[96px] text-center h-auto">{d.class}</div>
                <div className="min-w-[128px] text-center h-auto">
                  {d.status}
                </div>
                <div className="min-w-[72px] text-center h-auto">{d.poin}</div>
              </div>
            ))}
          </div>
          <div className="w-full h-auto flex justify-center mt-8">
            <div className="w-auto h-auto flex">
              <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg flex justify-center items-center text-[rgba(0,0,0,0.5)] rounded-r-none border-r-0">
                <i className="fa-solid fa-chevron-left hover:bg-[rgba(0,0,0,0.025)] transition-all duration-150 ease-in-out"></i>
              </div>
            </div>
            <div className="w-auto h-auto flex">
              <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg rounded-l-none rounded-r-none flex justify-center items-center text-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
                1
              </div>
            </div>
            <div className="w-auto h-auto flex">
              <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.075)] rounded-lg flex justify-center items-center text-[rgba(0,0,0,0.5)] rounded-l-none border-l-0 hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
