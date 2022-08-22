import _ from "lodash";
const titulo = document.getElementById('titulo') as HTMLHeadingElement;
const btnFormatar = document.getElementById('btn-formatar') as HTMLButtonElement;

btnFormatar.addEventListener('click', ()=>{
  titulo.innerText = _.capitalize(titulo.innerText);
})