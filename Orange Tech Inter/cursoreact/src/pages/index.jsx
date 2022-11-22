import React from "react";

const Teste = () => {
    const [name, setName] = React.useState("Leonardo");

    const handleChange = () => {
        setName((prev) => (prev === "Leonardo" ? "Anthony" : "Leonardo"));
    };
    const handleErase = () => {
        setName("");
    };

    // React.useEffect(() => {
    //     console.log("renderizei");

    //     return () => {
    //         console.log("encerrei");
    //     };
    // }, []);

    // React.useEffect(() => {
    //     console.log("alterei");
    // }, [name]);

    const calculo = React.useMemo(() => {
        console.log('calculei');
        return 10 * 120931128371927468197 / 3;
    },[]);

    console.log(calculo);

    return (
        <>
            <p style={{ color: "white" }}>{name}</p>
            <button onClick={handleChange}>Mudar</button>
            <button onClick={handleErase}>Apagar</button>
        </>
    );
};

export default Teste;
