
import { Router } from 'express';
import { userSetStopLossController, userSubscriptionController, userUnsubscriptionController} from '../controllers/userController';

/**
 * POST /api/v1/subscriptions
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

apiRoutes.post('/v1/subscriptions', userSubscriptionController );

/**
 * DELETE /api/v1/subscriptions
 * @summary This route allows the user to unsubscribe to the newsletter / notification service
 * @param {Object} requestBody - The request body
 * @param {string} requestBody.email - Email of the user
 * @param {string} requestBody.notificationId - Notification ID of the user (optionally provided by the user)
 * @tags User
 * @return {string} 200 - success response - application/json
 * @example response - 200 - example success response
 * {
 *   "message": "Unsubscription successful"
 * }
 */
apiRoutes.delete('/v1/subscriptions', userUnsubscriptionController );

apiRoutes.post('/v1/users/:email/stop-loss', userSetStopLossController );
export default apiRoutes;