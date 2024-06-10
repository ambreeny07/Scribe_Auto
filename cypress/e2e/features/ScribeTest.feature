Feature: Test End To End
    Scenario: Register as an Organization
        Given I Access the site
        Then I click on login screen signup button
        When I click on secure pro signup button
        Then I click on popup no button
        Then I enter organization name "DELETE ME"
        Then I click on agree and continue button
        Then I click on email signup button
        Then I enter email "upworktesting@securecompliance.us"
        Then I enter name "Tim Test"
        Then I enter password "Testing_12345"
        Then I click on agree and signup button
        Then I see verify your email page
        Then logout user

    Scenario: Sign In and Pay
        Given I Access the site
        Then I enter login email "upworktesting@securecompliance.us"
        Then I enter login password "Testing_12345"
        Then I click on login button
        Then I click on next button
        Then I click on proceed to payment button
        Then I enter card number "4242424242424242"
        Then I enter card expiry "05/26"
        Then I enter card cvc "213"
        Then I enter billing name "Tim"
        Then I enter billing postal code "M4B 0A3"
        Then I click on pay button
        Then I click on next button

    Scenario: Create an Entity and Add an Owner
        Given I Access the site
        Then I click on entities
        Then I click on New entity
        Then I enter Legal Name "Test Organization"
        Then I click on Save Changes
        Then I click on Add Owner
        Then I enter Phone Number "23456789098"
        Then I enter date of Birth "04/22/1999"
        Then I click on Upload ID Button
        Then I Upload File
        Then I click on upload button
        Then I select US Passport
        Then I enter docId Number "808907808"
        Then I select state first option
        Then I enter street line 1 "House 84"
        Then I enter city "New"
        Then I enter first name "Tim"
        Then I enter last name "Test"
        Then I enter second email "Test@gmail.com"
        Then I click on add owner Button
        Then I click on save without sending Button
        Then I click on save without sending Button
        Then I click on dismiss Button
        Then I click on manage entity back button