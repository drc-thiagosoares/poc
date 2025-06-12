import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link href="/">Home</Link> | 
          | <Link href="/vagas">Vagas</Link> | 
          | <Link href="/empresas">Empresas</Link> | 
          | <Link href="/contato">Contato</Link>
        </div>
      </header>
    </>
  );
}
