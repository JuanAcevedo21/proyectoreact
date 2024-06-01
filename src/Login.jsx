import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const [Usuario, setUsuario] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const [Error, setError] = useState('');
    const navigate = useNavigate();

    const cambiarUsuario = (evento) => {
        setUsuario(evento.target.value);
    };

    const cambiarContraseña = (evento) => {
        setContraseña(evento.target.value);
    };

    const Ingresar = () => {
        if (Usuario === 'admin' && Contraseña === 'admin') {
            setError('');
            onLogin(true);
            navigate('/inicio');
        } else {
            setError('Usuario o Contraseña incorrecto');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {Error && <p className="error-message">{Error}</p>}
            <input
                type="text"
                name="Usuario"
                id="Usuario"
                value={Usuario}
                onChange={cambiarUsuario}
                placeholder="Nombre de usuario"
            />
            <input
                type="password"
                name="Contraseña"
                id="Contraseña"
                value={Contraseña}
                onChange={cambiarContraseña}
                placeholder="Contraseña"
            />
            <button onClick={Ingresar}>Ingresar</button>
        </div>
    );
}

export default Login;
