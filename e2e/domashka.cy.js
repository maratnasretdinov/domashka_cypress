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

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').click(); //клик по кнопке восстановления пароля
        cy.get('#mailForgot').type('pochtan@dolnikov.ru'); // ввел почту в инпут
        cy.get('#restoreEmailButton').click(); //клик по кнопке отправки запроса на восстановление
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка отправки сообщения для восстановления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
        cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние       
   
    })

    it('Неверный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввел правильный логин в инпут
         cy.get('#pass').type('iLoveqastudio111'); // ввел неправильный пароль в инпут
         cy.get('#loginButton').click(); //клик по кнопке 
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка наличия ожидаемого ответа
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
         cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние        
   
     })    
     
     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('merman@dolnikov.ru'); // ввел неправильный логин в инпут
        cy.get('#pass').type('iLoveqastudio1'); // ввел  правильный пароль в инпут
        cy.get('#loginButton').click(); //клик по кнопке 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка наличия ожидаемого ответа
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
        cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние        
  
    })

    it('Верный пароль и неверный логин (без @)', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('mermandolnikov.ru'); // ввел невалидный логин в инпут
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль в инпут
        cy.get('#loginButton').click(); //клик по кнопке 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка наличия ожидаемого ответа
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
        cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние        
  
    })

    it('Проверка наличия строчных букв', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввел правильный логин в инпут строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль в инпут
        cy.get('#loginButton').click(); //клик по кнопке 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка наличия подтверждения успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видно
        cy.get('#exitMessageButton > .exitIcon').click() // клик по крестику, чтобы вернуться в исходное состояние    
   
    })
 
})
// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
