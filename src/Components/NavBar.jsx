"use client";

import { Avatar, Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-linear-to-br from-[#DFDCFD] to-[#D4EDED] border-b">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">

        <Image src={logo} alt="logo" width={150} height={50} />

       
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks className={'font-bold'} href="/">Home</NavLinks>
          <NavLinks className={'font-bold'} href="/courses">All Courses</NavLinks>
          <NavLinks className={'font-bold'} href="/profile">My Profile</NavLinks>
        </nav>

      
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Avatar>
                <Image src={user.image} alt="User" width={40} height={40} />
              </Avatar>
              <h6 className="font-medium">{user.name}</h6>
              <Button
                variant="secondary"
                onClick={async () => {
                  await authClient.signOut();
                  toast.success("Logged out");
                  router.push("/login");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden flex gap-3 flex-col px-4 pb-4 space-y-3 bg-white shadow">

          <NavLinks className={'font-bold'} href="/" onClick={() => setOpen(false)}>
            Home
          </NavLinks>

          <NavLinks className={'font-bold'} href="/courses" onClick={() => setOpen(false)}>
            All Courses
          </NavLinks>

          <NavLinks className={'font-bold'} href="/profile" onClick={() => setOpen(false)}>
            My Profile
          </NavLinks>

          <div className="pt-3 border-t flex flex-col gap-2">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <Image src={user.image} alt="User" width={40} height={40} />
                  </Avatar>
                  <span>{user.name}</span>
                </div>

                <Button
                  variant="secondary"
                  onClick={async () => {
                    await authClient.signOut();
                    toast.success("Logged out");
                    router.push("/login");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className="w-full">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;