let gameArea = document.querySelector('#gameArea')


for(i=1; i<=16; i++) {
  let square = document.createElement('div')
  square.setAttribute('class', 'coluna')
  square.setAttribute('id', `coluna${i}`)
  square.innerText = i
  gameArea.appendChild(square)
  let coluna = document.querySelector(`#coluna${i}`)
  for(e=1; e<=16; e++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'linha')
    square.setAttribute('id', `linha${e}`)
    square.innerText = e
    coluna.appendChild(square)
  }
}