import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMap = () => {
  const pathname = usePathname();
  return (
    <ul className="flex">
      <li>
        <Link href="/map/location">
          {" "}
          <button
            className={`${
              pathname === "/feedback/questions"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tl-md`}
          >
            Map
          </button>
        </Link>
      </li>
      <li>
        <Link href="/feedback/action">
          {" "}
          <button
            className={`${
              pathname === "/feedback/response"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tr-md`}
          >
            Action
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMap;
