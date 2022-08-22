class Login{
  inputLogin : HTMLInputElement;
  inputPasswd : HTMLInputElement;
  btnLogin : HTMLButtonElement;
  paginaRedirect = "tarefa/tarefa.listagem.html";
  constructor(){
    this.inputLogin = document.getElementById('input-login') as HTMLInputElement;
    this.inputPasswd = document.getElementById('input-passwd') as HTMLInputElement;
    this.btnLogin = document.getElementById('btn-login') as HTMLButtonElement;

    this.btnLogin?.addEventListener('click', (_evt)=>{
      this.logar();
    });
  }
  logar() {
    console.log("login");
    if(!this.inputLogin && !this.inputPasswd)
      return;

    if(this.inputLogin.value === 'admin' && this.inputPasswd.value === 'admin'){
      window.location.href = this.paginaRedirect;
    }
  }
}
new Login();