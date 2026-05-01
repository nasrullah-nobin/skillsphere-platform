"use client";
import { Avatar, Button } from "@heroui/react";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b sticky top-0 bg-linear-to-br from-[#DFDCFD] to-[#D4EDED] z-50">
      <Image
        src={logo}
        alt="logo"
        width={180}
        height={60}
        style={{ objectFit: "contain" }}
      />

      <nav className="flex items-center gap-6">
        <NavLinks className="font-bold hover:text-blue-600" href="/">
          Home
        </NavLinks>
        <NavLinks className="font-bold hover:text-blue-600" href="/courses">
          Courses
        </NavLinks>
        <NavLinks className="font-bold hover:text-blue-600" href="/profile">
          My Profile
        </NavLinks>
      </nav>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <Avatar>
              <Image src={user.image} alt="User" width={80} height={60}></Image>
            </Avatar>{" "}
            <h6 className="font-medium">{user.name}</h6>{" "}
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
            <Link href={"/login"}>
              {" "}
              <Button className="font-bold">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="font-bold">Register</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
