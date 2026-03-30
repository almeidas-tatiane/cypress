![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
# 🛒 E-commerce Test Automation (Cypress)

🔗 Application under test: https://practice.qabrains.com/ecommerce

## 📑 Table of Contents

- [📌 Overview](#-overview)
- [⚙️ CI Pipeline](#️-ci-pipeline)
- [📊 Reporting](#-reporting)
- [📸 Test Execution Evidence](#-test-execution-evidence)
- [▶️ Run Tests](#️-run-tests-interactive-mode)
- [🧪 Test Scenarios Covered](#-test-scenarios-covered)


## 📌 Overview

This project demonstrates a production-like E2E testing pipeline using Cypress, including multi-browser execution, **CI/CD integration, and external reporting**.

Although my primary expertise is in **Performance Testing**, this project highlights my ability to design scalable functional automation aligned with modern QA practices.

This project also reflects the growing industry expectation for QA professionals to combine performance and functional automation skills and demonstrates a complete E2E testing pipeline using Cypress, focusing on:

- Parallel multi-browser execution using GitHub Actions
- Integration with multiple reporting tools (Cypress Cloud, Tesults, Allure)
- CI troubleshooting and browser compatibility handling (Firefox)

---
## 🎯 Why this project?

This project was created to simulate a real-world QA pipeline, combining automation, CI/CD, and reporting tools.

It reflects practical challenges such as browser compatibility, CI limitations, and test result analysis.

---

## 🚀 Tech Stack

* **Cypress** – End-to-end test automation
* **JavaScript** – Test logic
* **Fixtures (JSON)** – Test data management
* **Custom Commands** – Reusability and cleaner tests
* **GitHub Actions** – CI/CD pipeline
* **Cypress Cloud** – Test execution and reporting
* **Tesults** – External test reporting
* **Allure Reports** – Detailed test visualization

---
## ⚙️ CI Pipeline

The pipeline is structured into independent jobs:

- Electron execution
- Chrome execution
- Firefox execution

Each browser runs as an independent job, enabling scalable and **parallel** test execution across environments.
  
---
## ▶️ Trigger CI Execution (GitHub Actions)

This project uses manual triggers (`workflow_dispatch`) to execute test pipelines.

<img width="327" height="186" alt="image" src="https://github.com/user-attachments/assets/315c133b-1375-4c54-943b-78ce82e34405" />


### ☁️ Cypress Cloud

1. Go to **GitHub → Actions**
2. Select workflow: `Cypress Cloud`
3. Click **Run workflow**
4. Select branch and confirm execution

This workflow:
- Executes tests in Cypress Cloud
- Provides real-time execution dashboard and debugging insights


### ⚙️ Cypress Tests (Tesults Reporting)

1. Go to **GitHub → Actions**
2. Select workflow: `Cypress Tests`
3. Click **Run workflow**

This workflow:
- Executes tests in parallel across browsers (Electron, Chrome, Firefox)
- Publishes results to Tesults for centralized reporting

---
## 🌐 Multi-Browser Strategy

| Browser   | Execution | Video | Notes |
|----------|--------|------|------|
| Electron | ✅ | ✅ | Default Cypress engine |
| Chrome   | ✅ | ✅ | Stable and fully supported |
| Firefox  | ✅ | ❌ | Video recording not supported by Cypress |


---
## ⚠️ Known Limitations

- Cypress does not support video recording for Firefox due to lack of CDP support
- Firefox execution in CI may require Cypress version compatibility adjustments
- **Firefox execution is included** to validate cross-browser compatibility, despite known limitations in Cypress regarding video recording.

---
## 📊 Reporting

Test results are published using Tesults:

- Centralized execution results
- Historical tracking
- Cross-browser comparison

Additionally, Allure Reports are available for detailed analysis and visualization of test execution.

---
## 🔍 Reporting Tools Comparison

This project uses multiple reporting tools, each serving a different purpose:

| Tool            | Purpose |
|-----------------|--------|
| Cypress Cloud   | Test execution dashboard and real-time monitoring |
| Tesults         | Centralized reporting across CI runs and browsers |
| Allure Reports  | Detailed test analysis and visualization |

### 💡 Key Differences

- **Cypress Cloud** → Focused on execution visibility and debugging
- **Tesults** → Focused on centralized result tracking and history
- **Allure** → Focused on deep analysis and readable test reports

These tools complement each other to provide a complete testing observability strategy.

---
## 📸 Test Execution Evidence

Provides a centralized view of test results across all browsers executed in CI.

### ☁️ Cypress Cloud (Execution Dashboard)

<img width="930" height="591" alt="image" src="https://github.com/user-attachments/assets/6e4faeea-68a0-484e-8148-9ff771eec3ba" />
<img width="944" height="884" alt="image" src="https://github.com/user-attachments/assets/6e52968a-8221-42a3-9673-068a310e815d" />
<img width="1573" height="573" alt="image" src="https://github.com/user-attachments/assets/e730f4b3-45ae-47e5-b1b3-e118879b2331" />


### ⚙️ Tesults Report (Cross-browser results)

<img width="661" height="229" alt="image" src="https://github.com/user-attachments/assets/f152e7a6-2914-4351-97f0-e53d83391de7" />
<img width="1597" height="581" alt="image" src="https://github.com/user-attachments/assets/e912e61a-21cf-456b-9725-70d8d67a32fb" />
<img width="1450" height="370" alt="image" src="https://github.com/user-attachments/assets/a098a5da-3e27-44fa-875d-82df7472b636" />
<img width="1453" height="378" alt="image" src="https://github.com/user-attachments/assets/81e41c84-4cb4-4759-b043-d2fc6bd35342" />
<img width="1452" height="366" alt="image" src="https://github.com/user-attachments/assets/832aefa9-5968-4fa4-b2fe-d7b314774f4e" />


### 📊 Allure Report (Detailed analysis)

<img width="1585" height="512" alt="image" src="https://github.com/user-attachments/assets/4c5049ff-66e3-41d8-b4d3-ef9c8a334375" />


---
## ▶️ Run Tests (Interactive Mode)

```bash
npm install
npx cypress open
```
---
## ▶️ Run Tests (Headless Mode)
```bash
npx cypress run
```
---
## 📊 Allure Report

This project supports **Allure Reports** for enhanced test result analysis.

They provide a clear and interactive way to visualize execution results, helping identify failures and understand test behavior more efficiently.

## ▶️ Run tests with Allure enabled
```bash
npx cypress run --env allure=true
```
## ▶️ Generate report
```bash
allure generate allure-results --clean -o allure-report
```
## ▶️ Open report
```bash
allure open allure-report
```
-----
## 🧪 Test Scenarios Covered

### 🔐 Login

* ✅ Valid login → redirect to products page
* ✅ Invalid login → proper error messages validation

### 🛍️ Products Page

* ✅ Page load validation
* ✅ Product sorting validation:

  * A → Z
  * Z → A
  * Price (Low → High / High → Low)

### 🛒 Cart

* ✅ Add products → validate cart counter and product listing
* ✅ Remove product → validate cart update
* ✅ Update quantity → validate quantity change
* ✅ Data-driven testing using fixtures

### 💳 Checkout

* ✅ Overview validation:

  * Product list
  * Item totals
  * Aggregated total validation (calculated vs UI)
* ✅ Complete checkout:

  * Fill user information
  * Finish order
  * Validate success message

### 🚪 Logout

* ✅ User logout and return to login screen

---

## 📂 Project Structure

```
cypress/
 ├── e2e/
 │    └── ecommerce.cy.js
 ├── fixtures/
 │    └── products.json
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
```

---

## 🔁 Reusability

Custom commands were implemented to improve readability and maintainability:

* `cy.ValidLogin()`
* `cy.ValidateProductsPage()`
* `cy.AddProductsToCart()`
* `cy.CheckoutOverview()`

---

## 📊 Key Validation Highlight

One of the main validations implemented is the **cart total calculation**, where:

* Each product total is extracted from UI
* Values are converted and summed programmatically
* The calculated total is compared with the displayed **Item Total**

This ensures consistency between UI and business logic.

---

## 💡 Lessons Learned

- Cypress version compatibility directly impacts browser stability
- Firefox execution in CI environments is more sensitive than Chrome
- Docker + Cypress + Firefox requires careful configuration
- Parallel execution improves feedback time in CI pipelines
- Trade-offs between browser support and stability must be considered in CI environments

---
## 🚀 Next Steps

- Automated execution on PRs

---

## 👩‍💻 About Me

QA Engineer with strong experience in:

* Performance Testing (JMeter, Gatling, K6)
* Monitoring (Grafana, Dynatrace, DataDog, New Relic)
* Process improvement and test strategy

Currently expanding skills in test automation to deliver end-to-end quality strategies combining **performance** and **functional testing**.

---
## 🚀 Final Thoughts

This project demonstrates how a QA engineer can go beyond test automation by designing a complete testing pipeline, handling real-world challenges such as browser limitations, CI/CD constraints, and reporting strategies.

---
## 🙏 Usage and Credit Notice

If you find this project useful, feel free to use it and adapt it.

⭐ If it helped you, consider giving it a star!  
🔗 Credits are appreciated: [GitHub](https://github.com/almeidas-tatiane) and [LinkedIn](https://www.linkedin.com/in/tatianealmeida/) when using this material.

