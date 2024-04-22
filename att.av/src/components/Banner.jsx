import React from 'react';
import TextBig from './TextBig';
import Button from './Button';


export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <TextBig label="Mundo Senai"/>
                    <p>O Mundo SENAI é uma modalidade prática que insere o estudante em contato direto com a produção criativa, proporcionando  a possibilidade de compartilhar suas experiências adquiridas através de pesquisas valorizando assim a integração família-escola e o público em geral.
</p>
<p>ㅤ</p>
<p> Horário: 8:30 até 12:40.
</p>
<p>Data: 23/04/2024.</p>
<p>
    Local: Senai São José.
</p>

<button className='botaozao'>Inscrição</button>
                   
                </div>
            </div>
            <div className="mundosenai">
                <img src="./ms.PNG" alt="Mundo Senai" srcset="" />
            </div>
        </div>
    )
}