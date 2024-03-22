import './ContactForm.css'
import React, { useState } from 'react';
import formImage from '../../assets/contact.webp'

interface FormValues {
 nome: string;
 sobrenome: string;
 celular: string;
 emailCorporativo: string;
 tamanhoEmpresa: string;
 nomeEmpresa: string;
}

const ContactForm: React.FC = () => {
 const [formValues, setFormValues] = useState<FormValues>({
    nome: '',
    sobrenome: '',
    celular: '',
    emailCorporativo: '',
    tamanhoEmpresa: '',
    nomeEmpresa: '',
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
 };

 return (
    <>
        <h1>Está com duvidas? Estamos sempre prontos para ajudá-lo</h1>
        <p>Pergunte-nos sobre nossos produtos, precificação ou implementação. Nossos especialistas estão aqui para ajudá-lo a traçar um caminho para o sucesso.</p>
        <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <h3>Apenas preencha o formulário para receber o contato necessário o mais rápido possível.</h3>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formValues.nome}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input
                        type="text"
                        id="sobrenome"
                        name="sobrenome"
                        value={formValues.sobrenome}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="celular">Celular</label>
                    <input
                        type="tel"
                        id="celular"
                        name="celular"
                        value={formValues.celular}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailCorporativo">E-mail Corporativo</label>
                    <input
                        type="email"
                        id="emailCorporativo"
                        name="emailCorporativo"
                        value={formValues.emailCorporativo}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="nomeEmpresa">Nome da Empresa</label>
                    <input
                        type="text"
                        id="nomeEmpresa"
                        name="nomeEmpresa"
                        value={formValues.nomeEmpresa}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="tamanhoEmpresa">Tamanho da Empresa</label>
                    <select
                        id="tamanhoEmpresa"
                        name="tamanhoEmpresa"
                        value={formValues.tamanhoEmpresa}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione o tamanho da empresa</option>
                        <option value="1-50">1-50 funcionários</option>
                        <option value="51-300">51-300 funcionários</option>
                        <option value="301-1000">301-1000 funcionários</option>
                        <option value="1001-2000">1001-2000 funcionários</option>
                        <option value="2001+">2001 ou + funcionários</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
            <img src={formImage} alt="Mascotes efetuando um atedimento" className="form-image" />
        </div>
    </>
 );
};

export default ContactForm;
