/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterCandidatePage from "../pages/ResgisterCandidatePage"
const registerCandidatePage = new RegisterCandidatePage;

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Candidato', () => {
    it('Validar criar candidato com sucesso', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
    });

    it('Validar criar candidato sem preencher campos', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoSemPreencherCampos();
    });
})