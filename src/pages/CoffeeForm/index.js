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
        this.props.setValues({
            ...this.props.values,
            product: response.data,
        });
        this.setState({ product: response.data });
    }

    render() {

        const {handleSubmit, handleChange, setFieldValue, values, errors} = this.props;

        return (
            <form onSubmit={handleSubmit} >

                <input type="text"     placeholder="Name"        name="product.name"        onChange={handleChange} value={values.product.name}/>
                { !!errors.product && errors.product.name && <span>{errors.product.name}</span> }<br/>

                <input type="textarea" placeholder="Description" name="product.description" onChange={handleChange} value={values.product.description}/>
                { !!errors.product && errors.product.description && <span>{errors.product.description}</span> }<br/>

                <input type="text"   placeholder="Price"       name="product.price"       onChange={ event => setFieldValue('product.price', event.target.value)} value={values.product.price}/>
                { !!errors.product && errors.product.price && <span>{errors.product.price}</span> }<br/>
                <br/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        product:{
            name: "",
            description: "",
            price: 0,
        }
    }),

    validateOnChange: false,

    validateOnBlur: false,

    validationSchema: Yup.object().shape({
        product: Yup.object().shape({
            name: Yup.string().required('Required field'),
            description: Yup.string(),
            price: Yup.number().typeError("Invalid number").positive("Can't be negative").required('Required field'),
        })
    }),

    handleSubmit: (values, { props }) => {
        const { id } = props.match.params;
        console.log(values.product);

        if (id) {
            console.log("Editing...");
            console.log(values.product);
            coffeeService.edit(id, values.product);
        } else {
            console.log("Creating...");
            console.log(values.product);
            coffeeService.create(values.product);
        }
    }
})(CoffeeForm);
