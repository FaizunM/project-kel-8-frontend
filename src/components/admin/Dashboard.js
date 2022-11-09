import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import StudentData from "./StudentData";

export default function Dashboard() {
  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="w-[300px] h-auto flex bg-white border-[1px] border-[rgba(0,0,0,0.075)] flex-col">
          <div className="w-full h-12 flex items-center px-4">
            <div className="w-auto h-auto font-medium">
              SMK Negeri 2 Salatiga
            </div>
          </div>
          <div className="w-full h-auto p-4">
            <Link to={"/dashboard"}>
              <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-gauge"></i>
                </div>
                <div className="w-fit h-auto text-sm font-medium">
                  Dashboard
                </div>
              </div>
            </Link>
            <Link to={"/dashboard/profile"}>
              <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-regular fa-user-circle"></i>
                </div>
                <div className="w-fit h-auto text-sm font-medium">
                  Profil Saya
                </div>
              </div>
            </Link>
            <Link to={"/dashboard/student-data"}>
              <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className="w-fit h-auto text-sm font-medium">
                  Data Diri Siswa
                </div>
              </div>
            </Link>
            <div className="flex flex-col">
              <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-box"></i>
                </div>
                <div className="w-fit h-auto text-sm font-medium">
                  Data Master
                </div>
                <div className="w-fit h-auto ml-auto p-4 text-xs">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="hidden flex-col">
                <Link to={"/dashboard/class-list"}>
                  <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                    <div className="w-12 h-12 flex items-center justify-center"></div>
                    <div className="w-fit h-auto text-sm font-medium">
                      Daftar Kelas
                    </div>
                  </div>
                </Link>
                <Link to={"/dashboard/class-list"}>
                  <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                    <div className="w-12 h-12 flex items-center justify-center"></div>
                    <div className="w-fit h-auto text-sm font-medium">
                      Daftar Jurusan
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link to={"/dashboard/about"}>
              <div className="w-full h-12 rounded-lg flex items-center hover:bg-[rgba(0,0,0,0.025)]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className="w-fit h-auto text-sm font-medium">About</div>
              </div>
            </Link>
          </div>
          <div className="w-full h-auto flex p-4 mt-auto">
            <div className="w-auto h-auto flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <div className="w-[108px] overflow-hidden text-ellipsis whitespace-nowrap h-auto text-sm font-medium ">
                Muhamad Faizun Musthofa
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-black ml-auto rounded-lg text-white hover:bg-[rgba(0,0,0,0.05)] hover:text-black transition-all duration-150 ease-in-out">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="student-data" element={<StudentData />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
