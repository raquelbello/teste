import { Component } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Keyboard } from '@capacitor/keyboard';
import { Router } from '@angular/router';  
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private screenOrientation: ScreenOrientation,
    private router: Router 
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      .then(() => {
        console.log('Tela travada em retrato');
      })
      .catch((error) => {
        console.log('Erro ao travar a orientação: ', error);
      });
  }

  ionViewDidEnter() {
    Keyboard.addListener('keyboardWillShow', () => {
      document.body.classList.add('keyboard-is-open');
    });

    Keyboard.addListener('keyboardWillHide', () => {
      document.body.classList.remove('keyboard-is-open');
    });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);  
  }

  async loginWithGoogle() {
    try {
      const result = await GoogleAuth.signIn();
      console.log('Usuário logado:', result);
    } catch (error) {
      console.error('Erro ao logar com o Google', error);
    }
  }
  
}

