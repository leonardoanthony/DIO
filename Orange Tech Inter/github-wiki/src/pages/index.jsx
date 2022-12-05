import React from "react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import Repository from "../components/Repository";
import { Container, Image } from "./style";

const Wiki = () => {
    const [repos, setRepos] = React.useState([
        {
            name: "leonardoanthony",
            repo_name: "DIO",
            profile: "https://avatars.githubusercontent.com/u/67436042?v=4",
        },
        {
            name: "thecodeholic",
            repo_name: "php-developer-roadmap",
            profile: "https://avatars.githubusercontent.com/u/4627922?v=4",
        },
        {
            name: "nijige",
            repo_name: "Forca-do-habito",
            profile: "https://avatars.githubusercontent.com/u/64282544?v=4",
        },
    ]);

    return (
        <>
            <Container>
                <Image src={logo} />
                <Input />
                <Button />
                {repos.map((repo) => {
                    return <Repository repo={repo} />;
                })}
            </Container>
        </>
    );
};

export default Wiki;
