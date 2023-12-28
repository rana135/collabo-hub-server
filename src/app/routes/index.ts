 
import express from 'express';
import { NotificationRoutes } from '../modules/notification/notification.route';
import { TestimonialRoutes } from '../modules/testimonial/testimonial.route';
import { CollabdataRoutes } from '../modules/collabdata/collabdata.route';
 
const router = express.Router();

const moduleRoutes = [
      {
        path: '/notification',
        route: NotificationRoutes
      },
      {
        path: '/testimonial',
        route: TestimonialRoutes
      },
      {
        path: '/collabdata',
        route: CollabdataRoutes
      },

]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;