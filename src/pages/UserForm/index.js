import React from 'react';
import { withFormik } from 'formik';

const UserForm = ({ handleSubmit, values, handleChange, setFieldValue }) => (
    <form onSubmit={handleSubmit}>
        <input type="text"     placeholder="Name"        name="name"        onChange={handleChange} value={values.name}/>
        <input type="textarea" placeholder="Description" name="description" onChange={handleChange} value={values.description}/>
        <input type="number"   placeholder="Price"       name="price"       onChange={ event => setFieldValue('price', event.target.value)} value={values.price}/>

        <button type="submit">Send</button>
    </form>
);

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        description: '',
        price: ''
    }),
    handleSubmit: values => {
        console.log(values);
    }
})(UserForm);
