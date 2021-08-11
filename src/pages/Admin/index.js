import React from 'react';

import './../../styles/pages/admin.scss';


const Admin = (props) => {

    return (
        <div className="admin container m-auto mb-36">

            <h3 className="pb-16 text-red">COMO UTILIZAR A FERRAMENTA DE ADMINISTRAÇÃO</h3>

            <div className="pb-16">
            <h5>ADICIONAR EQUIPAMENTOS</h5>

           <p> Permite adicionar equipamentos, escolher a disponibilidade, preço e ainda fazer upload de uma imagem representativa do equipamento.

            Existe um botão de editar que permite confirmar a disponibilidade deste, e editar descrição.</p>
            </div>

            <div className="pb-16">
            <h5 >ADICIONAR SALAS/ESPAÇOS</h5>

            <p>Permite adicionar os espaços e salsas, com as especificações e definir disponibilidade de cada um. Permite também especificar os materiais que se encontram dentro do espaço e quantas pessoas são permitidas dentro do mesmo.</p>
            </div>


            <div className="pb-16">
            <h5>ADICIONAR OFICINAS</h5>

            <p>Permite adicionar oficinas, juntamente com os seus equipamentos inseridos, e definir a disponibilidade da cada uma. Permite também especificar o espaço, os materiais disponíveis e quantas pessoas são permitidas dentro do mesmo.

            Existe o botão de editar que permite confirmar a disponibilidade deste, e editar a descrição.</p>

            <p className="text-xs pt-8">Nota: só é possível adicionar equipamentos se os campos obrigatórios estiverem dividamente preenchidos</p>
            </div>

            
        </div>
    );
}

export default Admin;