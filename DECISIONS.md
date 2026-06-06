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
