import { Hono } from 'hono';
import { handleGithubRequest } from '../controller/githubController';

const githubRoute = new Hono<{ Bindings: Env }>();

githubRoute.get('/:username', handleGithubRequest);

export default githubRoute;
