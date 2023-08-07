import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href={"/"}
        className="w-24 h-16 bg-black text-light flex items-center justify-center "
      >
        Kostiantyn
      </Link>
    </div>
  );
};

export default Logo;
