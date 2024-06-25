import TextWithImage from '@/components/TextWithImage'
import {FirstSection, SecondSection, ServicesSection} from '../constants/FrontPageData'
import SectionCenterTitle from '@/components/SectionCenterTitle'
import Services from '@/components/Services'
import HomeVideo from '@/public/assets/videos/home1.mp4'
import Video from 'next-video'


const Page = () => {
  return (
    <>
      <header className={'relative'}>
        <Video controls={false} loop autoPlay src={HomeVideo}/>
        <div className={'absolute top-0 flex h-full w-full flex-col items-center justify-center'}>
          <h1 className={'gradient-text text-center text-5xl uppercase'}>Visage dental studio <br/> of excellence</h1>
          <p className={'mt-6 text-xl capitalize tracking-wide  text-lightPink'}>Where art meets technology</p>
        </div>
      </header>
      <main>
        <TextWithImage
          title={FirstSection.title}
          text={FirstSection.text}
          image={FirstSection.image}
          alt={'Passion section image'}
          buttonText={'Our services'}
          href={'/services'}
        />
        <TextWithImage
          title={SecondSection.title}
          text={SecondSection.text}
          image={SecondSection.image}
          alt={'Dental tech section image'}
          className={'md:flex-row-reverse'}
          dark={true}
        />
        <div className={'py-24'}>
          <SectionCenterTitle title={ServicesSection.title} subtitle={ServicesSection.subtitle}
            href={ServicesSection.href}/>
          <Services items={ServicesSection.items}/>
        </div>
      </main>
    </>

  )
}
export default Page
