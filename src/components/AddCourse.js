import React, { Fragment } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const AddCourse = () =>{
    return (
        <Fragment>
            <h1> Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder='Enter here' name='userId' id="userId"/>
                </FormGroup>
            </Form>
        </Fragment>
    );
}

export default AddCourse;