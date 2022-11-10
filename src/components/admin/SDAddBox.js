export default function SDAddBox() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.05)] flex items-center justify-center">
      <div className="w-[400px] h-[500px] overflow-scroll bg-white shadow-default p-8">
        <h1 className="text-xl font-semibold">Tambah Data Siswa</h1>
        <form action="" className="mt-8">
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nomer Induk Sekolah"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nomor Induk Siswa Nasional"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Tanggal Lahir"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Tempat Lahir"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Jenis Kelamin"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm"
              placeholder="Agama"
            />
          </div>
          <div className="flex mb-4">
            <textarea
              className="w-full border-2 border-[rgba(0,0,0,0.075)] rounded-lg p-4 text-sm"
              id=""
              rows="3"
              placeholder="Alamat"
            ></textarea>
          </div>
          <div className="flex mb-4 relative">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Kelas"
            />
            {1 == 0 ? (
              <div className="w-full h-auto flex flex-col rounded-lg absolute bg-white top-12 left-0 shadow-default">
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out">
                  XII TKJ A
                </div>
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out">
                  XII TKJ B
                </div>
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out">
                  XII TKJ C
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex mb-4 relative">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Jurusan"
            />
            {1 == 0 ? (
              <div className="w-full h-auto flex flex-col rounded-lg absolute bg-white top-12 left-0 shadow-default">
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out">
                  Teknik komputer dan jaringan
                </div>
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out">
                  DPIB
                </div>
                <div className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none transition-all duration-150 ease-in-out">
                  BKP
                </div>
              </div>
            ) : (
              ""
            )}
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
