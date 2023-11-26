import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarImageDetector = () => {
  const pathname = usePathname();
  return (
    <ul className="flex">
      <li>
        <Link href="/image/realtime">
          {" "}
          <button
            className={`${
              pathname === "/image/realtime"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tl-md`}
          >
            Real-Time
          </button>
        </Link>
      </li>
      <li>
        <Link href="/image/result">
          {" "}
          <button
            className={`${
              pathname === "/image/result"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tr-md`}
          >
            Result
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarImageDetector;
