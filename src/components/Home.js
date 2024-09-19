import React from 'react';
import { Container, Button } from "reactstrap";

const Home = () =>{
    return (
        <div>
            <div className="text-center bg-light rounded px-3 px-sm-4 py-3 py-sm-5">
                <h1> Learn code with me</h1>
                <p>This is a simple web application build using React, NodeJs and Spring boot</p>
                <Container>
                    <Button color="primary" outline>Start Learning</Button>
                </Container>
            </div>
        </div>
    );
}

export default Home;