// src/pages/Login.js
import { Box, Heading, Input, Button, VStack, Container } from '@chakra-ui/react';
import { useState, useContext, useEffect, useRef } from 'react';
import axios from "axios";
import { AuthContext } from '../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, authDetails: { isAuthenticated } } = useContext(AuthContext);
    const emailInputRef = useRef(null);

    useEffect(() => {
        emailInputRef.current.focus();
    }, []);

    async function handleClick() {
        try {
            let resp = await axios({
                method: "post",
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
                data: {
                    email,
                    password,
                },
            });
            if (resp?.data?.token) {
                login(resp.data.token, email);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <Container maxW={"600px"}>
            <VStack spacing={6}>
                <Heading as="h1" size="xl">
                    Login Page
                </Heading>

                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    ref={emailInputRef}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <Button variant="outline" colorScheme='red' onClick={handleClick}>LOGIN</Button>
            </VStack>
        </Container>
    );
}
