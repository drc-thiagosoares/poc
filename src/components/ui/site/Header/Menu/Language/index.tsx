import UIButtonLogin from "@/components/ui/buttons/Login";
import Link from "next/link";

export default function HeaderMenuLanguage() {
  return (
    <>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="#"
            target="_blank"
          >
              PT
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="#"
            target="_blank"
          >
              ES
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="#"
            target="_blank"
          >
              EN
          </Link>
        </li>
        <li className="flex items-center">
          <UIButtonLogin />
        </li>
      </ul>
    </>
  );
}
