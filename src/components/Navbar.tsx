import { NAVBAR_CONSTANTS } from './constants'

const Navbar = () => {
  return (
    <nav>
      <ul className='bg-black flex items-center justify-between w-full text-white p-4 rounded-md'>
        {NAVBAR_CONSTANTS.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
