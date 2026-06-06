# Technical Decisions

## Database Choice

### Selected

MongoDB

### Why

* Flexible schema for AI-generated outputs
* Easy integration with Node.js
* Fast development cycle
* Supports nested structures such as citations and action items

### Alternatives Considered

* PostgreSQL
* MySQL

### Trade-Offs

Pros:

* Flexible
* JSON-friendly

Cons:

* Less strict schema enforcement

---

## Authentication Strategy

### Selected

JWT Authentication

### Why

* Stateless
* Easy frontend integration
* Scalable

### Alternatives

* Session-based authentication

### Trade-Offs

Pros:

* Scalable
* Lightweight

Cons:

* Token revocation is harder

---

## AI Integration

### Selected

Google Gemini 2.5 Flash

### Why

* Fast inference
* Cost-effective
* Structured JSON output support

### Alternatives

* OpenAI GPT
* Claude

### Trade-Offs

Pros:

* Fast
* Affordable

Cons:

* Occasional malformed JSON

---

## Notification Strategy

### Selected

Nodemailer + Gmail SMTP

### Why

* Easy setup
* Real email delivery
* Free for development

### Alternatives

* Telegram Bot
* Twilio
* SendGrid

### Trade-Offs

Pros:

* Simple
* Reliable

Cons:

* Gmail sending limits

---

## Architecture

### Selected

MVC Architecture

### Why

* Separation of concerns
* Maintainability
* Easier testing

### Layers

Routes → Controllers → Services → Models

### Trade-Offs

Pros:

* Organized codebase

Cons:

* Slightly more boilerplate



## API Response Strategy

### Selected

Unified Response Format

### Why

* Consistent API responses across all endpoints
* Easier frontend integration
* Simplifies debugging and logging
* Improves maintainability

### Alternatives Considered

* Different response structures for different endpoints

### Trade-Offs

#### Pros

* Predictable API behavior
* Easier error handling
* Better developer experience

#### Cons

* Slightly larger response payloads

---

## Documentation Strategy

### Selected

Swagger OpenAPI Documentation

### Why

* Interactive API testing
* Easy developer onboarding
* Industry-standard API specification
* Automatically generated API documentation

### Alternatives Considered

* Postman Collections
* Manual API documentation

### Trade-Offs

#### Pros

* Interactive documentation
* Self-documenting APIs
* Easy testing and debugging

#### Cons

* Requires maintaining route annotations

---

## Deployment Strategy

### Selected

Render (Backend) + Vercel (Frontend)

### Why

* Fast deployment process
* Free developer tier
* Automatic GitHub integration
* Suitable for assignment-scale projects

### Alternatives Considered

* AWS
* Railway
* DigitalOcean

### Trade-Offs

#### Pros

* Simple deployment
* Minimal infrastructure management
* Easy continuous deployment

#### Cons

* Cold starts on free tier
* Resource limitations compared to dedicated infrastructure
