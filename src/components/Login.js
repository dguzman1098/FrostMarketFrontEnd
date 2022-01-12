import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Button, Form } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import image from '../images/login-bg.jpg';
import UserService from '../services/UserService';
const Login = () => {


    const [jsonData, setJsonData] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState([
        {
            email: '',
            password: ''
        }
    ])

    const handleSubmit = event => {
        event.preventDefault();
        createAUser(user);
        alert(`Your state values: \n 
                email: ${user.email} \n 
                You can replace this alert with your process`);
      };

    const createAUser = () => {

        console.log(user);
        UserService.createUser(user).then((response) => {
            console.log(response.data);
            navigate('/home')
            
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div >

            <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ backgroundColor: 'skyblue', paddingBottom: '25px' }} >
                    <CardTitle style={{ margin: '50px' }}>
                        <h2>WELCOME TO FROSTMARKET</h2>
                    </CardTitle>
                    <Form action='/home/users' method='post' onSubmit={handleSubmit}>
                        <Row form style={{ margin: '50px' }}>
                            <Col md={12} >
                                <FormGroup style={{ paddingLeft: '2%' }}>
                                    <Label for="email">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        type="email"
                                        onChange={e => user.email = e.target.value}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup style={{ paddingLeft: '2%' }}>
                                    <Label for="password">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                        onChange={e => user.password = e.target.value}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                        />
                        <Label
                            check
                            for="exampleCheck"
                        >
                            Check me out
                        </Label>
                        <br />
                        <Button className='button'  type='submit' style={{ margin: '10px', backgroundColor: 'lightgreen' }} >
                            <Link name="link" to="/home">
                                Sign in
                            </Link>

                        </Button>
                    </Form>
                </Card>
            </div>

        </div>
    )
}

export default Login
