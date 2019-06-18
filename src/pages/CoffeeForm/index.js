import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { coffeeService } from '../../services/coffeeService';

class CoffeeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            product: {
                name: "",
                description: "",
                price: 0,
            }
        }
    }

    componentDidMount() {
        if(this.state.id) {
            this.findCoffee(this.state.id);
        }
    }

    findCoffee = async () => {
        const response = await coffeeService.findById(this.state.id);
        console.log(response);
        this.setState({ product: response.data });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>

                <input type="text"     placeholder="Name"        name="name"        onChange={this.props.handleChange} value={this.props.name}/>
                { !!this.props.errors.name && <span>{this.props.errors.name}</span> }<br/>

                <input type="textarea" placeholder="Description" name="description" onChange={this.props.handleChange} value={this.props.description}/>
                { !!this.props.errors.description && <span>{this.props.errors.description}</span> }<br/>

                <input type="number"   placeholder="Price"       name="price"       onChange={ event => this.props.setFieldValue('price', event.target.value)} value={this.props.price}/>
                { !!this.props.errors.price && <span>{this.props.errors.price}</span> }<br/>
                <br/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: props => ({
        name: props.product,
        description: '',
        price: ''
    }),

    validateOnChange: false,

    validateOnBlur: false,

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Required field'),
        description: Yup.string(),
        price: Yup.number().positive("Can't be negative").required('Required field'),
    }),

    handleSubmit: (values, { props }) => {
        const { id } = props.match.params;
        if (id) {
            console.log("Editing..."+values);
            //coffeeService.edit(id, values);
        } else {
            console.log("Creating..."+values);
            //coffeeService.create(values);
        }
    }
})(CoffeeForm);
