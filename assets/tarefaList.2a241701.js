var d=Object.defineProperty;var u=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import"./modulepreload-polyfill.c7c6310f.js";import{R as p}from"./repositorio.localStorage.tarefa.590dd875.js";class m{constructor(e){c(this,"linkCadastro","./tarefa.cadastrar.html");c(this,"repositorio");this.repositorio=e,this.configurarTela(),this.atualizarTabela()}atualizarTabela(){this.atualizarBodyTabela(this.mapeadorObjeto())}configurarTela(){const e=document.getElementById("cadastrar-link");e.href=this.linkCadastro,this.atualizarHeadTabela(this.mapeadorObjeto())}mapeadorObjeto(){let e=new Map;return e.set("prioridade","Prioridade"),e.set("titulo","T\xEDtulo"),e.set("dataInicio","Abertura"),e.set("dataTermino","Data termino"),e}atualizarHeadTabela(e){const t=document.querySelector("table"),a=document.createElement("thead"),o=a==null?void 0:a.insertRow();for(var[r]of e){let n=document.createElement("th");n.append(r),o.append(n)}let i=document.createElement("th");i.innerText="A\xE7\xF5es",o.append(i),t.append(a)}atualizarBodyTabela(e){const t=document.querySelector("table");let a=document.createElement("tbody");this.repositorio.listarTodos().forEach(r=>{const i=a==null?void 0:a.insertRow();for(var[n]of e){let l=Object.getOwnPropertyDescriptor(r,n);(i==null?void 0:i.insertCell()).append(l==null?void 0:l.value)}this.configurarAcoes(i,r)}),t==null||t.append(a)}configurarAcoes(e,t){let a=e.insertCell();a.classList.add("gap-2"),a.classList.add("d-flex");const o=document.createElement("a");o.classList.value="btn btn-success",o.href=`${this.linkCadastro}?id=${t.id}`,o.setAttribute("value",t.id),o.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',a.append(o);const r=document.createElement("button");r.classList.value="btn btn-danger",r.setAttribute("id",t.id),r.innerHTML='<i class="fa-solid fa-trash-can">',r.addEventListener("click",i=>{confirm(`Deseja realmente excluir o registro '${t.titulo}'`)&&(this.repositorio.excluir(t.id),window.location.reload())}),a.append(r)}}new m(new p);
