import { Context } from 'hono';

export const handleGithubRequest = async (c: Context<{ Bindings: Env }>) => {
	const username = c.req.param('username');
	const Cachedres = await c.env.CACHE.get('username', 'json');

	if (Cachedres) {
		return c.json(Cachedres);
	}

	const res = await fetch(`https://api.github.com/users/${username}/repos`, {
		headers: {
			'User-Agent': 'CF-Worker',
		},
	});

	const data: unknown = await res.json();
	await c.env.CACHE.put('username', JSON.stringify(data));
	return c.json(data as Record<string, unknown>);
};
