// ***********************************************
// Custom Commands
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Overwrites cypress visit command to accept a version (V1/2)
// and navigate to the corresponding version
Cypress.Commands.overwrite("visit", (originalFn, version, options) => {
  //check if a version is specified else use the appVersion env
  const appVersion = Cypress.env("appVersion");

  version = version ? version : appVersion;

  const url =
    version === "V1" ? "/gridHackathonV1.html" : "/gridHackathonV2.html";

  // originalFn is the existing `visit` command that you need to call
  // and it will receive whatever you pass in here.
  //
  // make sure to add a return here!
  return originalFn(url, options);
});

// Hackathon custom reporter
Cypress.Commands.add(
  "hackathonReporter",
  (task, testName, selectorOrElement, comparisonResult) => {
    const appVersion = Cypress.env("appVersion");
    const device = Cypress.env("device");
    const resultsFileName = `Traditional-${appVersion}-TestResults.txt`;
    const viewport = `${Cypress.config().viewportWidth}x${
      Cypress.config().viewportHeight
    }`;
    const browser = Cypress.browser.name;
    let domElement = Cypress.$(selectorOrElement);
    let domId = domElement[0].id;

    cy.writeFile(
      resultsFileName,
      `Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${
        comparisonResult ? "Pass" : "Fail"
      }\n`,
      {
        flag: "a+",
      }
    );
  }
);

// Command to assert and report that an element is displayed
Cypress.Commands.add(
  "assertIsDisplayedAndRecordResults",
  (task, testName, selectorOrElement) => {
    let domElement = Cypress.$(selectorOrElement);
    let displayed = Cypress.dom.isVisible(domElement);
    cy.hackathonReporter(task, testName, selectorOrElement, displayed).then(() =>
      expect(displayed).to.be.equal(true)
    );
  }
);

// Command to assert and report that an element is NOT displayed
Cypress.Commands.add(
  "assertIsNotDisplayedAndRecordResults",
  (task, testName, selectorOrElement) => {
    let domElement = Cypress.$(selectorOrElement);
    let notDisplayed = !Cypress.dom.isVisible(domElement);
    cy.hackathonReporter(task, testName, selectorOrElement, notDisplayed).then(() =>
      expect(notDisplayed).to.be.equal(true)
    );
  }
);

// Command to assert and report the number of elements matches the expected length
Cypress.Commands.add(
  "assertLengthAndRecordResults",
  (task, testName, selectorOrElement, expectedLength) => {
    let domElement = Cypress.$(selectorOrElement);
    let lengthComparison = expectedLength == domElement.length;
    domElement.each((i, element) => {
      cy.hackathonReporter(
        task,
        `${testName} - ${i}`,
        element,
        lengthComparison
      ).then(() => expect(lengthComparison).to.be.equal(true));
    });
  }
);

// Command to assert and report that the actual value is true
Cypress.Commands.add(
  "assertIsTrueAndRecordResults",
  (task, testName, selectorOrElement, actualResults) => {
    let comparisonValue = actualResults === true;
    cy.hackathonReporter(
      task,
      testName,
      selectorOrElement,
      comparisonValue
    ).then(() => expect(comparisonValue).to.be.equal(true));
  }
);

// Command to assert and report that the actual value includes the expected value
Cypress.Commands.add(
  "assertIsIncludedAndRecordResults",
  (task, testName, selectorOrElement, actualValue, expectedValue) => {
    let comparisonValue = actualValue.includes(expectedValue);
    cy.hackathonReporter(
      task,
      testName,
      selectorOrElement,
      comparisonValue
    ).then(() => expect(actualValue).to.includes(expectedValue));
  }
);
