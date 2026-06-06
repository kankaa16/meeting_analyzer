# Hintro – Meeting Intelligence Platform

## Overview

Hintro is an AI-powered Meeting Intelligence Platform that helps teams extract meaningful insights from meeting transcripts.

The platform automatically:

* Generates meeting summaries
* Identifies decisions
* Extracts action items
* Detects overdue tasks
* Sends reminder notifications
* Provides transcript-backed citations for every AI-generated insight

The system is designed with a strong focus on grounding AI outputs to transcript evidence and minimizing hallucinations.

---

## Features

### Authentication

* User registration
* User login
* JWT-based authentication
* Protected API routes

### Meeting Management

* Create meetings
* View meetings
* Store meeting transcripts
* Retrieve meeting details

### AI Analysis

* Transcript summarization
* Decision extraction
* Action item extraction
* Follow-up identification
* Timestamp citations

### Action Item Management

* View action items
* Update task status
* Overdue task detection

### Reminder System

* Scheduled cron job
* Email notifications using Nodemailer
* Reminder history tracking

### Documentation

* Swagger API documentation
* Unified API responses
* Request trace IDs

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI

* Google Gemini 2.5 Flash

### Authentication

* JWT
* bcrypt

### Notifications

* Nodemailer
* Gmail SMTP

### Documentation

* Swagger UI

---

## Project Structure

meeting_intelligence/

├── client/

├── src/

│   ├── config/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── services/

│   ├── jobs/

│   └── server.js

├── README.md

├── DECISIONS.md

├── AI_APPROACH.md

├── TESTING.md

├── CHANGELOG.md

└── CHECKLIST.md

---

## Environment Variables

Create a .env file:

PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

EMAIL_USER=your_gmail_address

EMAIL_PASS=your_gmail_app_password

---

## Local Setup

### Clone Repository

git clone <repository-url>

cd meeting_intelligence

### Install Backend Dependencies

npm install

### Install Frontend Dependencies

cd client

npm install

### Run Backend

npm run dev

### Run Frontend

cd client

npm run dev

---

## API Examples

### Register User

POST /api/auth/register

{
"name": "John",
"email": "[john@example.com](mailto:john@example.com)",
"password": "password123"
}

### Login

POST /api/auth/login

{
"email": "[john@example.com](mailto:john@example.com)",
"password": "password123"
}

### Create Meeting

POST /api/meetings

{
"title": "Sprint Planning",
"participants": ["Alice", "Bob"],
"meetingDate": "2026-06-01",
"transcript": [...]
}

### Analyze Meeting

POST /api/meetings/:id/analyze

---

## Deployment

### Backend

Deployed on Render.

### Frontend

Deployed on Vercel.

---

## API Documentation

Swagger documentation available at:

/api-docs

---

## Author

Kanka Oza
