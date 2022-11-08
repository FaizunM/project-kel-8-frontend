export default function Navigation() {
  return (
    <div className="w-full h-[64px] bg-white flex items-center shadow-sm px-2 fixed top-0 left-0">
      <div className="w-auto h-auto font-bold">SMK Negeri 2 Salatiga</div>
      <div className="w-auto h-auto ml-auto">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            className="w-8 h-8"
            src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
            alt=""
          />
        </div>
      </div>
      <div className="w-auto h-auto p-4 fixed top-4 right-4 bg-white shadow-default rounded-lg flex flex-col items-center">
        <div className="w-[128px] h-[128px] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              className="w-20 h-20"
              src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[164px] h-auto text-center font-medium">
          Muhamad Faizun Musthofa
        </div>
        <div className="w-[200px] h-auto flex flex-col mt-4">
          <div className="w-full h-auto flex hover:bg-[rgba(0,0,0,0.025)] items-center text-[rgba(0,0,0,0.25)] rounded-lg text-sm font-medium">
            <div className="w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-user-circle"></i>
            </div>
            <div className="w-auto h-auto">Profile Saya</div>
          </div>
          <div className="w-full h-auto flex hover:bg-[rgba(0,0,0,0.025)] items-center text-[rgba(0,0,0,0.25)] rounded-lg text-sm font-medium">
            <div className="w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <div className="w-auto h-auto">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
}
