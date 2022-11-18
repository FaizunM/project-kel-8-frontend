export default function Profile(props) {
  return (
    <div className="w-full h-screen px-16 py-16 overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Profil Saya</h1>
      <div className="w-full h-auto mt-16">
        <div className="w-full h-auto flex items-center gap-6">
          <div className="w-[150px] h-[150px] flex items-center justify-center overflow-hidden rounded-full border-2 border-[rgba(0,0,0,0.075)]">
            <img
              src={
                props.user.image !== null
                  ? props.user.image
                  : "https://onwaleed.sirv.com/Image/png-user-icon-customer-icon-1600.png"
              }
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="w-[350px] h-auto text-4xl font-bold">
              {props.user.fullname}
            </div>
            <div className="w-[350px] h-auto text-xl font-semibold text-gray-400">
              {props.user.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
