import React from "react";

const Container = (props) => {
  return (
    <div className=" justify-center">
      <div className="container mx-auto p-4">{props.children}</div>
    </div>
  );
};

export default Container;
