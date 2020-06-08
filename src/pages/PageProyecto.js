import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card } from 'semantic-ui-react'

export default function PageProyecto() {

    const [proyecto, setProyecto] = useState([]);

    useEffect(() => {
        getProyectos()
    }, [proyecto]);

    const getProyectos = async () => {
        const res = await axios.get('http://localhost:4000/proyectos/')
        setProyecto(res.data);
    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }} >Lista de Proyectos</h1>
            <br />
            {proyecto.map((proyecto) => (
                <Card style={{width: "80%"}} centered key={proyecto.idProyecto}>
                    <Card.Content>
                        <Card.Header style={{textAlign: "center"}}>{proyecto.nombreproyecto}</Card.Header>
                        <Card.Meta 
                            style={{marginLeft: "20%", marginRight: "20%",  marginTop: "1%"}}>
                             <b>Descripción: </b> {proyecto.descripcion}
                        </Card.Meta>
                        <Card.Meta
                            style={{marginLeft: "20%", marginRight: "20%", marginTop: "1%"}}>
                                <b>Asignatura: </b> {proyecto.nombreasignatura}
                        </Card.Meta>
                        <Card.Meta
                            style={{marginLeft: "20%", marginRight: "20%",  marginTop: "1%"}}>
                                <b>Profesor: </b> {proyecto.nombreprofesor}
                        </Card.Meta>
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}
