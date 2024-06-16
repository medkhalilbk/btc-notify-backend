
import { Router } from 'express';
import { userSubscriptionController } from '../controllers/userController';

/**
 * POST /api/v1/users/subscribe
 * @summary This route allows the user to subscribe to the newsletter / notification service
 * @param {Object} requestBody - The request body
 * @param {string} requestBody.email - Email of the user
 * @param {string} requestBody.notificationId - Notification ID of the user (optionally provided by the user)
 * @tags User
 * @return {string} 200 - success response - application/json
 * @example response - 200 - example success response
 * {
 *   "message": "Subscription successful"
 * }
 */

export const apiRoutes = Router();

apiRoutes.post('/v1/users/subscribe', userSubscriptionController );

export default apiRoutes;