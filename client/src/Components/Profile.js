import React, { useState } from "react";

function Profile({ loggedInUser, handleLogout }) {
  
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPfp, setNewPfp] = useState("");

  function handleUpdateSubmit(e) {
    e.preventDefault();
    let updatedSignup = {
      newUserName,
      newPassword,
      newPfp,
    };
    fetch(`/users/${loggedInUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSignup),
    })
      .then((r) => r.json())
      .then((dataFromRails) => {console.log(dataFromRails)});
  }
  return (
    <div>
      <header className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-primary py-8 px-6 shadow rounded-lg sm:px-10">
        <label className="label text-white font-bold">Profile Picture</label>
        <img className="" src={loggedInUser.pfp} alt="" />
        <form onSubmit={handleUpdateSubmit} className="py-6 px-4 sm:px-10">
          <div>
            <label>
              New Username:
              <input
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type="text"
                placeholder="username"
                name="username"
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              New Profile Picture:
              <input
                className="w-full border block p-4 border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type="text"
                placeholder="image url"
                onChange={(e) => setNewPfp(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              New Password:
              <input
                className="w-full border block p-4 border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type="password"
                placeholder="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="">
            <button
              className="btn place-content-center"
              type="submit"
              onClick={handleUpdateSubmit}
            >
              update
            </button>
            <button className="btn place-content-center" onClick={handleLogout}>
              logout
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default Profile;
