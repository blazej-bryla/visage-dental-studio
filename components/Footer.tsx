import Image from 'next/image'
import Logo from '@/public/assets/logo.png'
import Link from 'next/link'
import {Icon} from '@iconify/react'

const Footer = () => {


  return <footer className={'flex flex-col items-center bg-defaultGray text-[15px] text-white'}>
    <Image src={Logo} alt={'Visage dental studio logo'} width={140} height={140} />
    <h4 className={'text-center text-[26px] font-semibold'}>Visage Dental Studio of Excellence</h4>
    <p className={'mt-8'}>13 Ladyhill, Luton, LU4 9LZ</p>
    <p className={'mt-4'}>Mon-Fri: 09:00-17:00</p>
    <p>Sat-Sun: Closed</p>
    <p className={'mt-4'}>Mail: <a href={'mailto:crowns@visagedentalstudio.com'} className={'transition-all duration-300 md:hover:text-slate-400 md:hover:underline'}>crowns@visagedentalstudio.com</a></p>
    <p>Phone: <a href={'tel:01582517070'} className={'transition-all duration-300 md:hover:text-slate-400 md:hover:underline'}>01582 517070</a></p>
    <div className={'mt-20 flex gap-4 font-semibold text-white'}>
      <Link href={'/services'} className={'px-4 py-2 uppercase transition-all  duration-300 md:hover:text-slate-400'}>Services</Link>
      <Link href={'/contact'} className={'border-x border-white px-4 py-2 uppercase transition-all  duration-300 md:hover:text-slate-400'}>Contact</Link>
      <Link href={'/about'} className={'px-4 py-2 uppercase transition-all duration-300 md:hover:text-slate-400'}>About</Link>
    </div>
    <div className={'my-20 flex items-center gap-8 '}>
      <a href={'#'}><Icon icon="ei:sc-facebook"  className={'rounded-full bg-[#6F7074] p-2 text-white transition-all duration-300 md:hover:bg-[#7A7B7F]'} width="48" height="48"/></a>
      <a href={'#'}><Icon icon="mdi:instagram"  className={'rounded-full bg-[#6F7074] p-2 text-white transition-all duration-300 md:hover:bg-[#7A7B7F]'} width="48" height="48" /></a>
      <a href={'#'}><Icon icon="ic:baseline-whatsapp" className={'rounded-full bg-[#6F7074] p-2 text-white transition-all duration-300 md:hover:bg-[#7A7B7F]'} width={48} height={48} /></a>
      <a href={'tel:01582517070'}><Icon icon="ph:phone-fill" className={'rounded-full bg-[#6F7074] p-2 text-white transition-all duration-300 md:hover:bg-[#7A7B7F]'} width={48} height={48} /></a>
    </div>
    <p className={'mb-24 text-center text-sm text-[#FFFFFF80]'}>
            2024 Visage Dental Studio of Excellence. All Rights Reserved. <a href={'#'} className={'underline'}>Privacy Policy</a>
    </p>

  </footer>

}
export default Footer