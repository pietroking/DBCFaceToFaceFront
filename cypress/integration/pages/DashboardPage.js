import BasePage from "./BasePage";
const basePage = new BasePage();

let candidatosBtn = "#button-candidates-home"
let usuariosBtn = "#button-users-home"
let searchBar = "#input-search-home"
let trilhaFilterSelect = "#select-edition"
let advanceBtn = "#change-page-home > ul > li:nth-last-child(1) > button"
let backButton = "#change-page-home > ul > li:nth-child(1) > button"
let searchBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-7fk3ng > div > div.MuiFormControl-root.MuiTextField-root.css-dlwbzx > div > div > button"
let resetSearch = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-7fk3ng > button"
let marcarEntrevistaCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-w56oqh > button"
let deleteCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-hjd0cx > button:nth-child(2)"
let editCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-hjd0cx > button:nth-child(1)"
let reviewCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-hjd0cx > button:nth-child(1)"
let campoNome = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(2) > p.MuiTypography-root.MuiTypography-body1.css-s3phq"
let campoEmail = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > p.MuiTypography-root.MuiTypography-body1.css-s2wgzw"
let campoTrilha = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > p.MuiTypography-root.MuiTypography-body1.css-6h9k0t"
let campoNota = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > p.MuiTypography-root.MuiTypography-body1.css-ubvr7p"
let dashCandidate = "#button-candidates-home"
let dashUser = "#button-users-home"
let homeBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(1)"
let registerUserBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(2)"
let registerCandidateBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(3)"
let registerInterviewBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(4)"
let scheduleBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(5)"
let changePasswordBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(6)"
let urlRegisterUser = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/register-user'
let urlRegisterCandidate = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/register-candidate'
let urlRegisterInterview = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/register-interview'
let urlSchedule = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/schedule'
let urlChangePassword = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/change-password'
let urlLogin = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front'
let logoutBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(7)"
let msgUserLogar = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-16vpxei > p"
let tostify = ".Toastify__toast-body > :nth-child(2)"

export default class DashboardPage extends BasePage {

    validarNomeUser(nome){
        basePage.validarText(msgUserLogar, `Olá, ${nome}`)
    }

    homePage(){
        basePage.click(homeBtn)
    }

    schedulePage(){
        basePage.click(scheduleBtn)
    }

    registerUserPage(){
        basePage.click(registerUserBtn)
    }

    registerCandidatePage(){
        basePage.click(registerCandidateBtn)
    }

    registerInterviewPage(){
        basePage.click(registerInterviewBtn)
    }

    changePasswordPage(){
        basePage.click(changePasswordBtn)
    }

    logout(){
        basePage.click(logoutBtn)
    }


}