export default function Notification(props) {
  const closeCon = (e) => {
    if (e.target.id === "notif-container") {
      props.set(null);
    }
  };
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.1)]"
      id="notif-container"
      onClick={closeCon}
    >
      <div className="w-auto h-auto p-4 bg-white shadow-default fixed top-[16px] left-1/2 -translate-x-1/2 rounded-lg text-center text-sm transition-all duration-150 ease-in-out">
        {props.message}
      </div>
    </div>
  );
}
