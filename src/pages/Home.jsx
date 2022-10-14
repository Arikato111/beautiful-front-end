import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <main>
      <div className=" ">
        <h1 className="text-4xl text-center my-10 text-slate-600">
          Beautiful front-end Learn
        </h1>
      </div>
    </main>
  );
}

export default Home;
