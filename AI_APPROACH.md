# AI Approach

## Objective

Generate grounded meeting insights from transcripts while minimizing hallucinations.

The system analyzes meeting transcripts and produces:

* Summaries
* Decisions
* Action items
* Follow-ups

All generated insights are required to reference transcript evidence through timestamp citations.

---

## Prompt Design

The prompt is designed to enforce grounded reasoning and structured output.

The model receives the meeting transcript along with instructions to:

* Use only transcript information
* Avoid assumptions
* Return structured JSON
* Include timestamp citations
* Avoid unsupported decisions or tasks

Example instructions:

* Use ONLY information present in the transcript
* Do NOT hallucinate participants, tasks, or decisions
* Every generated item must contain citations
* Return ONLY valid JSON

This reduces ambiguity and improves consistency across AI responses.

---

## AI Processing Pipeline

Transcript
↓
Prompt Construction
↓
Gemini 2.5 Flash
↓
JSON Extraction
↓
Output Validation
↓
Citation Verification
↓
Meeting Analysis Storage
↓
Action Item Creation

This pipeline ensures AI-generated outputs are validated before being stored and used by downstream features such as reminders and overdue task detection.

---

## Citation Strategy

Every generated insight includes transcript citations.

Example:

```json
{
  "text": "Launch planned for Friday",
  "citations": [
    {
      "timestamp": "00:20"
    }
  ]
}
```

The citation allows users to verify where the information originated within the transcript.

Benefits:

* Improved transparency
* Easier verification
* Reduced hallucination risk
* Better user trust

---

## Hallucination Prevention

The following techniques are used to minimize hallucinated outputs:

1. Transcript grounding
2. Explicit anti-hallucination instructions
3. Structured output schema
4. Citation requirements
5. JSON validation
6. Output retries

The model is instructed to avoid generating:

* Unsupported decisions
* Missing participants
* Invented action items
* Unsupported assignments
* Information not present in the transcript

---

## Output Validation

After receiving the Gemini response:

1. Markdown wrappers are removed
2. JSON is extracted
3. JSON is parsed
4. Structure is validated
5. Invalid outputs are rejected
6. Retry mechanism is triggered if needed

Retries:

* Maximum attempts: 3
* Delay between attempts: 2 seconds

This helps handle malformed or incomplete AI responses.

---

## Grounding Strategy

The application follows a transcript-first approach.

Rules:

* Decisions must be supported by transcript evidence
* Action items must be explicitly mentioned
* Citations are required for generated insights
* Unsupported information is discarded

This ensures generated content remains traceable to the source transcript.

---

## Known Limitations

* AI quality depends on transcript quality
* Missing timestamps reduce citation accuracy
* Speaker identification must exist in the transcript
* Ambiguous assignments may produce empty assignees
* Gemini may occasionally return malformed JSON
* Very short transcripts may produce limited insights
* Highly unstructured transcripts can reduce extraction accuracy
