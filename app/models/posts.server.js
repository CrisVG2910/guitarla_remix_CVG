

export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json()

    
}

export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen&url=${url}`);
    const resultado = await respuesta.json();
    return resultado;
  }