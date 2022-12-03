import BasePage from "./BasePage";
const basePage = new BasePage();

let msgSenhaAtual = "#error-actual-password-change-password"
let msgSenhaNova = "#error-new-password-change-password"
let confirmBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-mu8cmu > div > button"
let tostify = ".Toastify__toast-body > :nth-child(2)"

export default class ChangePasswordPage extends BasePage {
    trocarSenhaSemPreencherCampos(){
        basePage.click(confirmBtn)
        basePage.validarText(msgSenhaAtual, "Senha antiga é obrigatória")
        basePage.validarText(msgSenhaNova, "Campo obrigatório")
        // basePage.validarText(tostify, "Senha informada deve ser igual à senha atual!")
    }
}