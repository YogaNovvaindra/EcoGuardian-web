import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarDetailForecast = () => {
  const pathname = usePathname();
  return (
    <ul className="flex">
      <li>
        <Link href="/detailforecast/forecast">
          {" "}
          <button
            className={`${
              pathname === "/detailforecast/forecast"
                ? "bg-light-1"
                : "bg-black text-light-1"
            } px-4 py-2 rounded-tl-md`}
          >
            Forecast
          </button>
        </Link>
      </li>
      <li>
        <Link href="/detailforecast/ispu">
          {" "}
          <button
            className={`${
              pathname === "/detailforecast/ispu"
                ? "bg-light-1"
                : "bg-black text-light-1"
            } px-4 py-2 rounded-tr-md`}
          >
            Ispu
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarDetailForecast;
