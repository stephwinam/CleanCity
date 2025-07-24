# 🐞 Defect Log – CleanCity: Waste Pickup Scheduler

## DEFECT-001: Registration allows invalid usernames like double quotes ("")

**Description**: Users can enter invalid characters such as `"` in the username field during registration.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Navigate to the Registration page.
2. Enter a username like `"test"` or `"; DROP TABLE users;`".
3. Complete other fields and submit the form.
   **Expected Result**: The form should reject invalid usernames and display a validation message.
   **Actual Result**: The form accepts the input and registers the user.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-002: 'Login here' link on registration page is unresponsive

**Description**: The "Login here" hyperlink on the registration form does not redirect to the login page.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Go to the Registration page.
2. Click the "Login here" link.
   **Expected Result**: User should be redirected to the login page.
   **Actual Result**: Nothing happens.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-003: Feedback form accepts invalid request IDs

**Description**: The feedback form allows users to submit invalid Request IDs that do not match the `REQ###` format.
**Severity**: High  
**Status**: Open  
**Steps to Reproduce**:

1. Go to the Feedback form.
2. Enter `abc123` or any random string in the Request ID field.
3. Fill out other fields and submit.
   **Expected Result**: Input should be validated and rejected.
   **Actual Result**: Form submits successfully.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-004: Can submit a request with an excessively long name

**Description**: The request form allows names longer than a reasonable length, potentially causing display or DB issues.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Open the home page.
2. Fill out the name field with a string of 200+ characters.
3. Submit the request.
   **Expected Result**: Name field should limit input and return a validation error.
   **Actual Result**: Request is accepted.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-005: Duplicate waste pickup allowed for the same date

**Description**: Users can submit multiple waste pickup requests for the same date.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Submit a waste pickup for a specific date.
2. Submit another request for the same date.
   **Expected Result**: System should prevent duplicate requests for the same day.
   **Actual Result**: All requests are accepted.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-006: Admin status update throws duplicate alerts

**Description**: After updating a request status as admin, a second popup incorrectly asks the user to select a request and new status again.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Log in as admin.
2. Go to Admin panel and update a request’s status.
3. Click “Update Status.”
4. Observe popup behavior.
   **Expected Result**: Only one success message should be shown.
   **Actual Result**: A second confusing alert appears.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-007: Missing hamburger menu on mobile view

**Description**: The app is not mobile responsive and lacks a collapsible hamburger menu.
**Severity**: Low  
**Status**: Open  
**Steps to Reproduce**:

1. Open the app on a mobile browser or emulate mobile view in Chrome DevTools.
   **Expected Result**: A hamburger menu should appear.
   **Actual Result**: The menu is not responsive or visible.
   **Environment**: Chrome Mobile View  
   **Date Logged**: 2025-07-22

---

## DEFECT-008: No alert on duplicate registration

**Description**: User can register the same account multiple times without feedback or validation error.
**Severity**: High  
**Status**: Open  
**Steps to Reproduce**:

1. Register an account.
2. Attempt to register again using the same username/email.
   **Expected Result**: System should alert "user already exists."
   **Actual Result**: Duplicate registration is allowed.
   **Environment**: Chrome 138.0.7204.169, Windows 10  
   **Date Logged**: 2025-07-22

---

## DEFECT-009: Same-day scheduling allowed

**Description**: Users can schedule waste pickup for the current day.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Submit a pickup request for today’s date.
   **Expected Result**: System should enforce at least 1-day advance.
   **Actual Result**: Request is accepted.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-010: Pickup can be scheduled in the past

**Description**: App allows users to pick a past date for waste pickup.
**Severity**: High  
**Status**: Open  
**Steps to Reproduce**:

1. Submit a pickup request for a past date.
   **Expected Result**: Form should reject past dates.
   **Actual Result**: Request goes through.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-011: Login form lacks Confirm Password field

**Description**: No confirmation field is provided to prevent password typos.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Go to the Login form.
   **Expected Result**: Confirm Password field should be present.
   **Actual Result**: It is missing.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-012: Quiz score counter keeps increasing post-completion

**Description**: After finishing the quiz, the score counter keeps incrementing.
**Severity**: Low  
**Status**: Open  
**Steps to Reproduce**:

1. Complete the quiz.
2. Wait without refreshing the page.
   **Expected Result**: Score should freeze after quiz ends.
   **Actual Result**: Score keeps going up.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-013: Blog comment not reflected on user profile

