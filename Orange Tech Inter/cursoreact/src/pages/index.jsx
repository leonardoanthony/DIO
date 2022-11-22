import React from "react";

const Teste = () => {
    const [name, setName] = React.useState("Leonardo");

    return (
        <>
            <p style={{ color: "white" }}>{name}</p>
            <button
                onClick={() =>
                    setName((prev) =>
                        prev === "Leonardo" ? "Anthony" : "Leonardo"
                    )
                }
            >
                Mudar
            </button>
        </>
    );
};

export default Teste;
