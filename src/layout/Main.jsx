import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
