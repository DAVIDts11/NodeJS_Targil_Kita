const { users , orders , restaurants } = require('./data' );

exports.restaurantController = {
    getRestaurants(req,res) {
        console.log('All restaurants are here:');
        res.json(restaurants);
    },
    getRestaurant(req,res){
        let  retaurant;
        for (retaurant in restaurants){
            if (retaurant.id == req.params.id){
                res.json(retaurant);
            }
        }
        res.send("Reustourant with this id has not found. ")
    },
    addRestaurants(req,res){
        const {body} = req;
        restaurants.push(body);
        console.log("New restaurant added");
        res.json(restaurants);
}


};
