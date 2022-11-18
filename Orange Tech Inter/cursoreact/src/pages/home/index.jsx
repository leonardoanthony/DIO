import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Link to="/login">Ir para o Login</Link>
        </>
    );
};

export default Home;
