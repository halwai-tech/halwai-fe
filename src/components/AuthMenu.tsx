"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { LogOut } from "lucide-react";

interface AuthMenuProps {
  mobile?: boolean; // if true, render mobile-friendly layout
}

const AuthMenu: React.FC<AuthMenuProps> = ({ mobile = false }) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading")
    return <div className="text-sm text-muted-foreground">Loading...</div>;

  if (!session) {
    return (
      <button
        onClick={() => signIn("google", undefined, { prompt: 'select_account' })}
        className={`${
          mobile ? "w-full px-4 py-2" : "ml-6 px-5 py-2"
        } bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors`}
      >
        Sign In
      </button>
    );
  }

  return (
    <div className={`${mobile ? "mt-4" : "relative ml-6"}`} ref={dropdownRef}>
      {!mobile && (
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center rounded-full border border-border p-1"
        >
          <Image
            src={session.user?.image ?? "/default-avatar.png"}
            alt={session.user?.name ?? "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
      )}

      {(open || mobile) && (
        <div
          className={`${
            mobile
              ? "flex flex-col items-center"
              : "absolute -right-24 mt-4 w-56 bg-card border border-border rounded-lg shadow-lg z-50"
          }`}
        >
          <div
            className={`${
              mobile ? "" : "p-4 border-b border-border"
            } text-center`}
          >
            <Image
              src={session.user?.image ?? "/default-avatar.png"}
              alt={session.user?.name ?? "User"}
              width={mobile ? 50 : 60}
              height={mobile ? 50 : 40}
              className="rounded-full mx-auto border border-border"
            />
            <h2 className="font-semibold mt-2">{session.user?.name}</h2>
            <h4 className="text-sm text-center text-muted-foreground">
              {session.user?.email}
            </h4>
          </div>
          <button
            onClick={() => {
              signOut({ callbackUrl: "/" });
              setTimeout(() => {
                window.open("https://accounts.google.com/Logout", "_blank");
              }, 300);
            }}
            className={`${
              mobile
                ? "w-full mt-2"
                : "w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors rounded-b-lg"
            }`}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthMenu;
