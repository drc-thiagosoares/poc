import Link from "next/link";

export default function UIButtonRegister() {
  return (
    <>
      <button
        className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-800 hover:bg-green-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
      >
        <i className="fas fa-arrow-alt-circle-down"></i>
        <Link
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="/register/user"
        >
          Criar uma conta
        </Link>
      </button>
    </>
  );
}
