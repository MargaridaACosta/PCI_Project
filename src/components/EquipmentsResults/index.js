import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchEquipmentsStart } from '../../redux/Equipments/equipments.actions'
import Equipment from './Equipment'
import {
    Tabs,
    Tab,
} from '@material-ui/core'

import './../../styles/components/equipments.scss';

const mapState = ({ equipmentsData }) => ({
    equipments: equipmentsData.equipments
})

const EquipmentsResults = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { filterType } = useParams();
    const { equipments } = useSelector(mapState);
    const [search, setSearch] = useState("");

    const tabNameToIndex = {
        0: '',
        1: "Câmaras",
        2: "Drones",
        3: "Projetores",
        4: "Som",
        5: "Oficinas",
        6: "Oficinas_Gráficas"
    };

    const Equipamentos = useMemo(() => {
        if (!search) return equipments;

        return equipments.filter(equipamento => {
            return equipamento.nome.toLowerCase().includes(search.toLowerCase())
        })

    }, [search, equipments])

    console.log(equipments);

    useEffect(() => {
        dispatch(
            fetchEquipmentsStart({ filterType })
        )
    }, [filterType]);

    const handleChange = (e, newValue) => {
        setSelectedTab(newValue);
        history.push(`/equipments/${tabNameToIndex[newValue]}`)
    }
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="equipments pb-56">


            <h2 className="text-red mb-24">
                EQUIPAMENTOS
            </h2>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Todos" />
                <Tab label="Câmaras" />
                <Tab label="Drones" />
                <Tab label="Projetores" />
                <Tab label="Som" />
                <Tab label="Oficinas" />
                <Tab label="Oficinas Gráficas" />
            </Tabs>

            {equipments.length < 1
                ? <>
                    <div className="equipments">
                        <div className="container m-auto justify-center flex">
                            <h3 className="text-red inline-block flex">
                                NÃO EXISTEM EQUIPAMENTOS DISPONÍVEIS
                        </h3 >
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
                        {Equipamentos.map((equipment, index) => {
                            const {
                                categoria,
                                video,
                                descricao1,
                                descricao2,
                                descricao3,
                                descricao4,
                                descricao5,
                                descricao6,
                                descricao7,
                                descricao8,
                                disponibilidade,
                                imagemDescricao1,
                                imagemDescricao2,
                                imagemDescricao3,
                                imagemDescricao4,
                                imagemDescricao5,
                                imagemDescricao6,
                                imagemDescricao7,
                                imagemDescricao8,
                                nome,
                                preço,
                                quantidade,
                                thumbnail,
                                documentID
                            } = equipment;

                            const configEquipment = {
                                ...equipment
                            }
                            return (
                                <Equipment key={index} {...configEquipment} />
                            )
                        })}
                    </div>
                </>
            }


        </div>
    )
}

export default EquipmentsResults;
