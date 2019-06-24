import React, { Component } from 'react';

import styles from './styles';
import { Link } from 'react-router-dom';

class CoffeeCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            coffee: props.coffee
        }
    }

  render() {

    const { coffee } = this.state;
    const { tooglePopUp } = this.props;

    return (
            <div key={coffee._id} style={styles.card}>
                <div style={styles.header}>
                    <div> {coffee.name} </div>
                </div>

                <div style={styles.content}>
                    {coffee.description}
                </div>

                <div style={styles.actions}>
                    <Link to={ { pathname: `/coffee/edit/${coffee._id}` } } params={coffee._id}>
                        <button>EDIT</button>
                    </Link>
                        <button onClick={() => tooglePopUp(this.state.coffee)}>DELETE</button>
                </div>
            </div>
            );

  }
}

export default CoffeeCard;
