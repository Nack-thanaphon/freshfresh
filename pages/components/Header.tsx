import Link from 'next/link'

export default function Header() {
  return (
    <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8 px-10">
      <Link href="/">
        <a className="hover:underline">Fresh<span className='text-green-500'>Fresh</span></a>
      </Link>
      .
    </div>
  )
}
