var l=Object.defineProperty;var c=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(c(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class d extends HTMLElement{connectedCallback(){this.innerHTML=`
    <nav class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-100">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Menu</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="/public/template/tarefa/tarefa.listagem.html" class="nav-link active" aria-current="page">
              Tarefas
            </a>
          </li>
          <li style="display:none;">
            <a href="#" class="nav-link text-white">
              Contatos
            </a>
          </li>
        </ul>
        <hr>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://avatars.githubusercontent.com/u/82339940?v=4" alt="" width="32" height="32"
              class="rounded-circle me-2">
            <strong>Marcos Lima</strong>
          </a>
        </div>
      </nav>
    `}}function u(){var r=document.createElement("link");r.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"),r.setAttribute("rel","stylesheet"),r.setAttribute("integrity","sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"),r.setAttribute("crossorigin","anonymous"),document.head.appendChild(r);var e=document.createElement("script");e.setAttribute("defer",""),e.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"),e.setAttribute("integrity","sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"),e.setAttribute("crossorigin","anonymous"),document.head.appendChild(e);var t=document.createElement("script");t.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"),t.setAttribute("rel","stylesheet"),document.head.appendChild(t);var i=document.createElement("script");i.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"),i.setAttribute("defer",""),document.head.appendChild(i)}customElements.define("my-header",d);u();class h{constructor(){o(this,"tarefas");o(this,"storage");this.storage=localStorage,this.tarefas=this.listarTodos()}gravar(){const e=JSON.stringify(this.tarefas);this.storage.setItem("tarefas",e)}inserir(e){this.tarefas.push(e),this.gravar()}editar(e){let t=this.tarefas.findIndex(i=>i.id===e.id);this.tarefas[t]=e,this.gravar()}excluir(e){this.tarefas=this.tarefas.filter(t=>t.id!==e),this.gravar()}listarTodos(){const e=this.storage.getItem("tarefas");return e?JSON.parse(e):[]}selecionarPorId(e){return this.tarefas.filter(t=>t.id===e)[0]||null}}export{h as R};
