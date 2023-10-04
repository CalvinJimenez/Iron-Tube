import React from "react";
import SignUp from "./SignUp";

function Login({
  loggedInUser,
  handleLoginSubmit,
  handleOnChangeForUserToLogin,
}) {
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // useEffect(() => {
  //   // console.log("!!!!!!!!!!!")
  //   fetch("/userInSession")
  //     .then((r) => r.json())
  //     .then((userAlreadyLoggedIn) => {
  //       setLoggedInUser(userAlreadyLoggedIn);
  //     });
  // }, []);

  // const [userToLogin, updateUserToLoginInfo] = useState({
  //   username: "",
  //   password: "",
  // });
  // // console.log("STATE OF userToLogin:", userToLogin)

  // const handleOnChangeForUserToLogin = (synthE) => {
  //   // console.log(synthE);

  //   updateUserToLoginInfo({
  //     ...userToLogin,
  //     [synthE.target.name]: synthE.target.value,
  //   });
  // };

  // const handleLoginSubmit = (synthE) => {
  //   synthE.preventDefault();

  //   // console.log("wfgddggd")

  //   fetch("/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(userToLogin),
  //   })
  //     .then((r) => r.json())
  //     .then((hopefullyAUser) => {
  //       // console.log(hopefullyAUser)
  //       setLoggedInUser(hopefullyAUser);
  //     });
  // };

  // const handleLogout = () => {
  //   fetch("/logout", { method: "DELETE" })
  //     .then((r) => r.json())
  //     .then((DR) => {
  //       //// Pesimistic Rendering
  //       setLoggedInUser(null);
  //     });
  // };

  return (
    <div>
      <header className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-primary py-8 px-6 shadow rounded-lg sm:px-10">
        <form onSubmit={handleLoginSubmit} className="py-6 px-4 sm:px-10">
          <div>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              type="username"
              onChange={handleOnChangeForUserToLogin}
              placeholder="username"
              name="username"
            />
          </div>
          <br></br>
          <div>
            <input
              className="w-full border block p-4 border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              type="password"
              onChange={handleOnChangeForUserToLogin}
              placeholder="password"
              name="password"
            />
          </div>
          <br></br>
          <div >
            <div className="pl-14">
              <input type="submit" value="login" className="btn" />

              <label htmlFor="my-modal-3" className="btn">
                Sign Up
              </label>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <div className="py-4">
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}
export default Login;
