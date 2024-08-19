import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Button } from "../ui/button";
import Link from "next/link";
import { getAuth } from "@clerk/nextjs/server";

export default function Header({ children }: { children: ReactNode }) {
  // const session = getAuth();
  return (
    <div className="flex shadow-sm justify-between items-center py-5 px-6">
      <h1 className="text-lg font-semibold cursor-pointer active:scale-95 hover:opacity-90 transition-all">
        <Link href={"/home"}>Rescue Hub</Link>
      </h1>
      {/* <Navbar /> */}
      <Links />
      {children}
      {/* <AuthProfile></AuthProfile> */}
    </div>
  );
}

function Links() {
  const links = [
    { label: "Home", route: "/home" },
    { label: "Applicants", route: "/applicants" },
    { label: "About", route: "/about" },
    // { label: "Contact", route: "/contact" },
  ];
  return (
    <>
      <div className="flex justify-center gap-8 text-sm">
        {links.map((link, index) => (
          <Link key={index} className="hover:opacity-55" href={link.route}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export function AuthProfile() {
  return (
    <div className="space-x-2">
      <Button>Signup</Button>
      <Button variant={"outline"}>Login</Button>
    </div>
  );
}
