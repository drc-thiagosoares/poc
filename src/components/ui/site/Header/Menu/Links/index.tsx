import Link from "next/link";

export default function HeaderMenuLinks() {
  return (
    <>
      <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/jobs"
          >
            <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Vagas
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/companies"
          >
            <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Empresas
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/contact"
            >
              <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Contato
          </Link>
        </li>
      </ul>
    </>
  );
}
