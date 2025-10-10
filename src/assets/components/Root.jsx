import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-[1100px] mx-auto">
      <Header></Header>
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner text-secondary text-4xl"></span>
        </div>
      )}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
