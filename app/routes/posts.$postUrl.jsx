import { useLoaderData } from '@remix-run/react' 
import { getPost } from '~/models/posts.server'
import styles from '~/styles/blog.css'
import { formatearFecha } from '~/utils/helpers';

export function meta({data}) {
  return (
      [
          {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
          {descripcion: `Posts, ver post, post ${data.data[0].attributes.titulo}`}
      ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({request, params}) {

  const { postUrl } = params

  const post = await getPost( postUrl )

  if(post.data.lenght === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  
  return post
}

export default function Post() {

    const post = useLoaderData()
    const { titulo, imagen, contenido, publishedAt } = post.data[0].attributes

    const texto = contenido.map((cont) => {
        return cont.children.map((conten) => {
            return conten.text
        })
      })

    return (
      <main className='contenedor post mt-5'>
        <img className="imagen" src={imagen.data.attributes.url} alt={`imagen post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='text'>{texto}</p>
        </div>
      </main>
    )
  }
  