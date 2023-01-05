import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  // TODO: infinite scroll 적용
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // #141414
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/Luneflix2.png"
          alt="Vercel Logo"
          width={150}
          height={150}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">홈</li>
          <li className="headerLink">TV 프로그램</li>
          <li className="headerLink">영화</li>
          <li className="headerLink">최신 등록 콘텐츠</li>
          <li className="headerLink">내가 찜한 콘텐츠</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-5 w-5" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-5 w-5" />
        <Link href="/account">
          <img src="profile.png" alt="" className="h-6 w-6 rounded" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
