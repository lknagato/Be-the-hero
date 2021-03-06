import React, {useState} from 'react';
import {FiLogIn } from "react-icons/fi";
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

import logoImg  from  '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

   const [id, setId]  =useState('');
   const history = useHistory();

     async function handleLogin(e){
      e.preventDefault();
      try{
        const response =await api.post('sessions',{ id });

        localStorage.setItem('ongId',id);
        localStorage.setItem('ongName',response.data.name);
        history.push('/profile')

      }catch(err){
        alert('falha ao logar por favor tente mais tarderS')
      }
     }

    return(
      <div className="logon-container">
        <section className="form">
        <img src={logoImg} alt="be the hero"/>
            <form onSubmit={handleLogin}>
            
                <h1>Faça seu Logon</h1>

                <input 
                placeholder=" Sua Id"
                value={id}
                onChange ={e=>setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

               <Link to="/register" className ="back-link ">
               <FiLogIn size={16} color ="#e02041"/>
               nao tem cadastro
              </Link>
            </form>
            

        </section>

        <img src={heroesImg} alt="Heroes"/>
        
      </div>
    
    );
}