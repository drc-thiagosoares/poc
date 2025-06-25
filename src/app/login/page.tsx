import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Login",
  description: "login description",
};

export default function LoginPage() {
  return (
    <>
      <main>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-full bg-no-repeat"
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
              >
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Faça seu login com rede social
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      Google
                    </button>
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      Facebook
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Ou entre com seu e-email e senha</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="E-MAIL"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="SENHA"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        LOGIN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a href="#pablo" className="text-blueGray-200"
                    ><small>Esqueceu sua senha?</small></a
                  >
                </div>
                <div className="w-1/2 text-right">
                  <a href="./register.html" className="text-blueGray-200"
                    ><small>Deseja criar uma conta?</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute w-full bottom-0 bg-blueGray-800 pb-6">
          <div className="container mx-auto px-4">
            <hr className="mb-6 border-b-1 border-blueGray-600" />
            <div
              className="flex flex-wrap items-center md:justify-between justify-center"
            >
              <div className="w-full md:w-4/12 px-4">
                <div
                  className="text-sm text-white font-semibold py-1 text-center md:text-left"
                >
                  Copyright © <span id="get-current-year"></span>
                  <a
                    href="https://www.creative-tim.com?ref=njs-login"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                    >Creative Tim</a
                  >
                </div>
              </div>
              <div className="w-full md:w-8/12 px-4">
                <ul
                  className="flex flex-wrap list-none md:justify-end justify-center"
                >
                  <li>
                    <a
                      href="https://www.creative-tim.com?ref=njs-login"
                      className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                      >Creative Tim</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njs-login"
                      className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://blog.creative-tim.com?ref=njs-login"
                      className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-login"
                      className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                      >MIT License</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
    </>
  );
}
