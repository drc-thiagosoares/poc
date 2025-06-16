import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link href="/">Home</Link> | 
          | <Link href="/jobs">Jobs</Link> | 
          | <Link href="/companies">Companies</Link> | 
          | <Link href="/contact">Contact</Link>
        </div>
      </header>
    </>
  );
}
