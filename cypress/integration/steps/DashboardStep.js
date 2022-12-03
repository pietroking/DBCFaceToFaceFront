/// <reference types="cypress" />

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Dashboard', () => {
    it('teste', () => {
        
    });
})