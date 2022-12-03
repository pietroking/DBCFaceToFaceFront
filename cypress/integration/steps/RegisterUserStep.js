/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterUserPage from "../pages/RegisterUserPage"
const registerUserPage = new RegisterUserPage;

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Usuario', () => {
    it('Validar criar usuario com sucesso', () => {
        dashboardPage.registerUserPage();
        registerUserPage.criarCandidatoCorretamente();
    });

    it('Validar criar usuario sem preencher campos', () => {
        dashboardPage.registerUserPage();
        registerUserPage.criarCandidatoSemPreencherCampos();
    });
})
