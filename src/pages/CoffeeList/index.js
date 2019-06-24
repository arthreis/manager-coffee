import React, { Component } from 'react';
import { coffeeService } from '../../services/coffeeService';
import CoffeeCard from './../../components/CoffeeCard';
import PopUp from "../../components/PopUp";
import styles from "./style";

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

    loadPopup = (coffee) => {
        this.setState({
            ...this.state,
            popup:{
                opened: !this.state.popup.opened,
                title: "Confirm exclusion",
                message: `Confirm exclusion of coffee ${coffee.name} ?`,
                confirm: (coffee) => this.deleteCoffee(coffee),
                close: this.loadPopup,
                object: coffee,
            }
        })
    }

    componentDidMount(){
        this.loadCoffees();
    }

    loadCoffees = async () => {
        console.log("Loading coffees... ["+this.state.coffees.length+"]");
        const response = await coffeeService.list();
        this.setState({coffees: response.data});
    }

    closePopup = () => {
        this.setState({
            ...this.state,
            popup: {
                opened: false,
            }
        });
    }

    deleteCoffee = async (coffee) => {
        console.log(`Deleting ${coffee.name}...`);
        const response = await coffeeService.delete(coffee._id);

        if (response.status === 200) {
            console.log(response.data);
            this.closePopup();
            this.loadCoffees();
        }
    }

    render() {
        return (
            <div style={styles.content}>
                {this.state.coffees.map(coffee => (
                    <CoffeeCard coffee={coffee} key={coffee._id} actionConfirmDelete={ this.loadPopup }/>
                ))}
                { this.state.popup.opened ? <PopUp popup={ this.state.popup } close={ this.closePopup }/> : null }
            </div>
        );
    }
}
