import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
import app from '..';
import { handleFavMovieRequest, handleModifyMovieRequest, handleMovieRequest, handleMovieRequestById } from '../controller/movieController';

const movieRoute = new Hono<{ Bindings: Env }>();

movieRoute.get('/', handleMovieRequest);
movieRoute.get('/fav', handleFavMovieRequest);
movieRoute.get('/:id', handleMovieRequestById);
movieRoute.put('/:id', handleModifyMovieRequest);
export default movieRoute;
