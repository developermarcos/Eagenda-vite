var i=Object.defineProperty;var n=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var r=(s,t,e)=>(n(s,typeof t!="symbol"?t+"":t,e),e);class o extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `}}function l(){var s=document.createElement("link");s.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"),s.setAttribute("rel","stylesheet"),s.setAttribute("integrity","sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"),s.setAttribute("crossorigin","anonymous"),document.head.appendChild(s);var t=document.createElement("script");t.setAttribute("defer",""),t.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"),t.setAttribute("integrity","sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"),t.setAttribute("crossorigin","anonymous"),document.head.appendChild(t);var e=document.createElement("script");e.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"),e.setAttribute("rel","stylesheet"),document.head.appendChild(e);var a=document.createElement("script");a.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"),a.setAttribute("defer",""),document.head.appendChild(a)}customElements.define("my-header",o);l();class c{constructor(){r(this,"tarefas");r(this,"storage");this.storage=localStorage,this.tarefas=this.listarTodos()}gravar(){const t=JSON.stringify(this.tarefas);this.storage.setItem("tarefas",t)}inserir(t){this.tarefas.push(t),this.gravar()}editar(t){let e=this.tarefas.findIndex(a=>a.id===t.id);this.tarefas[e]=t,this.gravar()}excluir(t){this.tarefas=this.tarefas.filter(e=>e.id!==t),this.gravar()}listarTodos(){const t=this.storage.getItem("tarefas");return t?JSON.parse(t):[]}selecionarPorId(t){return this.tarefas.filter(e=>e.id===t)[0]||null}}export{c as R};
