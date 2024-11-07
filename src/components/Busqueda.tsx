import { useState } from 'react'
import { LIBROS_CONSTANTS } from './constants'

const Busqueda = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredLibros, setFilteredLibros] = useState(LIBROS_CONSTANTS)

  const handleSearch = () => {
    const filtered = LIBROS_CONSTANTS.filter((libro) =>
      libro.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredLibros(filtered)
  }

  return (
    <>
      <div className='flex justify-end gap-x-2'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Buscar título...'
          className='border p-2 rounded'
        />
        <button
          onClick={handleSearch}
          className='bg-blue-500 text-white p-2 rounded'
        >
          Buscar
        </button>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {filteredLibros.map((libro, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-y-2'
          >
            <img
              src={libro.imageSrc}
              alt={libro.title}
              className='h-48 w-full object-fill rounded-3xl'
            />
            <h2 className='text-xl font-bold'>{libro.title}</h2>
            <p className='text-gray-600'>{libro.autor}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Busqueda
