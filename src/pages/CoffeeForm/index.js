import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { coffeeService } from '../../services/coffeeService';

class CoffeeForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            showPopUp: false,
            message: "",
        }
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.findCoffee(this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props);
        }
    }

    onRouteChanged(props) {
        console.log("ROUTE CHANGED !");
        if(props.match.params.id) {
            console.log("Finding new product...")
            this.findCoffee(this.props.match.params.id);
        } else {
            console.log("Cleaning form...")
            this.props.setValues({
                ...this.props.values,
                product:{
                    name: "",
                    description: "",
                    price: "",
                }
            });
        }
    }

    findCoffee = async () => {
        const response = await coffeeService.findById(this.props.match.params.id);
        console.log(response.data);
        this.props.setValues({
            ...this.props.values,
            product: response.data,
        });
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
            price: "",
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

    handleSubmit: async (values, { props }) => {
        const { id } = props.match.params;
        const { product } = values;

        product.id = id;

        if (id) {
            console.log("Editing...");

            const response = await coffeeService.edit(product.id, product);
            console.log(response.data);

            if(response.status === 200){
                props.history.push('/coffee/list');
                //TODO show feedback
            }
        } else {
            console.log("Creating...");

            const response = await coffeeService.create(product);
            console.log(response.data);

            if(response.status === 200){
                props.history.push('/coffee/list');
                //TODO show feedback
            }
        }
    }
})(CoffeeForm);
