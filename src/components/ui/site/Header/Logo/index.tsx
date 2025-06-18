import Link from "next/link";

export default function HeaderLogo() {
  return (
    <>
      <div
        className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <Link
          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          href="/"
        >
          fitness
        </Link>
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </>
  );
}
