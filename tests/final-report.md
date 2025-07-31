# 🧪 CleanCity: Waste Pickup Scheduler – Final Test Report

## 📋 Project Overview

**CleanCity** is a React-based web application that enables users to schedule waste pickup services seamlessly. This report documents a full QA cycle combining **manual exploratory testing** and **automated testing** using **Jest + React Testing Library**.

The primary goals were:

- Identify functional, UI, and usability issues
- Ensure cross-device compatibility
- Validate components under expected workflows
- Deliver a stable, reliable user experience

---

## ✅ Scope of Testing

- ✅ Functional Testing
- ✅ UI/UX Validation
- ✅ Exploratory Testing
- ✅ Risk-Based Testing
- ✅ Automation Testing

---

## 🧠 Test Strategy

We adopted a **risk-based testing** approach, prioritizing:

- High-impact user-facing components
- Frequently accessed features
- Areas prone to edge-case errors

Tests were conducted on a local environment using `npm start`, primarily on Chrome browser (desktop and mobile views).

---

## 🔍 Manual Testing Summary

We performed **exploratory testing** across all core pages. Key findings have been mapped to logged defects.

### ✅ Components Tested

| Page/Component      | Status   | Notes                                                                                                                  |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Landing Page        | ✅ Pass  | All buttons and links functional                                                                                       |
| Home Page           | ⚠️ Issue | Allows duplicate booking requests (D005), long input (D004)                                                            |
| Dashboard           | ✅ Pass  | Stats and charts render without error                                                                                  |
| Login Page          | ✅ Pass  | Form validation and redirect work correctly                                                                            |
| Register Page       | ⚠️ Issue | Multiple defects: invalid characters (D001), duplicate user allowed (D008), broken links (D002), missing fields (D011) |
| Booking Form        | ⚠️ Issue | Validation issues and incorrect date handling (D003, D009, D010)                                                       |
| Schedule View/Admin | ⚠️ Issue | UI misalignment and double popups (D006)                                                                               |
| Notification Bell   | ⚠️ Issue | Dropdown not dismissed on tab change (D015)                                                                            |
| Navbar              | ⚠️ Issue | No mobile menu, inactive highlighting (D007, D009)                                                                     |
| Awareness Page      | ⚠️ Issue | Quiz keeps incrementing score after completion (D012)                                                                  |
| Community/Profile   | ⚠️ Issue | Comments don’t sync, missing pickup history (D013, D014)                                                               |

---

## 🐞 Defect Log

| ID   | Component        | Severity | Description                                           | Status |
| ---- | ---------------- | -------- | ----------------------------------------------------- | ------ |
| D001 | Register.js      | High     | Invalid characters accepted in username               | Open   |
| D002 | Register.js      | Medium   | "Login here" link unresponsive                        | Open   |
| D003 | Feedback.js      | High     | Accepts invalid Request ID format                     | Open   |
| D004 | Home.js          | Medium   | Name field accepts overly long input                  | Open   |
| D005 | Home.js          | High     | Duplicate pickup requests allowed                     | Open   |
| D006 | Admin.js         | Low      | Duplicate success popup shown                         | Open   |
| D007 | Navbar           | Medium   | Missing hamburger menu in mobile view                 | Open   |
| D008 | Register.js      | High     | Duplicate user registration allowed                   | Open   |
| D009 | BookingForm.js   | Medium   | Allows same-day pickup scheduling                     | Open   |
| D010 | BookingForm.js   | Medium   | Past date scheduling permitted                        | Open   |
| D011 | Register.js      | Medium   | Missing Confirm Password field                        | Open   |
| D012 | Awareness.js     | Low      | Quiz score increments after completion                | Open   |
| D013 | Community Page   | Medium   | Blog comments not reflected in profile                | Open   |
| D014 | Profile Page     | High     | User’s pickup requests not listed under "My Requests" | Open   |
| D015 | NotificationBell | Low      | Popup stays open after tab switch                     | Open   |

