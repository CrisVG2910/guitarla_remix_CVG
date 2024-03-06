import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return (
      [
          {title: 'GuitarLA - Sobre Nosotros'},
          {description: 'Venta de guitarras, blog de música'},
      ]
  )
}

export function links() {
  return [
      {
          rel: 'stylesheet',
          href: styles
      },
      {
          rel: 'preload',
          href: imagen,
          as: 'image'
      }
  ]
}

function Nosotros() {

    return (
      <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />

          <div>
            <p>Quisque id libero vitae neque pellentesque semper. Integer sed eleifend arcu. Aenean dictum eleifend erat nec egestas. 
              Donec faucibus, lacus ac sagittis interdum, leo nibh condimentum magna, porta dictum mi odio id tortor. Pellentesque 
              justo velit, rutrum sit amet nunc eu, luctus ornare turpis. Praesent magna erat, vulputate fringilla tempus sed, convallis id eros. 
              Vivamus posuere rutrum orci, ut vulputate nunc scelerisque sed. Vivamus consectetur vitae est non tristique. </p>

            <p>Quisque id libero vitae neque pellentesque semper. Integer sed eleifend arcu. Aenean dictum eleifend erat nec egestas. 
              Donec faucibus, lacus ac sagittis interdum, leo nibh condimentum magna, porta dictum mi odio id tortor. Pellentesque 
              justo velit, rutrum sit amet nunc eu, luctus ornare turpis. Praesent magna erat, vulputate fringilla tempus sed, convallis id eros. 
              Vivamus posuere rutrum orci, ut vulputate nunc scelerisque sed. Vivamus consectetur vitae est non tristique. </p>
          </div>
        </div>
      </main>
    )
  }
  
  export default Nosotros
  