import cn from 'classnames'
import Image, {StaticImageData} from 'next/image'
import Button from '@/components/Button'

interface Props {
  title: string,
  text: Array<string>,
  buttonText?: string,
  href?: string,
  className?: string,
  image: StaticImageData,
  alt: string,
  dark?: boolean
}

const TextWithImage = ({title, text, buttonText, href, className, image, alt, dark = false}: Props) => {

  return(
    <section className={dark ? 'bg-darkSection' : 'bg-white'}>
      <div className={cn(className, 'defaultContainer w-full px-2 py-24 flex md:flex-row flex-col items-center gap-12 md:gap-24')}>

        <Image className={'rounded-xl'} src={image} alt={alt} width={483}/>

        <div className={'flex max-w-xl flex-col gap-4'}>
          <h2 className={'mb-8 font-heading text-5xl font-bold'}>{title}</h2>
          {text.map((item, i) => (
            <p className={'font-thin text-thinGray'} key={i}>{item}</p>
          ))}
          {buttonText && href ? <Button href={href} text={buttonText}/> : null}

        </div>
      </div>
    </section>
  )
}
export default TextWithImage