🔗 Full details with reproduction steps available in `defect-log.md` and GitHub Issues.

---

## ⚙️ Automation Testing Summary

We automated unit/component tests using **Jest** and **React Testing Library**.

### ✅ Tested Components

| Component        | Assertions                                 |
| ---------------- | ------------------------------------------ |
| LandingPage.js   | Headings, CTAs, and descriptions render    |
| Admin.js         | Dashboard layout loads                     |
| Awareness.js     | Educational cards render with content      |
| Dashboard.js     | No crashes; UI elements present            |
| Feedback.js      | Form loads and input elements render       |
| Home.js          | Hero section visible; router integration   |
| Login.js         | Fields accept input; form behaves properly |
| Register.js      | All form fields and labels rendered        |
| NotificationBell | Icon and dropdown functional               |

✅ All automated tests passed using `react-scripts test`.

📂 Test files are located in `src/components/*.test.js`

---

## 📸 Evidence of Testing

- Manual screenshots and bug walkthroughs in `screenshots/`
- `test-cases.md` with coverage mapping
- `defect-log.md` with bug severity, steps, and GitHub issue links
- Loom/YouTube video demo of testing session

---

## 📊 Metrics & KPIs

| Metric                     | Value |
| -------------------------- | ----- |
| Manual Test Cases Executed | 10    |
| Automated Test Files       | 10    |
| Total Bugs Logged          | 15    |
| Critical (High) Bugs       | 5     |
| Test Case Coverage         | ~100% |
| Component Automation Rate  | ~60%  |

---

## ⚠️ Risks Identified

| Risk                        | Likelihood | Impact | Mitigation                      |
| --------------------------- | ---------- | ------ | ------------------------------- |
| Form validation failures    | High       | High   | Add real-time validation logic  |
| Responsive layout issues    | Medium     | Medium | Conduct responsive design audit |
| Navigation styling feedback | Medium     | Low    | Improve navbar state handling   |

---

## 🛠️ Recommendations

- Add **real-time front-end validation** for all form inputs
- Implement **E2E testing** (e.g., Cypress) for full workflows
- Fix all **duplicate submission** and input limit issues
- Improve **responsive behavior** for all screen sizes
- Add unit tests for **form edge cases and date validations**

---

## 📂 Folder Structure

```plaintext
tests/
├── final-report.md           # This report
├── test-cases.md             # Manual test case checklist
├── defect-log.md             # Manual bug log
├── screenshots/              # Manual + automation screenshots

src/components/
├── LandingPage.test.js
├── Admin.test.js
├── Awareness.test.js
├── Dashboard.test.js
├── Feedback.test.js
├── Home.test.js
├── Login.test.js
├── NotificationBell.test.js
├── Register.test.js
```

## 🧪 Test Environment

- **Browser:** Chrome (v138.0.7204.169)
- **OS:** Windows 11
- **Screen Sizes Tested:** Desktop, Tablet, Mobile (Responsive)
- **React Version:** 18.x
- **Test Framework:** Jest + React Testing Library
- **Tools Used:** VS Code, GitHub Issues, loom for video

## 🧾 Files Submitted

- `final-report.md` (this file)
- `test-cases.md` – Manual test case table
- `defect-log.md` – Risk analysis + bug tracking
- `src/components/` folder – Automated test files
- `/screenshots/` folder – Visual evidence of automated testing
- Video demo (uploaded separately)

---

## 🎯 Conclusion

We successfully completed QA for the **CleanCity: Waste Pickup Scheduler** project. Testing revealed **3 critical bugs**, all of which were reported for developer resolution. Automated testing was limited but effective in verifying rendering logic. The test effort demonstrated thoroughness, with real-world user journeys guiding both manual and automated validation.

---

## 👤 Tester

**Name:** [Stephany Winam]  
**Date:** July 22, 2025  
**Role:** QA Engineer
