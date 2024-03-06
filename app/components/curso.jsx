import Parrafos from '~/components/parrafos'

export default function Curso({curso}) {

  const { contenido, imagen, titulo } = curso 

  const texto = contenido.map((cont) => {
    return cont.children.map((conten) => {
        return conten.text
    })
  })


  return (
    <section className="curso">
        <style jsx="true">{`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
            }
        `}</style>
        <div className='contenedor curso-grid'>
            <div className='contenido'>
                <h2 className='heading'>{titulo}</h2>
                <p className='text'>{texto}</p>
            </div>
        </div>
    </section>
  )
}
