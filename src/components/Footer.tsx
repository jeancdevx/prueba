import { useEffect, useState } from 'react'

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className='flex w-full flex-col gap-y-2'>
      <img
        src='/imgs/cab1.jpg'
        alt='Footer Image'
        className='h-48 object-cover rounded-3xl'
      />
      <p className='text-center'>{dateTime.toLocaleString()}</p>
    </footer>
  )
}

export default Footer
