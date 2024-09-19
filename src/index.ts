// src/app.ts
import { Hono } from 'hono';
import aiRoute from './routes/aiRoute';
import githubRoute from './routes/githubRoute';
import movieRoute from './routes/movieRoute';

const app = new Hono<{ Bindings: Env }>();

// Use the AI route
app.route('/ai', aiRoute);
app.route('/github', githubRoute);
app.route('/movies', movieRoute);

export default app;
