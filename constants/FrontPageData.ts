import {PassionImage, DentalTechImage, ImplantologyImage, ZirconiaImage, PbcShellsImage} from '@/public/assets/images'

const FirstSection = {
  title: 'We have a passion for technology',
  text: [
    'We have moved away from the more traditional analogue methods of manafacture, and are now fully established in the digital world.',
    'With an increase demand for digital dentistry, laboratories are now expected to adapt quicky to the new pressure placed on them.'
  ],
  image: PassionImage
}

const SecondSection = {
  title: 'Using Science and artistry to achieve excellence',
  text:[
    'At Visage Dental Studio we believe that uniting science and artistry is the key to achieving top-noch aesthetics. Our commitment to lifelong learning keeps us energized and ever-expanding our skills. We thrive on collaborating with fellow practitioners, ensuring optimal patient care for consistently perfect results.'
  ],
  image: DentalTechImage
}

const ServicesSection = {
  title: 'Services',
  href: '/services',
  subtitle: 'See all services ->',
  items: [
    {
      image: ImplantologyImage,
      alt: 'Implantology & Surgical Guides Image',
      text:'Implantology & Surgical Guides ',
      href: '/services#implantology'
    },
    {
      image: ZirconiaImage,
      alt: 'Zirconia Crown and Bridges Image',
      text: 'Zirconia Crown and Bridges',
      href: '/services#zirconia'
    },
    {
      image: PbcShellsImage,
      alt: 'PBC Bridges / Shell Crowns (Precious & Non-Precious) Image',
      text: 'PBC Bridges / Shell Crowns (Precious & Non-Precious)',
      href: '/services#pbc'
    },
  ]
}

export {FirstSection, SecondSection, ServicesSection}