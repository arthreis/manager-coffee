import api from './api';

export var version = () => { 
    const response = api.get('/');
    console.log(response);    
    return response;
};

export const coffeeService = {
    create(newCoffee) {
        let coffee = {
            "name" : newCoffee.name,
            "description" : newCoffee.description,
            "imagePath" : newCoffee.name.toLowerCase(),
            "price" : newCoffee.price
        };
        const response = api.post(`/product/coffee`, coffee);
        console.log(response);
        return response;
    },
    edit(id, editedCoffee) {
        let coffee = {
            "name" : editedCoffee.name,
            "description" : editedCoffee.description,
            "imagePath" : editedCoffee.name.toLowerCase(),
            "price" : editedCoffee.price
        };
        const response = api.put(`/product/coffee?coffeeId=${id}`, coffee);
        console.log(response);
        return response;
    },
    delete(coffeeId){
        const response = api.delete(`/product/coffee?coffeeId=${coffeeId}`);
        console.log(response);
        return response;
    },
    list(){
        const response = api.get('/product/coffees');
        console.log(response);
        return response;
    },
    version
}