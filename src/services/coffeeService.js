import api from './api';

export var version = () => { 
    return api.get('/');
};

export const coffeeService = {
    create(newCoffee) {
        let coffee = {
            "name" : newCoffee.name,
            "description" : newCoffee.description,
            "imagePath" : newCoffee.name.toLowerCase(),
            "price" : newCoffee.price
        };
        return api.post(`/product/coffee`, coffee);
    },
    edit(id, editedCoffee) {
        let coffee = {
            "name" : editedCoffee.name,
            "description" : editedCoffee.description,
            "imagePath" : editedCoffee.name.toLowerCase(),
            "price" : editedCoffee.price
        };
        return api.put(`/product/coffee?coffeeId=${id}`, coffee);
    },
    delete(coffeeId) {
        return api.delete(`/product/coffee?coffeeId=${coffeeId}`);
    },
    list() {
        return api.get('/product/coffees');
    },
    version
    ,
    findById(id) {
        return api.get(`/product/coffee/${id}`);      
    }
}