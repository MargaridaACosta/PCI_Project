import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchWorkshopsStart } from '../../redux/Workshops/workshops.actions'
import Workshop from './Workshop'
import {
    Tabs,
    Tab,
} from '@material-ui/core'

import './../../styles/components/equipments.scss';

const mapState = ({ workshopsData }) => ({
    workshops: workshopsData.workshops
})

const WorkshopsResults = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { filterType } = useParams();
    const { workshops } = useSelector(mapState);
    const [search, setSearch] = useState("");

    const tabNameToIndex = {
        0: '',
        1: "Oficinas",
        2: "Oficinas_em_Construção",
    };

    const Oficinas = useMemo(() => {
        if (!search) return workshops;

        return workshops.filter(oficina => {
            return oficina.nome.toLowerCase().includes(search.toLowerCase())
        })

    }, [search, workshops])

    console.log(workshops);

    useEffect(() => {
        dispatch(
            fetchWorkshopsStart({ filterType })
        )
    }, [filterType]);

    const handleChange = (e, newValue) => {
        setSelectedTab(newValue);
        history.push(`/workshops/${tabNameToIndex[newValue]}`)
    }
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="equipments pb-56">


            <h2 className="text-red mb-24">
                OFICINAS
            </h2>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Todos" />
                <Tab label="Oficinas" />
                <Tab label="Oficinas Em Construção" />
            </Tabs>

            {workshops.length < 1
                ? <>
                    <div className="equipments">
                        <div className="container m-auto justify-center flex">
                            <h3 className="text-red inline-block flex">
                                NÃO EXISTEM OFICINAS DISPONÍVEIS
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
                        {Oficinas.map((workshop, index) => {
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
                            } = workshop;

                            const configWorkshop = {
                                ...workshop
                            }
                            return (
                                <Workshop key={index} {...configWorkshop} />
                            )
                        })}
                    </div>
                </>
            }


        </div>
    )
}

export default WorkshopsResults;
