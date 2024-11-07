import { useState } from 'react'
import { RED_SOCIAL_CONSTANTS } from './constants'

const RedesSociales = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className='flex justify-end w-full h-full'>
      {RED_SOCIAL_CONSTANTS.map((item, index) => (
        <div key={index}>
          <img
            src={hoveredIndex === index ? item.alterImageSrc : item.imageSrc}
            alt={item.alterImageSrc}
            className='size-10 object-cover'
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(null)}
          />
        </div>
      ))}
    </div>
  )
}

export default RedesSociales
