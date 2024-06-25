'use client'
import {ImgComparisonSlider} from '@img-comparison-slider/react'
import Image, {StaticImageData} from 'next/image'

interface Props {
  src: StaticImageData,
  alt: string,
  slot: string
}[]

const ComparsionImage = ({images}: {images: Array<Props>}) => {

  return(
    <ImgComparisonSlider value={Math.random()*100} className={'max-w-[300px] focus:outline-none'}>
      {images.map((image) => (
        <Image key={image.alt} src={image.src} alt={image.alt} slot={image.slot} />
      ))}
    </ImgComparisonSlider>
  )
}
export default ComparsionImage