"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch, BiSolidContact } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import Button from "./Button";
// import useAuthModal from "@/hooks/useAuthModal";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useUser } from "@/hooks/useUser";
// import { toast } from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // const authModal = useAuthModal();
  const router = useRouter();

  //   const supabaseClient = useSupabaseClient();
  //   const { user } = useUser();

  const handleLogout = async () => {};
  return (
    <div
      className={twMerge(`h-fit bg-gradient-to-b from-blue-500 p-6`, className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-[#fff] flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-black font-bold" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-[#fff] flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretRight className="text-black font-bold" size={35} />
          </button>
        </div>

        {/* Màn hình reponsive */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push("/")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <BiSearch className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <BiSolidContact className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/map")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RiMapPinLine className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div className="flex gap-x-4 items-center">
              <Button
                // onClick={authModal.onOpen}
                className="bg-transparent text-[#fff] font-medium"
              >
                Sign up
              </Button>
            </div>
            <div className="flex gap-x-4 items-center">
              <Button
                // onClick={authModal.onOpen}
                className="bg-white px-6 py-1 text-black"
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
