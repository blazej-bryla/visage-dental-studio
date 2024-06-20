import TextWithImage from '@/components/TextWithImage'
import {FirstSection, SecondSection} from '../constants/FrontPageData'

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
        className={'md:flex-row-reverse bg-darkSection'}
      />
    </main>
  )
}
export default Page