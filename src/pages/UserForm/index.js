import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { coffeeService } from '../../services/coffeeService';

const UserForm = ({ handleSubmit, errors, values, handleChange, setFieldValue }) => (
    <form onSubmit={handleSubmit}>
        <input type="text"     placeholder="Name"        name="name"        onChange={handleChange} value={values.name}/>
        <br/>{ !!errors.name && <span>{errors.name}</span> }
        <input type="textarea" placeholder="Description" name="description" onChange={handleChange} value={values.description}/>
        <br/>{ !!errors.description && <span>{errors.description}</span> }
        <input type="number"   placeholder="Price"       name="price"       onChange={ event => setFieldValue('price', event.target.value)} value={values.price}/>
        <br/>{ !!errors.price && <span>{errors.price}</span> }
        <br/>
        <button type="submit">Send</button>
    </form>
);

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
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
            console.log("Editing...");
            coffeeService.edit(id, values);
        }else{
            console.log("Creating...");
            coffeeService.create(values);
        }
    }
})(UserForm);
