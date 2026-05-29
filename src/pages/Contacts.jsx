import React, { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    let currentErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (name.trim().length < 2) {
      currentErrors.name = 'Имя должно быть не короче 2 символов';
      isValid = false;
    }
    if (!email.includes('@')) {
      currentErrors.email = 'Введите корректный email';
      isValid = false;
    }
    if (message.trim().length < 5) {
      currentErrors.message = 'Сообщение слишком короткое';
      isValid = false;
    }

    setErrors(currentErrors);

    if (isValid) {
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <main className="container">
      <h1>Контакты</h1>
      <div className="contacts">
        <div className="contact-info">
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <strong>Адрес:</strong> г. Ростов-на-Дону, пер Газетный. 72Д
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <strong>Телефон:</strong> +7 (999) 123-45-67
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <strong>Email:</strong> hello@makavka.ru
          </p>
          <p>
            <i className="fas fa-clock"></i>
            <strong>Время работы:</strong> Пн–Вс: 08:00 – 21:00
          </p>
          <div className="map">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.7115,47.2215,39.7165,47.2265&layer=mapnik&marker=47.224030,39.714043"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen
              title="Карта"
            ></iframe>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Напишите нам</h3>
          <form id="feedback-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="error-message">{errors.name}</div>
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="error-message">{errors.email}</div>
            
            <textarea
              rows="4"
              placeholder="Ваше сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="error-message">{errors.message}</div>
            
            <button type="submit" className="btn btn-prod">
              Отправить
            </button>
            {isSuccess && (
              <div className="success-message">
                Спасибо! Мы свяжемся с вами.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contacts;