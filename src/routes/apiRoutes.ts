
import { Router } from 'express';
/**
 * GET /api/v1/albums
 * @summary This is the summary of the endpoint
 * @tags album
 * @return {array<Song>} 200 - success response - application/json
 */

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
  res.send("What's up doc ?!");
});
