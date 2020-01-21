// function mensagemWhatsapp(mensagemWhatsapp) {

//     var celular = "5521996302949";

//     var texto = document.getElementById("textoWhatsapp").value;
//     texto = window.encodeURIComponent(texto);

//     window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
//     //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
// }

import $ from "jquery"
export default class Api_whatsapp {

    constructor() {
        $('.fab').on('click', (e) =>{
            this.disparo(e)
        });
    }

    disparo(event) {
        var telefone = $(event.target).closest('tr').find('.telefone').html()
         telefone = telefone.replace('(','')
         telefone = telefone.replace(')','')
         telefone = telefone.replace('-','').trim()
        console.log(telefone)
        // window.open("https://api.whatsapp.com/send?phone=" + 55+telefone);
        window.open('https://web.whatsapp.com/send?phone=55%3Cfont+style%3D%22verticalalign%3A+inherit%3B%22%3E%3Cfont+style%3D%22vertical-align%3A+inherit%3B%22%3E' + telefone + '%3C%2Ffont%3E%3C%2Ffont%3E&text=Testando Api do whatsapp');

    }
}

new Api_whatsapp