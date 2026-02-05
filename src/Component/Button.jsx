import React from "react";

function Button(props) {
  return (
    <>
      <button className="bg-[#2a2aebe9] rounded-sm px-8 py-3 font-bold max-[770px]:text-sm ">
       {props.title}
    </button>
    </>
  );
}

export default Button;
