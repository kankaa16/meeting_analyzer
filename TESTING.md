# Testing

## Authentication

### Registration

Expected:

* User created successfully

Result:

* Passed

---

### Login

Expected:

* JWT returned

Result:

* Passed

---

## Meetings

### Create Meeting

Expected:

* Meeting stored in MongoDB

Result:

* Passed

---

### Get Meetings

Expected:

* User-specific meetings returned

Result:

* Passed

---

## AI Analysis

### Analyze Transcript

Expected:

* Summary generated
* Decisions generated
* Action items generated
* Citations generated

Result:

* Passed

---

## Action Items

### Create Action Items

Expected:

* Action items saved

Result:

* Passed

---

### Update Status

Expected:

* Status updated

Result:

* Passed

---

## Overdue Detection

### Detect Overdue Tasks

Expected:

* Pending overdue tasks returned

Result:

* Passed

---

## Reminder System

### Send Reminder Email

Expected:

* Email delivered

Result:

* Passed

---

## Edge Cases

### Empty Transcript

Expected:

* No insights generated

Result:

* Passed

### Missing Assignee

Expected:

* Assignee remains empty

Result:

* Passed

### Gemini Service Failure

Expected:

* Retry mechanism triggered

Result:

* Passed
