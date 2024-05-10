describe('Тестирование формы авторизации', function () {

    it('правильный логин и пароль', function () {
       cy.visit('SITE');
       cy.get('#mail').type('USER_LOGIN');
       cy.get('#pass').type('USER_PASSWORD');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('проверка восстановления пароля', function () {
        cy.visit('SITE');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('USER_LOGIN');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('правильный логин и неправильный пароль', function () {
        cy.visit('SITE');
        cy.get('#mail').type('USER_LOGIN ');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })  

    it('неправильный логин и правильный пароль', function () {
        cy.visit('SITE');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })  

    it('проверка на валидацию', function () {
            cy.visit('SITE');
            cy.get('#mail').type('USER_LOGIN');
            cy.get('#pass').type('USER_PASSWORD');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })
    
    it('независимость от регистра', function () {
        cy.visit('SITE');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })
})
