import React, { Component } from 'react';
import { coffeeService } from '../../services/coffeeService';
import CoffeeCard from './../../components/CoffeeCard';

export default class CoffeeList extends Component {

    state = {
        coffees: [],
    }

    componentDidMount(){
        this.loadCoffees();
    }

    loadCoffees = async () => {
        const response = await coffeeService.list();
        this.setState({coffees: response.data});
    }

    render() {
        return (
            <div>
                {this.state.coffees.map(coffee => (
                    <CoffeeCard coffee={coffee} key={coffee._id} />
                ))}
            </div>
        );
    }
}
