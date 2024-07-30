// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Seu Site. Todos os direitos reservados.</p>
                <p>Feito com <span className="text-red-500">&hearts;</span> pelo Seu Time</p>
            </div>
        </footer>
    );
};

export default Footer;
