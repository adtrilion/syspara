export async function scoreLead(data: {
  name: string;
  email: string;
  service?: string;
  message?: string;
  source?: string;
}): Promise<number> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return 5;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'user',
            content: `You are a B2B sales qualification expert. Score this lead from 1-10 based on buying intent and fit.

Lead:
- Service interest: ${data.service || 'General'}
- Message: ${data.message || 'No message'}
- Source: ${data.source || 'website'}

Scoring criteria:
- 9-10: Explicit budget, timeline, specific project — ready to buy
- 7-8: Clear need, specific service interest, engaged message
- 5-6: General interest, vague message, exploring options
- 3-4: Very generic, no clear need expressed
- 1-2: Spam-like or completely irrelevant

Return ONLY a single integer between 1 and 10. Nothing else.`,
          },
        ],
        max_tokens: 5,
        temperature: 0.1,
      }),
    });

    const data2 = await res.json();
    const raw = data2.choices?.[0]?.message?.content?.trim() ?? '5';
    const score = parseInt(raw, 10);
    return isNaN(score) ? 5 : Math.min(10, Math.max(1, score));
  } catch {
    return 5;
  }
}
