import Link from "next/link";

export default function UIButtonLogin() {
  return (
    <>
      <Link
        href="/login"
        className="text-white bg-blue-800 hover:bg-blue-400 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      >
        Login
      </Link>
    </>
  );
}
