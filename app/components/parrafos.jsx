function Parrafos() {
    const texto = descripcion.map((desc) => {
        return desc.children.map((descrip) => {
            return descrip.text
        })
      })

      return texto
}

export default Parrafos
