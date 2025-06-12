import Link from 'next/link'

export default function RegisterLinks() {
  return (
    <>
      <ul>
        <li>
          <Link href="/cadastro/candidatos">Cadastro Candidato</Link>
        </li>
        <li>
          <Link href="/cadastro/empresas">Cadastro Empresa</Link>
        </li>
      </ul>
    </>
  );
}
