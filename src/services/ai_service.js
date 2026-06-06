const model =
  require("../config/gemini");

exports.analyzeTranscript =
  async (transcript) => {

    const prompt = `
You are a meeting analysis assistant.

IMPORTANT RULES:

- Use ONLY information present in transcript.
- Do NOT hallucinate.
- Do NOT invent attendees.
- Do NOT invent tasks.
- Do NOT invent decisions.
- Every generated item MUST contain citations.
- Return ONLY valid JSON.
- No markdown.
- No explanation.

ASSIGNEE RULES:

- If a speaker states a task, assign the task to that speaker.
- If a speaker says "I will", "I'll", "I can", assign the task to that speaker.
- Only return empty assignee ("") if no responsible person can be identified.

CITATION RULES:

- Every summary item must have at least one citation.
- Every decision must have at least one citation.
- Every action item must have at least one citation.
- Every follow-up must have at least one citation.

FOLLOW-UP RULES:

- Future discussions, reviews, confirmations, approvals, or check-ins should be extracted as follow-ups.
- Example:
"We should review this next week"
→ Follow Up

DECISION RULES:

- Statements indicating approval, agreement, selection, scheduling, planning, or finalization should be treated as decisions.
- Examples:

"Launch is planned for next Friday"
→ Decision: Launch planned for next Friday

"We will use MongoDB"
→ Decision: MongoDB selected

"Let's deploy on Railway"
followed by agreement
→ Decision: Railway selected for deployment

Format:

{
  "summary":[
    {
      "text":"",
      "citations":[
        {
          "timestamp":""
        }
      ]
    }
  ],
"decisions":[
  {
    "text":"",
    "citations":[
      {
        "timestamp":""
      }
    ]
  }
],
  "actionItems":[
    {
      "task":"",
      "assignee":"",
      "citations":[
        {
          "timestamp":""
        }
      ]
    }
  ],
  "followUps":[]

}

Transcript:
${JSON.stringify(transcript, null, 2)}
`;

    let attempts = 3;

    while (attempts--) {

      try {

        const result =
          await model.generateContent(
            prompt
          );

        const response =
          result.response.text();

        const cleaned =
          response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

      } catch (error) {

        console.log(
          "Gemini attempt failed:",
          error.message
        );

        if (attempts === 0) {
          throw new Error(
            "AI analysis failed"
          );
        }

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              2000
            )
        );
      }
    }
  };