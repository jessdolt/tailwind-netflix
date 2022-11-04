import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/404904a7-217e-4cc7-ac34-a46de0f68ffe/PH-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background SignUp Image"
        />
        <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
