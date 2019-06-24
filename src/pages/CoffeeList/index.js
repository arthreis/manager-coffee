import React, { Component } from 'react';
import { coffeeService } from '../../services/coffeeService';
import CoffeeCard from './../../components/CoffeeCard';
import PopUp from "../../components/PopUp";

export default class CoffeeList extends Component {

    constructor(props){
        super(props);

        this.state = {
            popup: {
                opened: false,
            },
            coffees: []
        }
    }

    tooglePopUp = (coffee) => {
        this.setState({
            ...this.state,
            popup: {
                opened: !this.state.popup.opened,
                message: coffee.name,
            },
        })
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
                    <CoffeeCard coffee={coffee} key={coffee._id} tooglePopUp={ this.tooglePopUp }/>
                ))}
                { this.state.popup.opened ? <PopUp tooglePopUp={ this.tooglePopUp } opened={ this.state.popup.opened } message={this.state.popup.message}/> : null }
            </div>
        );
    }
}
