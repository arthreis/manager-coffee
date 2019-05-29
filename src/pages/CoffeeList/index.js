import React, { Component } from 'react';
import { coffeeService } from '../../services/coffeeService';
import {Redirect} from 'react-router-dom';

export default class CoffeeList extends Component {

    state = {
        coffees: [],
    }

    componentDidMount(){
        this.loadCoffees();
    }
    
    loadCoffees = async () => {
        const response = await coffeeService.list();
        console.log(response.data);
        this.setState({coffees: response.data});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.coffees.map(coffee => (
                        <li key={coffee._id} >{coffee.name} - {coffee._id}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
