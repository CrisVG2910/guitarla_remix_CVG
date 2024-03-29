import { Link } from '@remix-run/react'
export default function Guitarra({guitarra}) {

  const { descripcion, imagen, precio, url, nombre } = guitarra

  const texto = descripcion.map((desc) => {
    return desc.children.map((descrip) => {
        return descrip.text
    })
  })

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`}/>
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{texto}</p>
        <p className="precio">${precio}</p>

        <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}


