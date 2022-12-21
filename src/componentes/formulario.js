import React from 'react';
import '../hojas-de-estilo/formulario.css';
import { useState } from 'react';
import { FcMusic } from 'react-icons/fc'


function Formulario (props) {
    
    const [input, setInput] = useState ('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }
    console.log('Escribiendo...');

    const manejarEnvio = e => {
        e.preventDefault()

        const datosFormulario = {
            id: input,
            texto: input,
            completada: false,
        }
        props.onSubmit(datosFormulario);
    }


    return(

        <div className='contenedor-formulario'>
            <h2>Consultas por Clases o Presentaciones <FcMusic/></h2>
        <form className= 'tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type= 'text'
            placeholder='Nombre y Apellido'
            name='texto'
            onChange={manejarCambio}
            /></form>


            <form className= 'tarea-formulario'
        onSubmit={manejarEnvio}>

        
            <input
            className='tarea-input'
            type= 'text'
            placeholder='Teléfono'
            name='texto'
            onChange={manejarCambio}
            /></form>

            <form className= 'tarea-formulario'
        onSubmit={manejarEnvio}>
       
            <input
            className='tarea-input'
            type= 'text'
            placeholder='Email'
            name='texto'
            onChange={manejarCambio}
            /></form>

        <form className= 'tarea-formulario'
        onSubmit={manejarEnvio}>
        
            <input
            className='tarea-input'
            type= 'text'
            placeholder='Escribe aquí tu consulta'
            name='texto'
            onChange={manejarCambio}
            />
        </form>
        <form>
        <button className= 'tarea-boton'>
        Enviar
        </button>
        </form>
        </div>

    )
}


        
export default Formulario;
