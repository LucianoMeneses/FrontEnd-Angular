import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Angular';

  usuario = {login: '', senha: ''};

  public login(){

    console.log("teste login"+ this.usuario.login)
  }
}
