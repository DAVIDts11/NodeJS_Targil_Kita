const { users , orders , restaurants } = require('./data' );

exports.restaurantController = {
    getRestaurants(req,res) {
        console.log('All restaurants are here:');
        res.json(restaurants);
    },
    addRestaurants(req,res){
        const {body} = req;
        restaurants.push(body);
        console.log("New restaurant added");
        res.json(restaurants);
}
};