import React from 'react';
import styles from './styles';
import {Link} from 'react-router-dom';

const Card = ( {coffee, foo, mudaFoo} ) => (
                    <div key={coffee._id} style={styles.card}>
                        <div style={styles.header}>
                            <div> {coffee.name} </div>
                        </div>

                        <div style={styles.content}>
                            {coffee.description}
                        </div>

                        <div style={styles.actions}>
                            <Link to={ { pathname: `/coffee/create/${coffee._id}` } } params={coffee._id}>
                                <button onClick={()=>mudaFoo("asasas")}>EDIT</button>
                            </Link>
                            <Link to="/coffee/delete" params={coffee._id}>
                                <button>DELETE</button>
                            </Link>
                        </div>
                    </div>
);

export default Card;
