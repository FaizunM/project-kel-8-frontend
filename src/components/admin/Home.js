export default function Home() {
  return (
    <div className="w-full h-screen px-16 py-16">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="w-full h-auto mt-16">
        <div className="w-full h-auto grid grid-cols-3 items-center gap-3">
          <div className="w-full h-auto p-4 bg-red-500 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-gray-100">
              Jumlah Peserta
            </h3>
            <div className="w-auto h-auto text-3xl font-bold mt-4">
              2.000 Siswa
            </div>
          </div>
          <div className="w-full h-auto p-4 bg-green-500 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-gray-100">
              Persentase lulus
            </h3>
            <div className="w-auto h-auto text-3xl font-bold mt-4">97.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
