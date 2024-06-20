import Link from 'next/link'
import cn from 'classnames'

const subtitleClassNames = 'font-thin text-thinGray'

interface Props{
  title: string,
  href?: string,
  subtitle?: string,
  classNames?: string
}

const SectionCenterTitle = ({title, href, subtitle, classNames}: Props) => {

  return (
    <div className={cn(classNames, 'defaultContainer px-2  flex items-center flex-col')}>
      <h2 className={'mb-8 font-heading text-5xl font-bold'}>{title}</h2>
      {subtitle && href ? <Link className={cn(subtitleClassNames,' md:hover:underline')} href={href}>{subtitle}</Link> : subtitle ?
        <p className={subtitleClassNames}>{subtitle}</p> : null}

    </div>
  )
}
export default SectionCenterTitle