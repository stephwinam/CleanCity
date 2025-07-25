# 🧪 CleanCity: Waste Pickup Scheduler – Final Test Report

## 📋 Project Overview

**CleanCity** is a web application built with React, designed to help users schedule waste pickup services efficiently. The goal of this project was to conduct a comprehensive Quality Assurance (QA) analysis using both **manual** and **automated** testing to uncover and document bugs, verify requirements, and ensure a reliable user experience.

---

## ✅ Scope of Testing

- Functional Testing
- UI/UX Validation
- Exploratory Testing
- Risk-Based Testing
- Automation Testing (Jest + React Testing Library)

---

## 🧠 Test Strategy

We applied a **risk-based approach**, prioritizing test cases based on:

- Component complexity
- User interaction frequency
- Potential business impact of failure

All tests were performed manually and automated (where feasible) on a React application running locally in development mode (`npm start`).

---

## 📌 Key Components Tested

| Component    | Test Type         | Description                                              |
| ------------ | ----------------- | -------------------------------------------------------- |
| LandingPage  | Manual, Automated | Ensures the landing page displays welcome info correctly |
| Navbar       | Manual            | Verifies navigation links and branding                   |
| Footer       | Manual            | Validates contact and legal information                  |
| BookingForm  | Manual            | Simulates filling and submitting form                    |
| ScheduleView | Manual            | Displays scheduled pickups                               |

---

## 🔍 Manual Testing Summary

We performed **manual exploratory testing** across key components and workflows of the CleanCity: Waste Pickup Scheduler web application. Each page was tested for usability, responsiveness, and expected behavior on both desktop and mobile views.

---

### ✅ Components Tested

#### 1. **Landing Page**

- ✅ Headings and descriptions render correctly
- ✅ Navigation links visible and responsive
- ✅ CTA buttons lead to correct pages

#### 2. **Home Page**

- ✅ Renders greeting text and dashboard cards
- ✅ Summary stats display accurate data
- ✅ Links to schedule and bookings are functional

#### 3. **Dashboard**

- ✅ Charts and stats load correctly
- ✅ Displays real-time booking metrics
- ✅ No errors during page load

#### 4. **Login Page**

- ✅ Accepts valid credentials
- ✅ Redirects to dashboard after successful login
- ✅ Prevents login with invalid input
- ✅ Displays error messages on failure

#### 5. **Register Page**

- ✅ Accepts input and registers new user
- ✅ Password and confirm password validation works
- ✅ Displays error on invalid form submission

#### 6. **Booking Form (Feedback.js)**

- ✅ Form fields accept input
- ✅ Submits correctly with valid data
- ❌ **Issue:** No validation error when submitting empty form

#### 7. **Schedule View (Admin.js)**

- ✅ Displays upcoming bookings
- ✅ Allows admin to mark bookings as completed
- ❌ **Issue:** Misaligned UI on smaller screens

#### 8. **Notification Bell**

- ✅ Displays correct count of unread notifications
- ✅ Bell icon shows dropdown on click
- ✅ Clears notifications when viewed

#### 9. **Navigation Bar**

- ✅ All links navigate correctly
- ❌ **Issue:** Active link styling does not update

#### 10. **Awareness Page**

- ✅ Content displays properly
- ✅ All educational cards are responsive
- ✅ External links open in new tabs

---

## 🐞 Defect Log

The following issues were found during manual and exploratory testing and logged for developer resolution. All defects were submitted to the CleanCity GitHub Issues tracker with supporting reproduction steps, environment details, and screenshots.

