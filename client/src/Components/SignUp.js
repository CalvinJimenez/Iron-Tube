import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [newUserSignup, setNewUserSignup] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  console.log(newUserSignup);

  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const { name, username, email, password } = newUserSignup;

  function handleSignupSubmit(e) {
    e.preventDefault();
    let user = {
      name,
      username,
      email,
      password,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          history.push(`/users/${user.id}`);
        });
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }
  const handleOnChangeSignup = (synthE) => {
    setNewUserSignup({
      ...newUserSignup,
      [synthE.target.name]: synthE.target.value,
    });

    // console.log(synthE);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form onSubmit={handleSignupSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Name"
              onChange={handleOnChangeSignup}
              name="name"
            />
          </div>
          <br />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Username"
              onChange={handleOnChangeSignup}
              name="username"
            />
          </div>
          <br />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Email"
              onChange={handleOnChangeSignup}
              name="email"
              type="email"
            />
          </div>
          <br />
          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleOnChangeSignup}
            />
          </div>
          <br />
          <button className="btn w-full flex" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
