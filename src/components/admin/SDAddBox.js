import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function SDAddBox(props) {
  const apiUrl = "http://localhost:8000/api";
  const apiToken = localStorage.getItem("token");
  const [classList, setClasslist] = useState([]);
  const [majorList, setMajorlist] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedMajor, setSelectedMajor] = useState(null);

  const closeBox = (event) => {
    if (event.target.id === "box-container") {
      props.close();
    }
  };

  const getClasslist = (event) => {
    axios
      .post(
        apiUrl + "/major-class/search?name=" + event.target.value,
        {},
        {
          headers: {
            Authorization: "Bearer " + apiToken,
          },
        }
      )
      .then((res) => {
        setClasslist(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        props.setMessage(err.response.data.message);
        if (err.response.status === 401) {
          Navigate("/login");
        }
      });
  };

  const getMajorlist = (event) => {
    axios
      .post(
        apiUrl + "/major/search?name=" + event.target.value,
        {},
        {
          headers: {
            Authorization: "Bearer " + apiToken,
          },
        }
      )
      .then((res) => {
        setMajorlist(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        props.setMessage(err.response.data.message);
        if (err.response.status === 401) {
          Navigate("/login");
        }
      });
  };

  const submit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    axios
      .post(apiUrl + "/student", form, {
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

  const selectClass = (event) => {
    setSelectedClass(event.target.id);
    document.getElementById("select-class").value = event.target.innerText;
    setClasslist([]);
  };

  const selectMajor = (event) => {
    setSelectedMajor(event.target.id);
    document.getElementById("select-major").value = event.target.innerText;
    setMajorlist([]);
  };

  // useEffect(() => {}, []);

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
        <h1 className="text-xl font-semibold">Tambah Data Siswa</h1>
        <form className="mt-8" autoComplete="off" onSubmit={submit}>
          <div className="flex mb-4">
            <input
              type="number"
              name="nis"
              id="nis"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Nomer Induk Sekolah"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="number"
              name="nisn"
              id="nisn"
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
              type="date"
              name="date_of_birth"
              id="date-of-birth"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Tanggal Lahir"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="place_of_birth"
              id="place-of-birth"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Tempat Lahir"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="gender"
              id="gender"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Jenis Kelamin"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              name="religion"
              id="religion"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm"
              placeholder="Agama"
            />
          </div>
          <div className="flex mb-4">
            <textarea
              className="w-full border-2 border-[rgba(0,0,0,0.075)] rounded-lg p-4 text-sm"
              id="address"
              name="address"
              rows="3"
              placeholder="Alamat"
            ></textarea>
          </div>
          <div className="flex mb-4 relative">
            <input
              type="text"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Kelas"
              onKeyDown={getClasslist}
              id="select-class"
            />
            <div className="w-full h-auto flex flex-col rounded-lg absolute bg-white top-12 left-0 shadow-default z-50 p-2">
              {classList.length >= 1
                ? classList.map((d) => (
                    <div
                      className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
                      id={d.id}
                      onClick={selectClass}
                    >
                      {d.name}
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <input
            type="number"
            name="major_class_id"
            id="major-class-id"
            value={selectedClass}
            hidden
          />
          <div className="flex mb-4 relative">
            <input
              type="text"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
              placeholder="Jurusan"
              onKeyDown={getMajorlist}
              id="select-major"
            />
            <div className="w-full h-auto flex flex-col rounded-lg absolute bg-white top-12 left-0 shadow-default z-40 p-2">
              {majorList.length >= 1
                ? majorList.map((d) => (
                    <div
                      className="w-full h-12 rounded-lg px-4  hover:bg-[rgba(0,0,0,0.05)] flex items-center text-sm outline-none focus:border-[rgba(0,0,0,0.25)] transition-all duration-150 ease-in-out"
                      id={d.id}
                      onClick={selectMajor}
                    >
                      {d.name}
                    </div>
                  ))
                : ""}
            </div>
            <input
              type="number"
              name="major_id"
              id="class-id"
              value={selectedMajor}
              hidden
            />
          </div>
          <div className="flex mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm"
              placeholder="Email"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="tel"
              name="phone_number"
              id="phone-number"
              className="w-full h-12 border-2 border-[rgba(0,0,0,0.075)] rounded-lg px-4 text-sm"
              placeholder="Nomor telepon"
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
