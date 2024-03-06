import { useLoaderData } from '@remix-run/react' 
import { getPosts } from '~/models/posts.server'
import styles from '~/styles/blog.css'
import ListadoPosts from '~/components/listado-posts'

export function meta({data}) {
  return (
      [
          {title: 'GuitarLA - Nuestro Blog'},
          {descripcion: 'Blog, ver blogs, blog'}
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

export async function loader() {
    const posts = await getPosts()

    return posts.data
}

function Blog() {
  const posts = useLoaderData()

    return (
      <main className="contenedor">
        <ListadoPosts
          posts={posts}
        />

      </main>
    )
  }
  
  export default Blog
  