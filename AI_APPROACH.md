# AI Approach

## Objective

Generate grounded meeting insights from transcripts while minimizing hallucinations.

---

## Prompt Design

The prompt enforces:

* Transcript-only reasoning
* Structured JSON output
* Timestamp citations
* No hallucinated attendees
* No hallucinated tasks
* No hallucinated decisions

Example instructions:

* Use ONLY information present in transcript
* Do NOT hallucinate
* Every item must contain citations
* Return ONLY valid JSON

---

## Citation Strategy

Every generated insight contains transcript citations.

Example:

{
"text": "Launch planned for Friday",
"citations": [
{
"timestamp": "00:20"
}
]
}

This enables users to verify AI outputs directly against meeting evidence.

---

## Hallucination Prevention

Implemented techniques:

1. Transcript grounding
2. Explicit anti-hallucination instructions
3. Structured output schema
4. Citation requirements
5. JSON validation

The model is instructed to avoid generating:

* Missing participants
* Unassigned tasks
* Unsupported decisions

---

## Output Validation

Validation steps:

1. Gemini output received
2. Markdown removed
3. JSON parsed
4. Invalid responses rejected
5. Retry mechanism triggered

Retries:

* Maximum attempts: 3
* Delay: 2 seconds

---

## Known Limitations

* AI quality depends on transcript quality
* Speaker identification must exist in transcript
* Ambiguous assignments may produce empty assignees
* Gemini may occasionally return malformed JSON
* Very short transcripts produce limited insights
