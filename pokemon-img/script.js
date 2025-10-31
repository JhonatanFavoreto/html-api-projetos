const img = document.createElement('img');
document.getElementById('imagem').appendChild(img);

async function buscarPokemon() {
  const input = document.getElementById('nome').value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    console.log(data.name);
    img.src = data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}
