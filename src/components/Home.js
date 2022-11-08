import Navigation from "./Navigation";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
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
      </div>
    </div>
  );
}
