import axios from "axios";

export default function MJAddBox(props) {
  const apiUrl = "http://localhost:8000/api";
  const apiToken = localStorage.getItem("token");

  const submit = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;

    if (name === "") {
      props.setMessage("Nama kelas tidak boleh kosongI");
      return;
    }

    const form = new FormData(event.target);

    axios
      .post(apiUrl + "/major", form, {
        headers: { Authorization: "Bearer " + apiToken },
      })
      .then((res) => {
        props.setMessage(res.data.message);
        props.close();
      })
      .catch((err) => {
        props.setMessage(err.response.data.message);
      });
  };

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
        <h1 className="text-xl font-semibold">Tambah Jurusan</h1>
        <form className="mt-8" onSubmit={submit}>
          <div className="flex mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nama Jurusan"
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
