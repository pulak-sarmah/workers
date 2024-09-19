import { Context } from 'hono';

export const handleMovieRequest = async (c: Context<{ Bindings: Env }>) => {
	const res = await c.env.DB.prepare('select * from movies').all();

	const movies = res.results;

	return c.json(movies);
};

export const handleMovieRequestById = async (c: Context<{ Bindings: Env }>) => {
	const id = c.req.param('id');
	const res = await c.env.DB.prepare('select * from movies where id = ?1').bind(id).run();

	const movie = res.results;

	return c.json(movie);
};

export const handleFavMovieRequest = async (c: Context<{ Bindings: Env }>) => {
	// sort by rating and return top 5
	const res = await c.env.DB.prepare('select * from movies order by rating desc limit 5').all();

	const movies = res.results;

	return c.json(movies);
};

export const handleModifyMovieRequest = async (c: Context<{ Bindings: Env }>) => {
	const body = await c.req.json();

	const res = await c.env.DB.prepare('update movies set rating = ?1 where id= ?2 returning *').bind(body.rating, c.req.param('id')).run();

	const ok = res.success;
	return c.json({ ok });
};
