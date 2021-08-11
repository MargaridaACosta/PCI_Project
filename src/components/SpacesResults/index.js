import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchSpacesStart } from '../../redux/Spaces/spaces.actions'
import Space from './Space'
import {
    Tabs,
    Tab,
} from '@material-ui/core'

import './../../styles/components/equipments.scss';

const mapState = ({ spacesData }) => ({
    spaces: spacesData.spaces
})

const SpacesResults = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { filterType } = useParams();
    const { spaces } = useSelector(mapState);
    const [search, setSearch] = useState("");

    const tabNameToIndex = {
        0: '',
        1: "Espaços",
        2: "Salas",
        3: "Espaços_de_Exposição"
    };

    const Espaços = useMemo(() => {
        if (!search) return spaces;

        return spaces.filter(equipamento => {
            return equipamento.nome.toLowerCase().includes(search.toLowerCase())
        })

    }, [search, spaces])

    console.log(spaces);

    useEffect(() => {
        dispatch(
            fetchSpacesStart({ filterType })
        )
    }, [filterType]);

    const handleChange = (e, newValue) => {
        setSelectedTab(newValue);
        history.push(`/spaces/${tabNameToIndex[newValue]}`)
    }
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="equipments pb-56">


            <h2 className="text-red mb-24">
                ESPAÇOS
            </h2>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Todos" />
                <Tab label="Espaços" />
                <Tab label="Salas" />
                <Tab label="Espaços de Exposição" />
            </Tabs>

            {spaces.length < 1
                ? <>
                    <div className="equipments">
                        <div className="container m-auto justify-center flex">
                            <h3 className="text-red inline-block flex">
                                NÃO EXISTEM ESPAÇOS DISPONÍVEIS
                        </h3>
                        </div>
                    </div>
                </>
                : <>
                    <div className="pt-10 borda">
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>


                    <div className="equipmentsResults">
                        {Espaços.map((space, index) => {
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

                            const configSpace = {
                                ...space
                            }
                            return (
                                <Space key={index} {...configSpace} />
                            )
                        })}
                    </div>
                </>
            }


        </div>
    )
}

export default SpacesResults;
