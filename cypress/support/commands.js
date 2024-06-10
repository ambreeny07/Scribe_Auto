
 
export function generateValidName() {
  // Function to generate a random first name
  function generateRandomName() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 8) + 3; // Random length between 3 and 10 characters
    let name = '';
    for (let i = 0; i < length; i++) {
      name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    name = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize first letter
    return name;
  }

  // Function to add apostrophes and hyphens randomly
  function addSpecialCharacters(name) {
    const specialChars = ["'", '-'];
    const numSpecialChars = Math.floor(Math.random() * 3); // Random number of special characters (0-2)
    for (let i = 0; i < numSpecialChars; i++) {
      const randomIndex = Math.floor(Math.random() * (name.length + 1)); // +1 to allow insertion at the end
      const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
      name = name.slice(0, randomIndex) + specialChar + name.slice(randomIndex);
    }
    return name;
  }
  
  // Call addSpecialCharacters with a random name and return the result
  const value = addSpecialCharacters(generateRandomName());
  return generateRandomName();
}

Cypress.Commands.add('switchToSystemIfram', () => {
  return cy
  .get("iframe[name='embedded-checkout']")
  .eq(0)
  .its("0.contentDocument.body")
  .should("not.be.empty")
  .then(cy.wrap);
})