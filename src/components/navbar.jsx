import React from "react";

const navbar = () => {
  return (
    <div className="Todo-list">
      <div className="bg-black h-12 text-white flex justify-around items-center  ">
        <div className="first-item cursor-pointer">
          <i class="ri-attachment-line "> </i>TODO
        </div>
        {/* <i class="ri-align-right"></i>  */}
        <div className="last-item flex w-80 h-auto">
        
          <div className="hidden md:block">
            <ul className="flex gap-7 ">
              <li className="cursor-pointer hover:text-orange-400 ">Home</li>
              <li className="cursor-pointer hover:text-orange-400 ">About</li>
              <li className="cursor-pointer hover:text-orange-400 ">Support</li>
              <li className="cursor-pointer hover:text-orange-400 ">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="todolist mt-5 w-[50%] border border-slate-800 flex justify-between pl-7 pr-7 mx-auto bg-gray-700 text-white rounded-md p-2  ">
        <div className="icon">
          <i className="ri-home-smile-2-fill"></i>
        </div>
        <div className="items">
          <h3>Website Todo</h3>
        </div>
      </div>
    </div>
  );
};

export default navbar;
