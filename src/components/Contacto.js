import React from 'react';
import './Contacto.css';


const Contacto = () => {
    return (
        <section id="contacto" className="contact-section">
            <div className="container">
                <h2 className="section-title">¡Contáctanos!</h2>
                <p className="section-description">¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
                <form action="#" method="POST" className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Correo electrónico:</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" className="form-textarea" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}

export default Contacto;
