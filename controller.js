const { users , orders , restaurants } = require('./data' );

exports.restaurantController = {
    getRestaurants(req,res) {
        console.log('All restaurants are here:');
        res.json(restaurants);
    },
    getRestaurant(req,res){
       // let  retaurant;
       let isIdFound = false;
        for (let i in restaurants){
            const  retaurant = restaurants[i];
            // console.log(req.params.id);
            // console.log(retaurant.id);
            if (retaurant.id == req.params.id){
                res.send(retaurant);
                isIdFound = true;
            }
        }
        if(!isIdFound){
            res.send("Reustourant with this id has not found. ");
        }
    
    },
    addRestaurants(req,res){
        const {body} = req;
        restaurants.push(body);
        console.log("New restaurant added");
        res.json(restaurants);
}


};
