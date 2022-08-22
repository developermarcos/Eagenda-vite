var v=Object.defineProperty;var E=(n,e,t)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(E(n,typeof e!="symbol"?e+"":e,t),t);import"./modulepreload-polyfill.c7c6310f.js";import{R as x}from"./repositorio.localStorage.tarefa.590dd875.js";class p{constructor(e,t){i(this,"id");i(this,"titulo");i(this,"concluido");this.titulo=e,this.concluido=t}}class S{geradorNovoId(){const e=Date.now().toString(26),t=Math.random().toString(36).substring(2,8);return`${e}-${t}`}}class y{constructor(){i(this,"id");this.id=new S().geradorNovoId()}}class B extends y{constructor(){super();i(this,"prioridade");i(this,"titulo");i(this,"dataInicio");i(this,"dataTermino");i(this,"itens");this.itens=[]}calcularPercentualConclusaoItens(){if(!this.itens||this.itens.length==0)return 0;let t=this.itens.length,a=0;return this.itens.forEach(o=>{o.concluido==!0&&a++}),t/a*100}}var g=(n=>(n.Baixa="Baixa",n.Media="Media",n.Alta="Alta",n))(g||{});class L{constructor(e,t){i(this,"tarefa");i(this,"repositorio");i(this,"paginaListagem","/public/template/tarefa/tarefa.listagem.html");i(this,"idSelecionado");i(this,"selectPrioridade");i(this,"titulo");i(this,"dataInicio");i(this,"dataConclusao");i(this,"ulItensAdicionados");this.repositorio=e,this.idSelecionado=t,this.configurarTela(),t?(this.tarefa=this.repositorio.selecionarPorId(t),this.tarefa||(window.location.href=this.paginaListagem)):this.tarefa=new B,this.atualizarTela()}configurarTela(){this.preencherPrioridades(),this.configurarEventos()}atualizarTela(){this.selectPrioridade=document.querySelector("select"),this.selectPrioridade.value=this.tarefa.prioridade?this.tarefa.prioridade:this.selectPrioridade.value,this.titulo=document.getElementById("titulo"),this.titulo.value=this.tarefa.titulo?this.tarefa.prioridade:"",this.dataInicio=document.getElementById("data-inicio");const e=this.tarefa.dataInicio?new Date(this.tarefa.dataInicio).toISOString().substring(0,10):"";this.dataInicio.value=e!=""?e:"",this.dataConclusao=document.getElementById("data-conclusao");const t=this.tarefa.dataTermino?new Date(this.tarefa.dataTermino).toISOString().substring(0,10):"";this.dataConclusao.value=t!=""?t:"",this.tarefa.itens&&this.tarefa.itens.forEach(a=>{this.adicionarItem(a),this.adicionarEventoUltimoBotao()})}preencherPrioridades(){this.selectPrioridade=document.querySelector("select"),Object.getOwnPropertyNames(g).forEach(t=>{var o;const a=document.createElement("option");a.value=t,a.innerText=t,(o=this.selectPrioridade)==null||o.append(a)})}configurarEventos(){const e=document.getElementById("btn-adicionar-item"),t=document.querySelector("form");t==null||t.addEventListener("submit",a=>{a.preventDefault(),this.salvar()}),e==null||e.addEventListener("click",a=>{a.preventDefault();let o=document.getElementById("input-adicionar-item");const s=new p(o.value);this.adicionarItem(s),this.adicionarEventoUltimoBotao()})}adicionarEventoUltimoBotao(){const e=document.getElementsByClassName("excluir-itens-tarefa");let t=e[e.length-1];t.addEventListener("click",a=>{a.preventDefault(),this.removerItemHtml(t.value)})}adicionarItem(e){const t=this.gerarNovoItemHtml(e);this.ulItensAdicionados=document.getElementById("itens-adicionados"),this.ulItensAdicionados.append(t)}gerarNovoItemHtml(e){const t=document.createElement("li");["list-group-item","d-flex","justify-content-between","align-items-center"].forEach(l=>{t.classList.add(l)});const o=document.createElement("div");o.classList.add("d-flex"),o.classList.add("gap-1");const s=document.createElement("input");s.classList.add("form-check-input"),s.classList.add("gap-1"),s.classList.add("me-1"),s.setAttribute("type","checkbox"),s.setAttribute("value",e.titulo),s.checked=e.concluido?e.concluido:!1,o.append(s),console.log(s),o.append(e.titulo);const r=`<button class="btn btn-danger excluir-itens-tarefa" value="${e.titulo}"> <i class="fa-solid fa-trash-can"></i> </button>`;return t.append(o),t.innerHTML+=r,t}removerItemHtml(e){var s;if(!e)return;const t=document.getElementById("itens-adicionados");let a=t.getElementsByTagName("li"),o=[];for(let r=0;r<a.length;r++)((s=a[r].querySelector("input"))==null?void 0:s.value)!==e&&o.push(a[r]);t.innerHTML="",o.forEach(r=>{t.append(r)})}salvar(){var s,r,l,h,m,f;const e=this.ulItensAdicionados.getElementsByTagName("input"),t=[];if(e)for(let d=0;d<e.length;d++){const c=e[d].value,u=e[d].checked;let I=new p(c,u);t.push(I)}let a=[];(r=(s=this.selectPrioridade)==null?void 0:s.options[this.selectPrioridade.selectedIndex])!=null&&r.value||a.push("Campo 'Prioridade' \xE9 obrigat\xF3rio!"),(l=this.titulo)!=null&&l.value||a.push("Campo 'T\xEDtulo' \xE9 obrigat\xF3rio!");let o=Date.parse(this.dataInicio.value);if(isNaN(o)&&a.push("Campo 'Data in\xEDcio' \xE9 obrigat\xF3rio!"),a.length>0){(h=document.getElementById("mensagem"))==null||h.classList.remove("d-none"),a.forEach(d=>{var u;let c=document.createElement("p");c.innerText=d,(u=document.getElementById("mensagem"))==null||u.append(c)});return}(m=document.getElementById("mensagem"))==null||m.classList.add("d-none"),this.tarefa.titulo=this.titulo.value,this.tarefa.prioridade=(f=this.selectPrioridade)==null?void 0:f.options[this.selectPrioridade.selectedIndex].value,this.tarefa.dataInicio=new Date(this.dataInicio.value),Date.parse(this.dataConclusao.value)&&(this.tarefa.dataTermino=new Date(this.dataConclusao.value)),this.tarefa.itens=[],t.forEach(d=>{var c;(c=this.tarefa.itens)==null||c.push(d)}),this.idSelecionado?this.repositorio.editar(this.tarefa):this.repositorio.inserir(this.tarefa),document.location.href="./tarefa.listagem.html"}}const b=new URLSearchParams(window.location.search);let T=b.get("id");new L(new x,T);
