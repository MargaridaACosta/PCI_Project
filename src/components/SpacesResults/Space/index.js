import React from 'react';
import { Link } from 'react-router-dom';

const Space = (space) => {
    const {
        capacidade,
        acessibilidade,
        wifi,
        sun,
        categoria,
        nome,
        thumbnail,
        disponibilidade,
        descricao_geral,
        descricao1,
        descricao2,
        descricao3,
        descricao4,
        descricao5,
        descricao6,
        imagemDescricao1,
        imagemDescricao2,
        imagemDescricao3,
        imagemDescricao4,
        imagemDescricao5,
        imagemDescricao6,
        documentID
    } = space;


    console.log(space);
    console.log(imagemDescricao1.value)

    return (
        <>
            {space.disponibilidade === "Disponível"
                ? <>
                    <div className=" shadow-lg card flex mx-auto md:flex-shrink-0 flex-wrap mt-8 ">
                        <Link to={`/space/${documentID}`}>
                            <div className="h-96 w-96 sm:w-96 lg:w-96 xl:w-96 object-cover md:w-96 flex-shrink-0 bg-center" alt={nome} style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                            <div className="w-full">
                                <h5 className="text-red pt-5 pb-5 pl-5">{nome}</h5>
                            </div>
                        </Link>
                    </div>
                </>
                : <>
                    <div className=" shadow-lg card flex mx-auto md:flex-shrink-0 flex-wrap mt-8 ">
                        <Link to={`/space/${documentID}`}>
                            <div className="h-96 w-96 sm:w-96 lg:w-96 xl:w-96 object-cover md:w-96 flex-shrink-0 bg-center" alt={nome} style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                            <div className="w-full">
                                <h5 className="text-red pt-5 pb-5 pl-5">{nome}</h5>
                            </div>
                        </Link>
                    </div>
                </>
            }

        </>
    )
}

export default Space;
