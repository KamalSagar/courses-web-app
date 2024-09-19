import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CartSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardSubtitle,
} from "reactstrap";

const Course = ({course}) => {
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button className="ms-2" color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;