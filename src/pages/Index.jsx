import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente'

// Proviene: de react-router-dom que estamos usando en el archivo: main.jsx
// Es muy similar a useEffect
// Se ejecutará cuando el componente cargue: ideal para cargar state o consultar una api y obtener resultado que quieras mostrar en un componente.
export function loader() {
  // Esto ya se convierte en mi satate:
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;
}

const Index = () => {
  // Recupera los datos del loader
  const clientes = useLoaderData();

  console.log(clientes)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      { clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
              {clientes.map( cliente => (
                <Cliente cliente={cliente} key={cliente.id}/>

              )) }
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aun.</p>
      ) }

    </>

  )
}

export default Index
