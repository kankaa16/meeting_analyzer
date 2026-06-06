# Changelog

## v1.0

### Authentication

* User registration
* User login
* JWT authentication
* Protected API routes

### Meeting Management

* Meeting creation
* Meeting retrieval
* Meeting details endpoint
* Transcript storage

### AI Analysis

* Gemini 2.5 Flash integration
* Summary generation
* Decision extraction
* Action item extraction
* Follow-up detection
* Transcript citation support
* Grounded AI responses

### Action Items

* Action item storage
* Status tracking
* Overdue detection

### Reminder System

* Scheduled cron job
* Email reminders using Nodemailer
* Reminder history tracking

### API Enhancements

* Swagger OpenAPI documentation
* Unified API response format
* Request trace IDs
* Global error handling

### Deployment

* Backend deployed to Render
* Frontend deployed to Vercel

---

## v1.1

### Validation

* Added express-validator based input validation
* Request validation middleware
* Consistent validation error responses

### Testing

* Added Jest test suite
* Added Supertest API tests
* Authentication validation tests
* Protected route tests

### DevOps

* Added Docker support
* Added Dockerfile and .dockerignore
* Added GitHub Actions CI pipeline

### Documentation

* Added README.md
* Added DECISIONS.md
* Added AI_APPROACH.md
* Added TESTING.md
* Added CHECKLIST.md

### Reliability Improvements

* Improved AI response validation
* Added retry mechanism for malformed AI responses
* Improved API consistency
* Improved logging and traceability
