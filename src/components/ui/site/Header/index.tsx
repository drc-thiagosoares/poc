import HeaderLogo from "./Logo";
import HeaderMenuLanguage from "./Menu/Language";
import HeaderMenuLinks from "./Menu/Links";

export default function Header() {
  return (
    <>
      <nav
        className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
      >
        <div
          className="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <HeaderLogo />
          <div
            className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
            id="example-collapse-navbar"
          >
            <HeaderMenuLinks />
            <HeaderMenuLanguage />
          </div>
        </div>
      </nav>
    </>
  );
}
