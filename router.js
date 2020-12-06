const { Router } = require('express');
const { orderController , userController , restaurantController } = require('./controller.js' );
const restaurantRouter = new Router();
const userRouter = new Router();
const orderRouter = new Router();
module.exports = { restaurantRouter , userRouter , orderRouter };

restaurantRouter.get('/',restaurantController.getRestaurants); //localhostn:3000/api/retaurants
restaurantRouter.get('/:id',restaurantController.getRestaurant); //localhostn:3000/api/retaurants/5
restaurantRouter.post('/',restaurantController.addRestaurants); //localhostn:3000/api/retaurants
// restaurantRouter.put('/:id',restaurantController.updateRestaurants); //localhostn:3000/api/retaurants
// restaurantRouter.delete('/:id',restaurantController.deleteRestaurants); //localhostn:3000/api/retaurants
