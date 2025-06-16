import Link from 'next/link'

export default function RegisterLinks() {
  return (
    <>
      <ul>
        <li>
          <Link href="/register/user">Cadastro Candidato</Link>
        </li>
        <li>
          <Link href="/register/company">Cadastro Empresa</Link>
        </li>
      </ul>
    </>
  );
}
