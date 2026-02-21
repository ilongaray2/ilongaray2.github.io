// script.js — controles simples: aumentar/diminuir fonte e alternar contraste
(function(){
const aumentar = document.getElementById('aumentarFonte')
const reduzir = document.getElementById('reduzirFonte')
const contraste = document.getElementById('contraste')
const root = document.documentElement


function getFont(){
const v = parseFloat(getComputedStyle(root).fontSize) || 18
return v
}
function setFont(px){
root.style.fontSize = px + 'px'
}


aumentar.addEventListener('click', ()=>{
const v = Math.min(getFont() + 2, 28)
setFont(v)
})
reduzir.addEventListener('click', ()=>{
const v = Math.max(getFont() - 2, 14)
setFont(v)
})


contraste.addEventListener('click', ()=>{
  const body = document.body
  const ativo = body.classList.toggle('high-contrast')

  contraste.setAttribute('aria-pressed', ativo ? 'true' : 'false')
  contraste.textContent = ativo ? '🌙 Escuro' : '☀️ Claro'
  contraste.setAttribute(
    'aria-label',
    ativo ? 'Desativar modo escuro' : 'Ativar modo escuro'
  )
})


// acessibilidade: permitir aumentar fonte com teclado (Ctrl + +) — simples
window.addEventListener('keydown', (e)=>{
if((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')){
e.preventDefault(); aumentar.click()
}
if((e.ctrlKey || e.metaKey) && e.key === '-'){
e.preventDefault(); reduzir.click()
}
})
})();