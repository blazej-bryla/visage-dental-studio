import Link from 'next/link'

const Button = ({href, text}: { href: string, text: string }) => {

  return (
    <Link className={'w-fit rounded-md bg-companyPink px-4 py-2 text-white md:hover:bg-companyPinkHover'} href={href}>
      {text}
    </Link>
  )
}
export default Button