import React, { Component } from 'react';
import { coffeeService } from '../../services/coffeeService';
import styles from './styles';

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
                {this.state.coffees.map(coffee => (
                    <div key={coffee._id} style={styles.card}>
                        <div><b> {coffee.name} </b></div>
                        
                        <span> {coffee._id} </span>
                        
                        <div style={styles.footer}>
                            <button>EDIT</button><button>DELETE</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
