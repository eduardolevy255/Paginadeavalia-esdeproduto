import React, { useState } from 'react';
// CORREÇÃO: Importa o CSS da mesma pasta
import './style.css'; 

// Importa ícones essenciais
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { FcGoogle } from 'react-icons/fc'; 

// Renomeado para 'Login' (PascalCase)
const Login = () => {
    // 1. Estados
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    // 2. Handler de Submissão
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Por favor, preencha o e-mail e a senha para continuar.');
            return;
        }

        // Lógica de Login (Substitua por uma chamada à API real)
        console.log('Tentativa de Login:', { email, password });
        alert('Login realizado com sucesso! (Simulação)');
        
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                
                <h1 className="login-title">Som Store</h1>
                <p className="login-subtitle">Entre para acessar seus instrumentos</p>

                {/* Campo de E-mail */}
                <div className="input-group">
                    <label htmlFor="email" className="input-label-with-icon">
                        <FaEnvelope className="icon" /> E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                        autoComplete="username" 
                    />
                </div>

                {/* Campo de Senha com Ícone e Toggle */}
                <div className="input-group">
                    <label htmlFor="password" className="input-label-with-icon">
                        <FaLock className="icon" /> Senha
                    </label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mínimo 6 caracteres"
                            required
                            autoComplete="current-password" 
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                        >
                            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                    </div>
                </div>

                {/* Exibição de Erros */}
                {error && <p className="error-message">{error}</p>}

                {/* Botão Principal */}
                <button type="submit" className="login-button">
                    ENTRAR
                </button>

                {/* Links de Suporte */}
                <div className="support-links">
                    <a href="/forgot-password">Esqueceu a Senha?</a>
                    <span>|</span>
                    <a href="/register">Criar Conta</a>
                </div>
                
                {/* Login Social */}
                <p className="social-divider">ou entre com</p>
                <button type="button" className="social-button google-login">
                    <FcGoogle size={20} /> Login com Google
                </button>
            </form>
        </div>
    );
};

export default Login;