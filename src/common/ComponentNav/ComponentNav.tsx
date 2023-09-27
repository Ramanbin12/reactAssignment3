import React from "react";
import DropDown from "./Dropdown";
import { NavLink } from "react-router-dom";
const ComponentNav = () => {
    return (
        <div className="hidden md:flex gap-2 text-sm w-full justify-evenly h-[50px]  p-3  ">
            <div className="group  dropdown  z-[100] relative   cursor-pointer font-lato  uppercase">
                <a>Women</a>
                <div className="absolute top-[20px] left-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative   cursor-pointer font-lato  uppercase">
                <a>Male</a>
                <div className="absolute top-[20px] z-[100] left-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative   cursor-pointer font-lato  uppercase">
            <a>Mother-Child</a>

                <div className="absolute top-[20px]  left-[0px]">
                    
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative   cursor-pointer font-lato  uppercase">
            {/* <NavLink to='/electronics'>Electronic</NavLink> */}
            <a>Home & Furniture</a>
                <div className="absolute top-[20px]  left-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative    cursor-pointer font-lato  uppercase">
                <a>Super Market</a>
                <div className="absolute top-[20px]  left-[0px]">
                    <DropDown />
                </div>
            </div>

            <div className="group  dropdown  z-[100] relative    cursor-pointer font-lato  uppercase">
                <a>Cosmetics</a>
                <div className="absolute  top-[20px]  lg:right-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown z-[100]  relative   cursor-pointer font-lato  uppercase">
                <a>Shoe & Bag</a>
                <div className="absolute top-[20px]  right-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown z-[100]  relative   cursor-pointer font-lato  uppercase">
            <NavLink to='/electronics'>Electronic</NavLink>
                <div className="absolute top-[20px]  right-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative    cursor-pointer font-lato uppercase tracking-wide">
                <a>Sport & Outdoor</a>
                <div className="absolute top-[20px]  right-[0px]">
                    <DropDown />
                </div>
            </div>
            <div className="group  dropdown  z-[100] relative  px-4  cursor-pointer font-lato  uppercase">
                <a> Best seller</a>
                <div className="absolute top-[20px]  right-0">
                    <DropDown />
                </div>
            </div>
        </div>
    )
}
export default ComponentNav