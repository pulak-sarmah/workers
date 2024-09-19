// src/controllers/aiController.ts
import { Ai } from '@cloudflare/ai';
import { Context } from 'hono';

export const handleAiRequest = async (c: Context<{ Bindings: Env }>) => {
	// Extract the request body
	const body = await c.req.json();

	// Access environment variables and handle AI logic
	const ai = new Ai(c.env.AI);
	const messages = [
		{
			role: 'system',
			content: 'You are a funny and friendly coding assistant. Help me with the task that I am working on.',
		},
		{
			role: 'user',
			content: body.message,
		},
	];

	// Run AI process
	const res = await ai.run('@cf/mistral/mistral-7b-instruct-v0.1', {
		messages,
	});

	// Return the result
	return c.json({ res });
};
