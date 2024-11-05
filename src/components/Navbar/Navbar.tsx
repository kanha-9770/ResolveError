"use client";
import React, { useState } from "react";
import { navbarItems } from "@/components/Constants/Navbar/navbarData";
import Image from "next/image";
import Link from "next/link";
import { Menu} from "./nav-menue";
import dynamic from "next/dynamic";
const MenuItem=dynamic(()=>import("./nav-menue"))
const ContactForm=dynamic(()=>import("../Contact/Contact"))
import { usePathname } from "next/navigation";
const CountryLayout=dynamic(()=>import("./NavLayouts/CountryLayout"),{ssr:false})
export default function NavbarDemo() {
  return (
    <div className="relative lg:h-auto lg:mt-0 flex items-center justify-between lg:justify-center">
      <Navbar className="top-0" />
    </div>
  );
}
function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const pathname = usePathname() || "";
  const componentCode = pathname.split("/")[2]?.toLowerCase();
  const componentCodeourCompany = pathname.split("/")[3]?.toLowerCase();
  const [visibilityState, setVisibilityState] = useState({
    isFlagOpen: false,
    isContactFormVisible: false,
  });
  const toggleMenu = () => setIsOpen(!isOpen);
  const expandItem = (item: string) =>
    setExpandedItem(expandedItem === item ? null : item);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);
  return (
    <div
      className={`fixed flex w-full ${
        ["knowledge-center", "clientele"].includes(componentCode) ||
        ["our-company"].includes(componentCodeourCompany)
          ? "bg-[#222222] text-white"
          : "bg-white"
      } h-14 font-poppins lg:mt-0 items-center inset-x-0 mx-auto z-[99999] ${className}`}
    >
      {/* Desktop Menu */}
      <div className="hidden px-12 lg:flex w-full">
        <div className="w-1/5  flex items-center">
          <Link href="/" className="w-full h-full flex items-center">
            <Image
              src="https://assets.nesscoindustries.com/public/assets/Logo.png"
              alt="Logo"
              width={181}
              height={48}
              className="h-[1.4rem]  w-20"
            />
          </Link>
        </div>
        <div className="w-3/5  flex items-center justify-center">
          <Menu>
            {navbarItems.map((item) => (
              <MenuItem
                key={item.name}
                setActive={setActive}
                active={active}
                item={item.name}
                setPosition={() => {}}
                link={item.link}
              >
                {item.component}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className="w-1/5 flex justify-end items-center gap-4">
          <div
            className={`${
              componentCode === "knowledge-center"
                ? "bg-[#525252]"
                : "bg-[#f2f2f2]"
            } gap-2 px-2 h-[1.80rem]  flex items-center justify-center rounded-3xl`}
          >
            <CountryLayout />
          </div>
          <ContactForm
            isContactFormVisible={visibilityState.isContactFormVisible}
            setContactFormVisible={(value) =>
              setVisibilityState((prev) => ({
                ...prev,
                isContactFormVisible: value,
              }))
            }
            setIsFlagOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))
            }
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" lg:hidden  border-b-2 flex w-full ">
        <div className="lg:hidden w-full flex justify-between items-center -ml-2 p-4">
          <Link href="/" className="h-6 flex items-center">
            <Image
              src="https://assets.nesscoindustries.com/public/assets/Logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="h-[1.4rem] w-full"
            />
          </Link>

          <button
            className="ml-2 text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-300/90 backdrop-blur-[80px] h-screen  shadow-lg z-[99999]">
            <div className="flex bg-white h-2/3 p-4 flex-col space-y-3">
              {navbarItems.map((item) => (
                <div key={item.name}>
                  <div
                    className="flex -mt-3 justify-between items-center py-2 border-b"
                    onClick={() => expandItem(item.name)}
                  >
                    <span className="text-lg font-semimedium text-black">
                      {item.name}
                    </span>
                    <span className="text-gray-500 pr-2 text-2xl">
                      {expandedItem === item.name ? "-" : "+"}
                    </span>
                  </div>
                  {expandedItem === item.name && (
                    <div className="absolute h-screen inset-0 bg-white z-50 flex flex-col">
                      <div className="flex border-b-2 bg-[#f2f2f2] justify-between items-center">
                        <span className="text-lg pl-4  text-[#483d73] font-semibold ">
                          {item.name}
                        </span>
                        <button
                          className=" invert-0 p-4"
                          onClick={() => expandItem(item.name)}
                        >
                        </button>
                      </div>
                      <div className="py-4 flex-grow">
                        <div className="text-sm text-gray-700">
                          {item.component}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="w-full">
                <div className="relative -mt-3 h-full flex flex-col w-full  lg:hidden">
                  <div className="relative max-w-screen-2xl p-1 flex w-full mx-auto">
                    <div className="justify-center items-center w-full rounded-xl">
                      <form className="flex justify-start  ">
                        <div className="relative w-full border-gray-300">
                          <input
                            type="text"
                            id="search-dropdown"
                            value={searchValue}
                            onChange={handleInputChange}
                            className="block p-[0.6rem] w-full z-20 text-sm bg-gray-100 rounded-3xl border-slate-100 font-montserrat pr-10 focus:outline-none focus:ring-2 focus:ring-transparent"
                            placeholder="Search Product Name..."
                            required
                          />
                         
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex felx-row justify-between items-center gap-2 border-t-[1px] border-b-[1px]  w-full p-2">
                    <div className="relative ">
                      <CountryLayout />
                    </div>
                    <div className="relative ">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
