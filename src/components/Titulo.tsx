import { useEffect, useState } from 'react'

const fontFamilies = [
  'Arial',
  'Courier',
  'Arial Black',
  'Gothic',
  'Times New Roman',
  'Calibri'
]

const Titulo = () => {
  const [fontIndex, setFontIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fontFamilies.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1
      style={{ fontFamily: fontFamilies[fontIndex] }}
      className='text-5xl font-bold text-center'
    >
      Busqueda de libros
    </h1>
  )
}

export default Titulo
