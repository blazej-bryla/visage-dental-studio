import {type Services} from '@/types/Services'
import Image from 'next/image'
import Link from 'next/link'

const Services = ({items}: { items: Array<Services> }) => {

  return (
    <div className="defaultContainer grid gap-8 px-2 py-12 md:grid-cols-3">
      {items.map((item, i) => (
        <Link href={item.href} className="group  flex flex-col" key={i}>
          <div className={'relative'}>
            <Image src={item.image} alt={item.alt}/>
            <span
              className="info-span absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-companyPink px-4 py-2 uppercase text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
            Know more
          </span>
          </div>
          <h4 className="mb-8 pt-4 text-center font-heading text-2xl group-hover:underline">{item.text}</h4>
        </Link>
      ))}
    </div>
  )

}
export default Services