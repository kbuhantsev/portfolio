import Image from "next/image";
import profilePic from "../app/public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <Image src={profilePic} alt="" width={500} height={500} />
      </div>
    </div>
  );
}
