![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
# 🛒 E-commerce Test Automation (Cypress)

🔗 Application under test: https://practice.qabrains.com/ecommerce

## 📌 Overview

This project demonstrates a production-like E2E testing pipeline using Cypress, including multi-browser execution, **CI/CD integration, and external reporting**.

Although my primary expertise is in **Performance Testing**, this project highlights my ability to design scalable functional automation aligned with modern QA practices.

This project also reflects the growing industry expectation for QA professionals to combine performance and functional automation skills and demonstrates a complete E2E testing pipeline using Cypress, focusing on:

- Multi-browser execution (Electron, Chrome, Firefox)
- CI/CD integration using GitHub Actions
- Parallel execution strategy
- External reporting using Tesults
- Real-world troubleshooting (Firefox limitations in CI)

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

Each browser runs tests independently and reports results to Tesults.
  
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

---
## 📊 Reporting

Test results are published using Tesults:

- Centralized execution results
- Historical tracking
- Cross-browser comparison

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

---

## 👩‍💻 About Me

QA Engineer with strong experience in:

* Performance Testing (JMeter, Gatling, K6)
* Monitoring (Grafana, Dynatrace, DataDog, New Relic)
* Process improvement and test strategy

Currently expanding skills in **test automation** to deliver more complete quality solutions.

---

## 🙏 Usage and Credit Notice

If you find this project useful, feel free to use it and adapt it.

⭐ If it helped you, consider giving it a star!  
🔗 Credits are appreciated: [GitHub](https://github.com/almeidas-tatiane) and [LinkedIn](https://www.linkedin.com/in/tatianealmeida/) when using this material.

