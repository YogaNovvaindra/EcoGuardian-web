import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarFeedback = () => {
  const pathname = usePathname();
  return (
    <ul className="flex">
      <li>
        <Link href="/feedback/questions">
          {" "}
          <button
            className={`${
              pathname === "/feedback/questions"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tl-md`}
          >
            Questions
          </button>
        </Link>
      </li>
      <li>
        <Link href="/feedback/response">
          {" "}
          <button
            className={`${
              pathname === "/feedback/response"
                ? "bg-black text-light-1"
                : "bg-light-1"
            } px-4 py-2 rounded-tr-md`}
          >
            Response
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarFeedback;
