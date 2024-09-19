// src/routes/aiRoute.ts
import { Hono } from 'hono';
import { handleAiRequest } from '../controller/aiController';

const aiRoute = new Hono<{ Bindings: Env }>();

aiRoute.post('/', handleAiRequest);

export default aiRoute;
