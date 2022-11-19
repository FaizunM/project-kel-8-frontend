import axios from "axios";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";

export default function LoginPage() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const apiUrl = "http://127.0.0.1:8000/api";

  const onSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const form = new FormData(event.target);

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
      setMessage("Username dan Password tidak boleh kosong");
      return;
    }

    axios
      .post(apiUrl + "/login", form)
      .then((res) => {
        const token = res.data.data.token;
        localStorage.setItem("token", token);

        if (token) {
          axios
            .get(apiUrl + "/account", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((reslog) => {
              setLoading(false);

              const user = reslog.data;

              if (user.role === "admin") {
                navigate("/dashboard");
              }
              if (user.role === "student") {
                navigate("/");
              }
              if (user.role === "teacher") {
                navigate("/dashboard");
              }
            })
            .catch((err) => {
              setMessage(err.response.data.message);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setLoading(false);
      });
  };

  const checkLogged = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      axios
        .get(apiUrl + "/account", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((reslog) => {
          setLoading(false);

          const user = reslog.data;

          if (user.role === "admin") {
            navigate("/dashboard");
          }
          if (user.role === "student") {
            navigate("/");
          }
          if (user.role === "teacher") {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          setMessage(err.response.data.message);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    checkLogged();
  }, [checkLogged]);

  const changeMessage = (text) => {
    setMessage(text);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[350px] h-auto p-8 bg-white shadow-default text-center">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="w-fit h-auto my-4 text-gray-500 font-medium text-sm">
          SMK Bisa! SMK Hebat! SMK Bisa Hebat!!!
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex mb-4">
            <div className="w-14 h-12 flex items-center justify-center border-2 border-[rgba(0,0,0,0.1)] rounded-lg rounded-r-none border-r-0 text-[rgba(0,0,0,0.5)]">
              <i className="fa-solid fa-user-circle"></i>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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
            className="w-full h-12 bg-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-500 transition-all duration-150 ease-in-out hover:text-white flex items-center justify-center"
            id="submit-btn"
            disabled={loading}
          >
            {loading ? (
              <div className="w-8 h-8 flex items-center justify-center animate-spin rounded-full">
                <i class="fa-solid fa-circle-notch"></i>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
      {message !== null ? (
        <Notification message={message} set={changeMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
