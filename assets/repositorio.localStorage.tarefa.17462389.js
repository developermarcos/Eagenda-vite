var l=Object.defineProperty;var c=(s,t,e)=>t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);class d extends HTMLElement{connectedCallback(){this.innerHTML=`
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
          <li>
            <a href="../" class="nav-link text-white">
              Sair
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
    `}}function h(){const s=document.createElement("meta");s.setAttribute("charset","UFT-8"),document.head.appendChild(s);const t=document.createElement("meta");t.setAttribute("http-equiv","X-UA-Compatible"),t.setAttribute("content","IE=edge"),document.head.appendChild(t);const e=document.createElement("meta");e.setAttribute("name","viewport"),e.setAttribute("content","width=device-width, initial-scale=1.0"),document.head.appendChild(e);const a=document.createElement("link");a.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"),a.setAttribute("rel","stylesheet"),a.setAttribute("integrity","sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"),a.setAttribute("crossorigin","anonymous"),document.head.appendChild(a);const r=document.createElement("script");r.setAttribute("defer",""),r.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"),r.setAttribute("integrity","sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"),r.setAttribute("crossorigin","anonymous"),document.head.appendChild(r);const i=document.createElement("script");i.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"),i.setAttribute("rel","stylesheet"),document.head.appendChild(i);const n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"),n.setAttribute("defer",""),document.head.appendChild(n)}customElements.define("my-header",d);h();class u{constructor(){o(this,"tarefas");o(this,"storage");this.storage=localStorage,this.tarefas=this.listarTodos()}gravar(){const t=JSON.stringify(this.tarefas);this.storage.setItem("tarefas",t)}inserir(t){this.tarefas.push(t),this.gravar()}editar(t){let e=this.tarefas.findIndex(a=>a.id===t.id);this.tarefas[e]=t,this.gravar()}excluir(t){this.tarefas=this.tarefas.filter(e=>e.id!==t),this.gravar()}listarTodos(){const t=this.storage.getItem("tarefas");return t?JSON.parse(t):[]}selecionarPorId(t){return this.tarefas.filter(e=>e.id===t)[0]||null}}export{u as R};
