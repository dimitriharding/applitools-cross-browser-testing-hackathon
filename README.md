<p align="center">
    <img src="https://seetyah.s3.amazonaws.com/applittools-cross-browser-hackathon.png" alt="Logo" width="100%" height="100%"/>
  <h3 align="center">Applitools Cross Browser Testing Hackathon</h3>
  <p align="center">Automated tests in traditional approach using Cypress and the Modern approach through Visual AI using Applitools.</p>
</p>

___

## Table of Contents

- [About the Project](#about-the-project)
  - [Tools](#tools)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Test Results](#test-results)
  - [Modern](#modern)
  - [Traditional](#traditional)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Imagine you are a test automation engineer for “AppliFashion”, a high profile e-commerce company that sells fancy shoes. The AppliFashion web app is used by millions of people, using various devices and browsers to buy shoes. The 1st version of the app (V1) is already built and is “bug-free”. Your developers are now coming up with a newer version, version (V2) of the app, and assume that it’s full of bugs.

The challenge is to complete there (3) automated tasks on multiple browsers for both versions of the app:

1. Using the modern visual AI approach [(Applitools Ultrafast Grid)](https://applitools.com/ultrafast-grid/)
2. And also using the preferred traditional approach [(Cypress Cross Browser)](https://www.cypress.io/)


### Tools
* [Cypress](https://www.cypress.io/)
* [Applitools](https://applitools.com/)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [npm v10.16.3+](https://nodejs.org/en/)
- [Java v10.0.1+](https://www.java.com/en/download/)
- [Chrome V80+](https://www.google.com/chrome/)
- [Firefox v75.0+](https://www.mozilla.org/en-US/exp/firefox/)
- [Latest Edge Chromium](https://www.microsoft.com/en-us/edge)

### Installation

1. Clone the repo

```sh
git clone https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon.git
```

2. Navigate to the root of the project
```sh
cd applitools-cross-browser-testing-hackathon
```
3. Install NPM packages

```sh
npm install
```
4. Create a .env file in the root of your project

```sh
touch .env
echo "APPLITOOLS_API_KEY=[API Key]" >> .env

# For windows:
# type NUL > .env
# echo APPLITOOLS_API_KEY=[API Key]  > .env
```

### Usage

Run any of the following test scripts

```sh
# Run all modern tests (task 1, 2, 3) against version one (1) of the app 
APP_VERSION=V1 TASK=* npm run modern:tests
```

```sh
# Run all modern tests (task 1, 2, 3) against version two (2) of the app 
APP_VERSION=V2 TASK=* npm run modern:tests
```

```sh
# Run specific modern tests (task 1, 2, 3) against version two (1) of the app 
APP_VERSION=V1 TASK=1 npm run modern:tests
APP_VERSION=V1 TASK=2 npm run modern:tests
APP_VERSION=V1 TASK=3 npm run modern:tests
```

```sh
# Run specific modern tests (task 1, 2, 3) against version two (2) of the app 
APP_VERSION=V2 TASK=1 npm run modern:tests
APP_VERSION=V2 TASK=2 npm run modern:tests
APP_VERSION=V2 TASK=3 npm run modern:tests
```

> BROWSER options for traditional tests: chrome, firefox, edge, chrome:tablet, firefox:tablet, edge:tablet, mobile

```sh
# Run all traditional tests (task 1, 2, 3) on a specific browser and viewport 
# against version one (1) of the app
# example: APP_VERSION=V1 TASK=* BROWSER=chrome npm run traditional:tests
APP_VERSION=V1 TASK=* BROWSER=[BROWSER_OPTION] npm run traditional:tests
```

```sh
# Run all traditional tests (task 1, 2, 3) on a specific browser and viewport 
# against version two (2) of the app
# example: APP_VERSION=V2 TASK=* BROWSER=firefox npm run traditional:tests
APP_VERSION=V2 TASK=* BROWSER=[BROWSER_OPTION] npm run traditional:tests
```

```sh
# Run specific traditional tests (task 1, 2, 3) against version one (1) of the app 
# example: APP_VERSION=V1 TASK=1 BROWSER=mobile npm run traditional:tests
APP_VERSION=V1 TASK=1 BROWSER=[BROWSER_OPTION] npm run traditional:tests
APP_VERSION=V1 TASK=2 BROWSER=[BROWSER_OPTION] npm run traditional:tests
APP_VERSION=V1 TASK=3 BROWSER=[BROWSER_OPTION] npm run traditional:tests
```

```sh
# Run specific traditional tests (task 1, 2, 3) against version two (2) of the app 
# example: APP_VERSION=V2 TASK=2 BROWSER=edge:tablet npm run traditional:tests
APP_VERSION=V2 TASK=1 BROWSER=[BROWSER_OPTION] npm run traditional:tests
APP_VERSION=V2 TASK=2 BROWSER=[BROWSER_OPTION] npm run traditional:tests
APP_VERSION=V2 TASK=3 BROWSER=[BROWSER_OPTION] npm run traditional:tests
```

## Test Results

> Test folder can be found [here](https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon/tree/master/cypress/integration)

### Modern

> #### Task 1
- The batch results for the modern test task 1 against V1 can be found [here](https://eyes.applitools.com/app/test-results/00000251811149104363?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)

- The batch results for the modern test task 1 against V2 can be found [here](https://eyes.applitools.com/app/test-results/00000251811149007334?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)

> #### Task 2
- The batch results for the modern test task 2 against V1 can be found [here](https://eyes.applitools.com/app/test-results/00000251811056078764?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)

- The batch results for the modern test task 2 against V2 can be found [here](https://eyes.applitools.com/app/test-results/00000251811054772292?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)


> #### Task 3
- The batch results for the modern test task 3 against V1 can be found [here](https://eyes.applitools.com/app/test-results/00000251810803092127?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)

- The batch results for the modern test task 3 against V2 can be found [here](https://eyes.applitools.com/app/test-results/00000251810802835103?accountId=ybC-3D_4F0yFPODvsoaRcg~~&display=details&top=00000251810132933558%2818%29)

### Traditional

- Traditional Results for task 1, 2, 3 against V1 and all browsers can be found [here](https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon/blob/master/Traditional-V1-TestResults.txt)

- Traditional Results for task 1, 2, 3 against V2 and all browsers can be found [here](https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon/blob/master/Traditional-V2-TestResults.txt)


## License

Distributed under the MIT License.

## Contact

Dimitri Harding: [@dimitriharding](https://twitter.com/irtimid_harding)<br/>
Project Link: [https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon](https://github.com/dimitriharding/applitools-cross-browser-testing-hackathon)