**Description**: Comments left under blog posts don't appear in the user's "My Comments" section.
**Severity**: Medium  
**Status**: Open  
**Steps to Reproduce**:

1. Go to Community tab.
2. Leave a blog comment.
3. Check "My Comments" in your profile.
   **Expected Result**: Comment should appear in your profile.
   **Actual Result**: No comment shown.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-014: Pickup requests not listed on user profile

**Description**: After submitting a request, it's not visible under “My Requests.”
**Severity**: High  
**Status**: Open  
**Steps to Reproduce**:

1. Submit a request.
2. Go to Profile > My Requests.
   **Expected Result**: Request should be listed.
   **Actual Result**: List is empty.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

---

## DEFECT-015: Notification popup stays open across tab navigation

**Description**: Clicking another tab doesn't close the notification popup triggered by the bell icon.
**Severity**: Low  
**Status**: Open  
**Steps to Reproduce**:

1. Click notification bell icon.
2. Switch to another tab (e.g., Home, Profile).
   **Expected Result**: Notification should close on tab change.
   **Actual Result**: Popup remains open.
   **Environment**: Chrome 138.0.7204.169  
   **Date Logged**: 2025-07-22

# 🐛 Defect Log – CleanCity Waste Pickup Scheduler

| Defect ID | Title                                                 | Date Found | Steps to Reproduce                                        | Expected Result                      | Actual Result                 | Severity | Status | Tester |
| --------- | ----------------------------------------------------- | ---------- | --------------------------------------------------------- | ------------------------------------ | ----------------------------- | -------- | ------ | ------ |
| D001      | Invalid characters allowed in username field          | 2025-07-22 | Go to registration form → Enter `""` as username → Submit | Validation error should appear       | Registration proceeds         | High     | Open   | Steph  |
| D002      | Non-functional "Login here" link on registration page | 2025-07-22 | Go to registration → Click "Login here"                   | Should redirect to login             | Nothing happens               | Medium   | Open   | Steph  |
| D003      | Invalid Request ID format accepted in Feedback form   | 2025-07-22 | Submit gibberish in "Request ID" (e.g., `abc123`)         | Validation error                     | Feedback submitted            | High     | Open   | Steph  |
| D004      | Very long names accepted in waste request form        | 2025-07-22 | Enter a name >100 chars → Submit                          | Should reject input                  | Request submitted             | Medium   | Open   | Steph  |
| D005      | Multiple waste pickup requests allowed for same date  | 2025-07-22 | Submit a request for today → Repeat                       | Duplicate request should be rejected | Both requests accepted        | High     | Open   | Steph  |
| D006      | Duplicate status update popup in Admin panel          | 2025-07-22 | Update request status → Click OK                          | Only one success popup               | Two popups appear             | Low      | Open   | Steph  |
| D007      | No hamburger menu on mobile                           | 2025-07-22 | Resize window/switch to mobile → Look for menu            | Should see a hamburger menu          | No menu visible               | Medium   | Open   | Steph  |
| D008      | Duplicate users can register with same info           | 2025-07-22 | Register same details twice                               | Should alert "user already exists"   | Both registrations go through | High     | Open   | Steph  |
| D009      | Same-day pickup allowed                               | 2025-07-22 | Submit pickup for today’s date                            | Should reject same-day pickup        | Request is accepted           | Medium   | Open   | Steph  |
| D010      | Pickup can be scheduled for past dates                | 2025-07-22 | Submit request for a past date                            | Should reject request                | Request is accepted           | Medium   | Open   | Steph  |
| D011      | No Confirm Password field on Registration             | 2025-07-22 | Go to Register page                                       | Should have "Confirm Password" field | Field is missing              | Medium   | Open   | Steph  |
| D012      | Quiz score keeps increasing after completion          | 2025-07-22 | Complete quiz → Click again                               | Score should freeze                  | Score keeps going up          | Low      | Open   | Steph  |
| D013      | Blog comments not showing in user profile             | 2025-07-22 | Comment on a post → Go to profile → My Comments           | Comment should appear                | No comments listed            | Medium   | Open   | Steph  |
| D014      | Waste pickup request not visible in "My Requests"     | 2025-07-22 | Submit request → Go to profile → My Requests              | New request should appear            | Request not listed            | High     | Open   | Steph  |
| D015      | Notification popup doesn't close when changing tabs   | 2025-07-22 | Click bell → Click another tab                            | Popup should disappear               | Popup remains stuck           | Low      | Open   | Steph  |
