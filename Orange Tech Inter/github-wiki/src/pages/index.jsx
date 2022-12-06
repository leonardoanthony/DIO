import React from "react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import Repository from "../components/Repository";
import { Container, Image } from "./style";
import {api} from '../services/api'

const Wiki = () => {

    const handleSearch = async () => {
        try {
            const { data } = await api.get(search);
            const already_exists = repos.find((repo) => repo.id === data.id);
            if(!already_exists){
                let obj = {
                    id: data.id,
                    name: data.owner.login,
                    repo_name: data.name,
                    profile: data.owner.avatar_url,
                };
                
                setRepos([...repos, obj]);
            }
        } catch (error) {
            alert('algo deu errado');
        }
    };

    const handleDeleteRepo = (id) => {
        let list = repos.filter((repo) => repo.id !== id);
        setRepos(list);
    }

    const [search, setSearch] = React.useState('');
    const [repos, setRepos] = React.useState([]);

    return (
        <>
            <Container>
                <Image src={logo} />
                <Input value={search} onChange={({target}) => setSearch(target.value)}/>
                <Button onClick={handleSearch}/>
                {repos.map((repo, i) =>  <Repository key={i} repo={repo} deleteRepo={handleDeleteRepo}/> )}
            </Container>
        </>
    );
};

export default Wiki;
