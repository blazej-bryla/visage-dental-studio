import TextWithImage from '@/components/TextWithImage'
import {FirstSection, SecondSection, ServicesSection} from '../constants/FrontPageData'
import SectionCenterTitle from '@/components/SectionCenterTitle'
import Services from '@/components/Services'


const Page = () => {
  return (
    <main>
      Main container
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
        <SectionCenterTitle title={ServicesSection.title} subtitle={ServicesSection.subtitle} href={ServicesSection.href} />
        <Services items={ServicesSection.items}/>
      </div>
    </main>
  )
}
export default Page