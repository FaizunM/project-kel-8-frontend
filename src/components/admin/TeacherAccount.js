import { useState } from "react";
import GLAddBox from "./GLAddBox";

export default function TeacherAccount() {
  const [GLAddBoxState, setGLAddBoxState] = useState(false);

  const openGLAddBox = () => {
    setGLAddBoxState(true);
  };

  const closeGLAddBox = () => {
    setGLAddBoxState(false);
  };
  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Akun Guru</h1>
      <div className="w-full h-auto mt-16">
        <div className="w-fit h-auto p-4 py-2 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-[rgba(0,0,0,0.0)] transition-all duration-150 ease-in-out hover:bg-blue-300 hover:text-white" onClick={openGLAddBox}>Tambah</div>
        <div className="w-full h-full grid grid-cols-3 gap-3 mt-8">
          <div className="w-full h-auto p-4 bg-white border-[1px] border-[rgba(0,0,0,0.075)] rounded-lg hover:shadow-default hover:border-0 transition-all duration-150 ease-in-out">
            <div className="w-full h-auto flex">
              <div className="w-auto h-auto flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                  <img
                    src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="w-fit h-auto text-sm font-medium ">
                    Muhamad Faizun Musthofa
                  </div>
                  <div className="w-fit h-auto text-xs mt-2 font-medium text-gray-400">
                    20669473
                  </div>
                </div>
                <div className="w-fit h-fit p-3 py-2 text-white rounded ml-auto text-xs bg-gray-100 hover:bg-blue-300 transition-all duration-150 ease-in-out">
                  Open
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {GLAddBoxState ? <GLAddBox close={closeGLAddBox} /> : ""}
    </div>
  );
}
