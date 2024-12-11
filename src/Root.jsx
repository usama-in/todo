import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="mt-[2rem] ml-auto mr-auto w-[60vw]">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
