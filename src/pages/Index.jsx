// Proviene: de react-router-dom que estamos usando en el archivo: main.jsx
// Es muy similar a useEffect
// Se ejecutará cuando el componente cargue: ideal para cargar state o consultar una api y obtener resultado que quieras mostrar en un componente.
export function loader() {
  return "Desde loader";
}

const Index = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
    </>

  )
}

export default Index
