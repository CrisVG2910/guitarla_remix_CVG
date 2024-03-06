import { Link } from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers';

export default function Post({post}) {

  const {contenido, imagen, titulo, url, publishedAt} = post

  const texto = contenido.map((cont) => {
    return cont.children.map((conten) => {
        return conten.text
    })
  })

  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='resumen'>{texto}</p>
            <Link className='enlace' to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

