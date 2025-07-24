# ✅ Test Cases – CleanCity: Waste Pickup Scheduler

This document outlines detailed functional test cases for the CleanCity React-based web application. The application has intentional bugs; this test suite identifies core functionality and known issues.

---

## ✅ TC01 – Schedule Pickup for Same Day or Past Date

- **Feature:** Waste Pickup Scheduling
- **Steps:** Schedule a pickup for today or a past date
- **Expected Result:** System rejects with an error
- **Actual Result:** Pickup accepted
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC02 – Missing Confirm Password on Registration

- **Feature:** Registration Form
- **Steps:** Visit register page and observe input fields
- **Expected Result:** Confirm password field present
- **Actual Result:** Field missing
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC03 – Quiz Score Increases After Quiz Ends

- **Feature:** Community Quiz
- **Steps:** Complete quiz, monitor score
- **Expected Result:** Score stops increasing
- **Actual Result:** Score continues to increase
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC04 – Comment Not Listed in “My Comments”

- **Feature:** Comment System
- **Steps:** Leave a comment, check profile > My Comments
- **Expected Result:** Comment appears
- **Actual Result:** Comment missing
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC05 – Pickup Requests Not Listed in “My Requests”

- **Feature:** Pickup History
- **Steps:** Submit request, check profile
- **Expected Result:** Request listed
- **Actual Result:** Request not shown
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC06 – Notification Panel Doesn’t Auto-Dismiss

- **Feature:** Notifications
- **Steps:** Click bell icon, navigate away
- **Expected Result:** Popup auto-dismisses
- **Actual Result:** Popup stays
- **Status:** ❌ Fail
- **Severity:** Low

---

## ✅ TC07 – User Can Submit Blank Pickup Request

- **Feature:** Request Form Validation
- **Steps:** Leave all fields blank, click submit
- **Expected Result:** Form errors shown
- **Actual Result:** Request submits
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC08 – Incorrect Login Still Grants Access

- **Feature:** Login
- **Steps:** Enter wrong credentials
- **Expected Result:** Login denied
- **Actual Result:** User is redirected as if logged in
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC09 – App Breaks on Mobile View

- **Feature:** Responsive Design
- **Steps:** Open app on mobile device
- **Expected Result:** Layout adjusts
- **Actual Result:** Layout breaks, buttons misaligned
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC10 – Logout Button Not Working

- **Feature:** Authentication
- **Steps:** Click Logout button
- **Expected Result:** User logged out
- **Actual Result:** Nothing happens
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC11 – Map Marker Displays Incorrect Location

- **Feature:** Interactive Map
- **Steps:** Select a location
- **Expected Result:** Marker appears at correct location
- **Actual Result:** Marker appears offset or wrong
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC12 – Notifications Show for Wrong User

- **Feature:** Notification System
- **Steps:** Login as User A, check notifications
- **Expected Result:** See own notifications
- **Actual Result:** See another user’s messages
- **Status:** ❌ Fail
- **Severity:** High

---

## ✅ TC13 – Form Accepts Invalid Email Format

- **Feature:** Registration Form Validation
- **Steps:** Enter "user@wrong" and register
- **Expected Result:** Error message
- **Actual Result:** Form submitted
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC14 – Missing Feedback After Submitting Pickup

- **Feature:** UX Feedback
- **Steps:** Submit a pickup request
- **Expected Result:** Success message or confirmation
- **Actual Result:** No feedback shown
- **Status:** ❌ Fail
- **Severity:** Medium

---

## ✅ TC15 – Profile Page Crashes After Pickup Submission

- **Feature:** Profile Dashboard
- **Steps:** Submit request, go to profile
- **Expected Result:** Page loads
- **Actual Result:** Crashes or freezes
- **Status:** ❌ Fail
- **Severity:** High

---

## 🔢 Summary

| Metric               | Count |
| -------------------- | ----- |
| Total Test Cases     | 15    |
| Total Failures       | 15    |
| Total Passed         | 0     |
| High Severity Bugs   | 7     |
| Medium Severity Bugs | 6     |
| Low Severity Bugs    | 2     |

---

✅ _Prepared by: [Stephany Winam]_  
📅 _Date: July 2025_
