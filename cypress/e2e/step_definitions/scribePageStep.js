import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../../pages/scribePage.json');
import { generateValidName} from '../../support/commands.js';
import 'cypress-file-upload';

var name = generateValidName();
Given('I Access the site', () => {    
    cy.visit(Cypress.env("appUrl"));    
}); 

Then('I click on login screen signup button', () => {
    cy.get(loginPage.signUpBtn).should('be.visible').click(); 
})

Then('I click on secure pro signup button', () => {
    cy.get(loginPage.secureProSignupBtn).should('be.visible').click(); 
})

Then('I click on popup no button', () => {
    cy.get(loginPage.signupNoBtn).should('be.visible').click(); 
})

Then(/^I enter organization name "(.*)"$/, (val) => {    
    cy.get(loginPage.organizationNameTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and continue button', () => {
    cy.get(loginPage.agreeAndContinueBtn).should('be.visible').click(); 
})

Then('I click on email signup button', () => {
    cy.get(loginPage.emailSignupBtn).should('be.visible').click(); 
})

Then(/^I enter email "(.*)"$/, (val) => {    
    cy.get(loginPage.emailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter name "(.*)"$/, (val) => {    
    cy.get(loginPage.nameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter password "(.*)"$/, (val) => {    
    cy.get(loginPage.passwordTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and signup button', () => {
    cy.get('span').contains(loginPage.agreeAndSignUpBtn).should('be.visible').click(); 
})

Then('I see verify your email page', () => {
    cy.get('h1').contains(loginPage.verifyYourEmailPage).should('be.visible')
})

Then('logout user', () => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    // cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
    cy.get('button').contains(loginPage.logoutBtn).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click();
        } else {
            cy.log('Logout button is not visible');
        }
    });
    cy.wait(3000)
})

Then(/^I enter login email "(.*)"$/, (val) => {    
    cy.get(loginPage.loginEmailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter login password "(.*)"$/, (val) => {    
    cy.get(loginPage.loginPasswordTxt).should('be.visible').clear().type(val);
})

Then('I click on login button', () => {
    cy.get(loginPage.loginBtn).should('be.visible').click(); 
})

Then('I click on next button', () => {
    cy.get("span").contains(loginPage.nextBtn).should('be.visible').click(); 
})

Then('I click on proceed to payment button', () => {
    cy.get("span").contains(loginPage.proceedToPaymentBtn).should('be.visible').click(); 
})

Then(/^I enter card number "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardNumberTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card expiry "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardExpiryTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card cvc "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardCvcTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing name "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingNameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing postal code "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingPostalCodeTxt).should('be.visible').clear().type(val);
})

Then('I click on pay button', () => {
    cy.wait(5000)
    cy.switchToSystemIfram().find(loginPage.payBtn).should('be.visible').invoke('show').click();
})

Then('I click on back to dashboard button', () => {
    cy.get("span").contains(loginPage.backToDashboardBtn).should('be.visible').click(); 
})


Then('I click on upload button', () => {
    cy.wait(2000)
    // cy.get("span").contains(loginPage.uploadBtn).should('be.visible').click(); 
    cy.xpath("//span[text()=' Upload ']").should('exist').click()
    
})


Then('I click on entities', () => {
    cy.get("h2").contains(loginPage.entitiesSideNav).should('be.visible').click(); 
})

Then('I click on New entity', () => {
    cy.get("span").contains(loginPage.newEntityButton).should('be.visible').click(); 
})
Then(/^I enter Legal Name "(.*)"$/, (val) => {    
    cy.get(loginPage.organizationLegalName).should('be.visible').clear().type(val);
})
Then('I click on Save Changes', () => {
    cy.get("span").contains(loginPage.saveChanges).should('be.visible').click(); 
})

Then('I click on Add Owner', () => {
    cy.get("span").contains(loginPage.addOwnerButton).scrollIntoView().should('be.visible').click(); 
})

Then(/^I enter Phone Number "(.*)"$/, (val) => {    
    cy.get("mat-label").contains("Phone Number").scrollIntoView().should('be.visible').click();
    cy.get(loginPage.nationalPhoneNumber).should('be.visible').clear().type(val);
})

Then(/^I enter date of Birth "(.*)"$/, (val) => {    
    cy.get("mat-label").contains("Date of Birth").scrollIntoView().should('be.visible').click();
    cy.get(loginPage.openCalender).should('be.visible').clear().type(val);
})

Then('I click on Upload ID Button', () => {
    cy.get("span").contains(loginPage.uploadID).scrollIntoView().should('be.visible').click(); 
})

Then('I Upload File', () => {
    cy.wait(3000)
    cy.get(loginPage.uploadFile).invoke('removeAttr', 'hidden');
    cy.get(loginPage.uploadFile).selectFile(Cypress.env("filePath"));
    // cy.get(loginPage.uploadFile).should('have.value', Cypress.env("filePath"));  
})

Then('I select US Passport', () => {  
    cy.get(loginPage.docSelect).should('be.visible').click();
    cy.get("span").contains(loginPage.selectUSPassport).should('be.visible').click();    
})

Then(/^I enter docId Number "(.*)"$/, (val) => {    
    cy.get("mat-label").contains(loginPage.documentIDNumberTxt).should('be.visible').click()
    cy.get(loginPage.docIdNumTxt).should('be.visible').clear().type(val);
})

Then('I select state first option', () => {  
    cy.get(loginPage.stateDropdown).should('be.visible').click();
    cy.get("span").contains(loginPage.selectStateFirstOption).should('be.visible').click();    
})

Then(/^I enter street line 1 "(.*)"$/, (val) => {  
    cy.get(loginPage.streetLineTxt).last().should('be.visible').click().type(val);
})

Then(/^I enter city "(.*)"$/, (val) => {    
    cy.get(loginPage.cityTxt).last().should('be.visible').click().clear().type(val);
})

Then('I click on add owner Button', () => {
    // cy.get("span").contains(loginPage.addOwnerBtn).last().scrollIntoView().should('be.visible').click(); 
    cy.xpath(loginPage.addOwnerBtn).click()
})

Then(/^I enter first name "(.*)"$/, (val) => {    
    cy.get(loginPage.firstNameTxt).scrollIntoView().should('be.visible').click().clear().type(val);
})

Then(/^I enter last name "(.*)"$/, (val) => {    
    cy.get(loginPage.lastNameTxt).should('be.visible').click().clear().type(val);
})

Then(/^I enter second email "(.*)"$/, (val) => {    
    cy.get(loginPage.emailSecTxt).should('be.visible').click().clear().type(val);
})

Then('I click on save without sending Button', () => {
    cy.get("span").contains(loginPage.saveWithoutSendingBtn).last().scrollIntoView().should('be.visible').click(); 
    cy.wait(500)
})

Then('I click on dismiss Button', () => {
    cy.get("span").contains(loginPage.dismissBtn).should('be.visible').click(); 
})

Then('I click on manage entity back button', () => {
    cy.xpath(loginPage.manageEntityBackBtn).should('be.visible').click(); 
})



before(() => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    // cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
    cy.get('button').contains(loginPage.logoutBtn).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click();
        } else {
            cy.log('Logout button is not visible');
        }
    });
    cy.wait(3000)
  });






