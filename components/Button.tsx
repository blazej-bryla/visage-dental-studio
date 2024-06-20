import Link from 'next/link'

const Button = ({href, text}: { href: string, text: string }) => {

  return (
    <Link className={'w-fit text-white rounded-md bg-companyPink px-4 py-2 md:hover:bg-companyPinkHover'} href={href}>
      {text}
    </Link>
  )
}
export default Button