| ID   | Component        | Severity | Description                                            | Status |
| ---- | ---------------- | -------- | ------------------------------------------------------ | ------ |
| D001 | Register.js      | High     | Invalid characters accepted in username field          | Open   |
| D002 | Register.js      | Medium   | "Login here" link on registration page is unresponsive | Open   |
| D003 | Feedback.js      | High     | Accepts invalid Request ID format                      | Open   |
| D004 | Home.js          | Medium   | Name field accepts overly long input                   | Open   |
| D005 | Home.js          | High     | Allows duplicate waste pickup requests for same date   | Open   |
| D006 | Admin.js         | Low      | Duplicate success popup shown on status update         | Open   |
| D007 | Navbar           | Medium   | Missing hamburger menu in mobile view                  | Open   |
| D008 | Register.js      | High     | Duplicate user registrations allowed                   | Open   |
| D009 | BookingForm.js   | Medium   | Same-day pickup scheduling allowed                     | Open   |
| D010 | BookingForm.js   | Medium   | Past date scheduling is permitted                      | Open   |
| D011 | Register.js      | Medium   | Missing Confirm Password field                         | Open   |
| D012 | Awareness.js     | Low      | Quiz score continues incrementing post-completion      | Open   |
| D013 | Community Page   | Medium   | Blog comments do not reflect in user profile           | Open   |
| D014 | Profile Page     | High     | Pickup requests not listed under “My Requests”         | Open   |
| D015 | NotificationBell | Low      | Notification popup stays open after tab change         | Open   |

🗒️ For full reproduction steps, environment details, and visuals, see `defect-log.md`.

📝 **Note:** All bugs have been reported in the CleanCity GitHub Issues tracker with appropriate screenshots and reproduction steps.

---

## ⚙️ Automation Testing Summary

We performed automated testing using **Jest** and **React Testing Library**. The focus was on verifying the rendering and behavior of key UI components.

**Component Tested:**

- **`LandingPage.js`**
  -Basic render tests to confirm the component loads successfully and displays expected text elements.

- **`Admin.js`**

  - Verified that the admin panel renders successfully.
  - Confirmed the presence of dashboard controls or placeholder text.

- **`Awareness.js`**

  - Checked rendering of the awareness section with expected titles and content.

- **`Dashboard.js`**

  - Ensured the dashboard loads without crashing.
  - Verified key UI elements are present (like headers or containers).

- **`Feedback.js`**

  - Tested feedback form component rendering.
  - Checked for expected form labels or instructions.

- **`Home.js`**

  - Confirmed successful rendering of the homepage.
  - Verified integration with router using `MemoryRouter`.
  - Checked that hero text and descriptions are present.

- **`LandingPage.js`**

  - Confirmed the landing page renders.
  - Checked the presence of key headings and call-to-action text.

- **`Login.js`**

  - Ensured that the login form renders correctly.
  - Verified presence of username and password fields.

- **`Login.test.js`**

  - Automated tests to verify:
    - Input fields accept values.
    - Login button exists.
    - Form handles input events properly.

- **`NotificationBell.js`**

  - Verified that the notification bell renders without errors.
  - Checked for placeholder text or icon rendering.

- **`Register.js`**
  - Tested the rendering of the registration form.
  - Verified that form fields and labels are present.

**Results:**

- ✅ All tests passed successfully.
- Tests ensured that key texts such as headings and descriptions appeared in the document.
- The tests ran using `react-scripts test` and confirmed that the application integrates well with the testing framework.

**Evidence:**

- Test screenshots can be found in the `tests/screenshots/` folder.
- Full test code is located at `src/components/`

---

## 📸 Evidence of Testing Activities

- ✅ Screenshots for manual testing (before/after)
- ✅ Bug reproduction steps documented in GitHub Issues
- ✅ Test case checklist completed in `TestCases.md`
- ✅ Defect logs and risk matrix in `DefectLog.md`
- ✅ Video walk-through uploaded (YouTube/Vimeo link)

---

## 📂 Folder Structure for Test Artifacts

tests/
├── final-report.md # This file
├── test-cases.md # All test cases written
├── defect-log.md # Manual bug log
├── screenshots/ # Manual + automation screenshots
src/
└── components/
├── LandingPage.test.js
├── Admin.test.js
├── Awareness.test.js
├── Dashboard.test.js
├── Feedback.test.js
└── Home.test.js
├── Login.test.js
├── NotificationBell.test.js
├── Register.test.js

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
