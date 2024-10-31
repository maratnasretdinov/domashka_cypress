describe('Логин и пароль', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввел правильный логин в инпут
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль в инпут
        cy.get('#loginButton').click(); //клик по кнопке 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка наличия подтверждения успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
        cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние    
  
    })

 
})
// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
