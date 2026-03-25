# 🛒 E-commerce Test Automation (Cypress)

🔗 Application under test: https://practice.qabrains.com/ecommerce

## 📌 Overview

This project contains automated end-to-end tests for an e-commerce application using **Cypress**.

The main goal is to validate critical user flows such as login, product selection, cart management, and checkout process, ensuring system reliability and correctness.

Although my primary expertise is in **Performance Testing**, this project demonstrates my ability to design and implement **functional automation tests** to support modern QA requirements.

This project also reflects the growing industry expectation for QA professionals to combine performance and functional automation skills.

---

## 🚀 Tech Stack

* **Cypress** – End-to-end test automation
* **JavaScript** – Test logic
* **Fixtures (JSON)** – Test data management
* **Custom Commands** – Reusability and cleaner tests
* **GitHub Actions** – CI/CD pipeline
* **Cypress Cloud** – Test execution and reporting
  
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
## ⚙️ CI/CD Pipeline

This project includes a GitHub Actions workflow that:

* Supports manual execution via workflow_dispatch (on-demand test runs)
* Integrates with Cypress Cloud for test execution and reporting

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

## 🎯 Purpose

This project is part of my continuous learning journey to expand my skills beyond performance testing into **functional automation**, aligning with current market expectations.

---

## 👩‍💻 About Me

QA Engineer with strong experience in:

* Performance Testing (JMeter, Gatling, K6)
* Monitoring (Grafana, Dynatrace, DataDog, New Relic)
* Process improvement and test strategy

Currently expanding skills in **test automation** to deliver more complete quality solutions.

---
