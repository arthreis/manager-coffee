import React from 'react';
import styles from './styles';
import {Link} from 'react-router-dom';

const CoffeeCard = ( { coffee } ) => (
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
            <Link to="/coffee/delete" params={coffee._id}>
                <button>DELETE</button>
            </Link>
        </div>
    </div>
);

export default CoffeeCard;
