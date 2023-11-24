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
              pathname === "/map/location"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tl-md`}
          >
            Location
          </button>
        </Link>
      </li>
      <li>
        <Link href="/map/action">
          {" "}
          <button
            className={`${
              pathname === "/map/action"
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
