export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[350px] h-auto p-8 bg-white shadow-default text-center">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="w-fit h-auto my-2 text-gray-500 font-medium">
          SMK Bisa! SMK Hebat! SMK Bisa Hebat!!!
        </div>
        <form action="">
          <div className="flex mb-4">
            <div className="w-14 h-12 flex items-center justify-center border-2 border-[rgba(0,0,0,0.1)] rounded-lg rounded-r-none border-r-0 text-[rgba(0,0,0,0.5)]">
              <i className="fa-solid fa-user-circle"></i>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username or email"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.1)] outline-none rounded-lg rounded-l-none px-4 focus:border-[rgba(0,0,0,0.35)] transition-all duration-150 ease-in-out font-medium text-sm"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-14 h-12 flex items-center justify-center border-2 border-[rgba(0,0,0,0.1)] rounded-lg rounded-r-none border-r-0 text-[rgba(0,0,0,0.5)]">
              <i className="fa-solid fa-key"></i>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.1)] outline-none rounded-lg rounded-l-none px-4 focus:border-[rgba(0,0,0,0.35)] transition-all duration-150 ease-in-out font-medium text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-500 transition-all duration-150 ease-in-out hover:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
