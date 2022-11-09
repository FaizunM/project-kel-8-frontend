export default function Profile() {
  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Profil Saya</h1>
      <div className="w-full h-auto mt-16">
        <div className="w-full h-auto flex items-center gap-6">
          <div className="w-[150px] h-[150px] flex items-center justify-center overflow-hidden rounded-full">
            <img
              src="https://onwaleed.sirv.com/Image/1146938-min.jpg?thumbnail=512"
              alt=""
              className="w-[150px] h-[150px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="w-[350px] h-auto text-4xl font-bold">
              Muhamad Faizun Musthofa
            </div>
            <div className="w-[350px] h-auto text-xl font-semibold text-gray-400">
              Administrator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
