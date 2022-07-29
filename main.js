const gameArea = document.querySelector('#gameArea')
const btnDimension = document.querySelector('#dimension')
const btnClear = document.querySelector('#clear')
let size = 6;
for(i=1; i<=size; i++) {
  let square = document.createElement('div')
  square.setAttribute('class', 'coluna')
  square.setAttribute('id', `coluna${i}`)
  gameArea.appendChild(square)
  let coluna = document.querySelector(`#coluna${i}`)
  for(e=1; e<=size; e++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'linha')
    square.setAttribute('id', `linha${e}`)
    square.innerText = e
    coluna.appendChild(square)
  }
}

//para colorir no hover do mouse
const quadrados = document.querySelectorAll('.linha');
quadrados.forEach(quadrado => {
  quadrado.addEventListener('mouseover', () => {
    quadrado.setAttribute('style', 'background-color: red;')
  })
})

//botao para limpar - recarrega a pagina
btnClear.addEventListener('click', () => {
  btnClear.setAttribute('style', 'background-color: white;')
  window.location.reload()
})