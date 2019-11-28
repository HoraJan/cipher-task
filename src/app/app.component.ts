import { Component } from '@angular/core';

@Component({
  selector: 'cipher-app',
  template: `
            <shift></shift>
            <div class="inputArea">
              <plaintext></plaintext>
              <ciphertext></ciphertext>
            </div>
            `
})
export class AppComponent { }
