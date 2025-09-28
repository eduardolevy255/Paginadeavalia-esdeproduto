import React from 'react';


import './style.css'; 

// dados de simulação para a grade de produtos
const dummyproducts = [
    { id: 1, name: "violão tagima tw-25 folk- ns natural", price: 1069.00, imageUrl: "https://via.placeholder.com/150x150?text=violao" },
    { id: 2, name: "teclado yamaha psr-e473 preto, 61 teclas", price: 3399.00, imageUrl: "https://via.placeholder.com/150x150?text=teclado" },
    { id: 3, name: "guitarra tagima tg-500 roxo metálico", price: 1190.00, imageUrl: "https://via.placeholder.com/150x150?text=guitarra" },
    { id: 4, name: "prato de chimbal profire 14'' alloy", price: 298.00, imageUrl: "https://via.placeholder.com/150x150?text=prato" },
    { id: 5, name: "pedal de distorção mxr m134", price: 950.00, imageUrl: "https://via.placeholder.com/150x150?text=pedal" },
    { id: 6, name: "microfone shure sm58", price: 1599.00, imageUrl: "https://via.placeholder.com/150x150?text=microfone" },
];

const HomePage = () => {
    return (
        <div className="home-page-container">
            {/* 1. header (simulação) */}
            <header className="main-header">
                <h1 className="header-logo">samusic clone</h1>
                <nav className="header-nav">
                    {/* aqui viria o menu de categorias */}
                    <a href="#">cordas</a>
                    <a href="#">bateria</a>
                    <a href="#">áudio</a>
                    <a href="/login">entrar</a> {/* link para a página de login */}
                </nav>
            </header>

            <main className="main-content">
                
                {/* seção principal de destaques (replicando a estrutura da samusic) */}
                <section className="featured-section">
                    <h2 className="section-title">destaques da semana</h2>
                    <div className="product-grid">
                        {dummyproducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                
                {/* você pode adicionar mais seções aqui */}

            </main>

            {/* 3. footer (simulação) */}
            <footer className="main-footer">
                <p>&copy; {new Date().getFullYear()} samusic clone - todos os direitos reservados.</p>
                <div className="footer-links">
                    <a href="#">política de privacidade</a>
                    <a href="#">trocas e devoluções</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;