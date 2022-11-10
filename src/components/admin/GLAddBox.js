export default function GLAddBox(props) {
  const closeBox = (event) => {
    if (event.target.id === "box-container") {
      props.close();
    }
  };
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.05)] flex items-center justify-center"
      onClick={closeBox}
      id="box-container"
    >
      <div
        className="w-[400px] max-h-[500px] overflow-scroll bg-white shadow-default p-8"
        id="main-box"
      >
        <h1 className="text-xl font-semibold">Tambah akun guru</h1>
        <form action="" className="mt-8">
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nomor Unik Pendidik dan Tenaga Kependidikan"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nama"
            />
          </div>
          
          <button
            type="submit"
            className="w-full h-12 bg-[rgba(0,0,0,0.075)] text-gray-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
