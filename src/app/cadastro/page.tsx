import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "fitness | Cadastro",
  description: "cadastro description",
};

export default function Cadastro() {
  return (
    <>
      <h1>CADASTRO</h1>
      <div>
        <ul>
          <li>
            <Link href="/cadastro/candidatos">Cadastro Candidato</Link> 
          </li>
          <li>
            <Link href="/cadastro/empresas">Cadastro Empresas</Link> 
          </li>
        </ul>
      </div>
    </>
  );
}
