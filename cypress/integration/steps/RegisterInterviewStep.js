/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterInterviewPage from "../pages/RegisterInterviewPage"
const registerInterviewPage = new RegisterInterviewPage;

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Entrevista', () => {
    it('Validar criar entrevista com sucesso', () => {
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCorretamente();
    });

    it('Validar criar entrevista sem preencher campos', () => {
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaSemPreencherCampos();
    });
})