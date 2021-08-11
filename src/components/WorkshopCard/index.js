import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkshopStart, setWorkshop } from './../../redux/Workshops/workshops.actions'
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { addItem } from './../../redux/Cart/cart.actions'
import Button from './../Forms/Button'
import Loading from './../Loading'
import '../../styles/components.scss';
import './../../styles/components/equipment_card.scss';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import CalendarBase from '../Calendar';

const mapState = state => ({
    workshop: state.workshopsData.workshop,
})

const mapState2 = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const AntTabs = withStyles({
    root: {

    },
    indicator: {
        backgroundColor: '#DA291C',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontSize: '1rem',
        fontFamily: [
            'Proxima Nova',
            'Open sans',
            'sans-serif',
        ].join(','),
        '&:hover': {
            color: '#DA291C',
            opacity: 1,
            outline: 'none',
        },
        '&$selected': {
            color: '#DA291C',
            fontWeight: 'bold',
            outline: 'none',
        },
        '&:focus': {
            color: '#DA291C',
            outline: 'none',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
}));


const WorkshopCard = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { workshopID } = useParams();
    const { workshop } = useSelector(mapState);
    const { cartItems } = useSelector(mapState2);
    const [isLoading, setIsLoading] = useState(true);


    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        dispatch(
            fetchWorkshopStart(workshopID),
            setTimeout(() => {
                setIsLoading(false)
            }, 4000)
        )
        return () => {
            dispatch(
                setWorkshop({})
            )

        }


    }, [])

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

    console.log(workshop.imagemDescricao1);
    console.log(cartItems)

    const handleAddToCart = (workshop) => {
        if (!workshop) return;
        dispatch(
            addItem(workshop)
        )
        history.push('/cart');
    }

    const configAddToCardBtn = {
        type: 'button'
    }
    return (
        <>
            <div className="equipmentCard pb-56">
                {workshop && isLoading == true
                    ? <Loading />
                    :
                    <>
                        <div>
                            <div className=" w-full h-96 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover' }} alt="sala" ></div>

                            <div className="container mx-auto flex-grow ">
                                <h2 className="text-red pt-24 pb-24">{nome}</h2>
                            </div>
                            <div className="container m-auto">
                                <div className={classes.root}>
                                    <div className={classes.demo1}>
                                        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                                            <AntTab label="Informação Geral" />
                                            <AntTab label="Calendário" />
                                        </AntTabs>
                                        <TabPanel value={value} index={0}>
                                            <div className="flex justify-center ">
                                                <h3 className="text-red pt-14 pb-14">INFORMAÇÃO GERAL</h3>
                                            </div>

                                            <div className="grid flex gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                                                <div className="grid flex gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">

                                                    {imagemDescricao1.value !== "none" && descricao1 !== "none" &&

                                                        <div className="grid flex gap-4 grid-cols-1">
                                                            <div className="grid flex gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-7 h-20 flex-shrink-0">

                                                                <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${workshop.imagemDescricao1.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                                <div className="ml-4 md:ml-14 lg:ml-8 col-span-3 md:col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao1}</h5></div>
                                                            </div>
                                                        </div>

                                                    }


                                                    {imagemDescricao2.value !== "none" && descricao2 !== "none" &&

                                                        <div className="grid flex gap-4 grid-cols-1">
                                                            <div className="grid flex gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-7 h-20 flex-shrink-0">

                                                                <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${workshop.imagemDescricao2.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                                <div className="ml-4 md:ml-14 lg:ml-8 col-span-3 md:col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao2}</h5></div>
                                                            </div>
                                                        </div>

                                                    }


                                                    {imagemDescricao3.value !== "none" && descricao3 !== "none" &&

                                                        <div className="grid flex gap-4 grid-cols-1">
                                                            <div className="grid flex gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-7 h-20 flex-shrink-0">

                                                                <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${workshop.imagemDescricao3.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                                <div className="ml-4 md:ml-14 lg:ml-8 col-span-3 md:col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao3}</h5></div>
                                                            </div>
                                                        </div>

                                                    }


                                                    {imagemDescricao4.value !== "none" && descricao4 !== "none" &&

                                                        <div className="grid flex gap-4 grid-cols-1">
                                                            <div className="grid flex gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-7 h-20 flex-shrink-0">

                                                                <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${workshop.imagemDescricao4.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                                <div className="ml-4 md:ml-14 lg:ml-8 col-span-3 md:col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao4}</h5></div>
                                                            </div>
                                                        </div>

                                                    }
                                                </div>

                                                <div className="flex">
                                                    <p>{descricao_geral}</p>
                                                </div>
                                            </div>


                                            <div>

                                                <div className="flex justify-center ">
                                                    <h3 className="text-red pt-14 pb-14">EQUIPAMENTO</h3>
                                                </div>

                                                <div className="grid flex gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-white">

                                                    {imagemDescricao1.value !== "none" && descricao1 !== "none" &&
                                                        <div className="flex mb-10 bg-red rounded-lg h-24 grid gap-4 grid-cols-4 md:grid-cols-4 h-20 flex-shrink-0">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao1.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-4 md:ml-4 lg:ml-4 col-span-3 md:col-span-3 lg:col-span-3 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao1}</h5></div>
                                                        </div>
                                                    }

                                                    {imagemDescricao2.value !== "none" && descricao2 !== "none" &&
                                                        <div className="flex mb-10 h-24 bg-red rounded-lg grid gap-4 grid-cols-7 md:grid-cols-7 h-20 flex-shrink-0">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao2.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao2}</h5></div>
                                                        </div>
                                                    }

                                                    {imagemDescricao3.value !== "none" && descricao3 !== "none" &&
                                                        <div className="flex mb-10 h-24 grid gap-4 grid-cols-7 md:grid-cols-7 h-20 flex-shrink-0 bg-red rounded-lg ">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao3.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao3}</h5></div>
                                                        </div>
                                                    }

                                                    {imagemDescricao4.value !== "none" && descricao4 !== "none" &&
                                                        <div className="flex mb-10 h-24 grid gap-4 grid-cols-7 md:grid-cols-7 h-20  bg-red rounded-lg flex-shrink-0">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao4.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao4}</h5></div>
                                                        </div>
                                                    }

                                                    {imagemDescricao5.value !== "none" && descricao5 !== "none" &&
                                                        <div className="flex mb-10 h-24 grid gap-4 grid-cols-7 md:grid-cols-7 h-20 flex-shrink-0 bg-red rounded-lg ">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao5.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao5}</h5></div>
                                                        </div>
                                                    }
                                                    {imagemDescricao6.value !== "none" && descricao6 !== "none" &&
                                                        <div className="flex mb-10 h-24 grid gap-4 grid-cols-7 md:grid-cols-7 h-20 flex-shrink-0  bg-red rounded-lg ">

                                                            <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${workshop.imagemDescricao6.value})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>

                                                            <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{descricao6}</h5></div>
                                                        </div>
                                                    }
                                                </div>
                                                </div>
                                        </TabPanel>
                                            <TabPanel value={value} index={1}>
                                                <div className="flex justify-center ">
                                                    <h3 className="text-red pt-14 pb-14">CALENDÁRIO</h3></div>
                                                <CalendarBase />
                                            </TabPanel>
                                    </div>
                                    </div>

                                </div>

                                {workshop.disponibilidade === "Disponível"
                                    ? cartItems.length === 0
                                        ? <div className="equipmentDetails container m-auto grid justify-items-end m-56">
                                            <div className="addToCart">
                                                <Button {...configAddToCardBtn} onClick={() => handleAddToCart(workshop)}>
                                                    Requisitar
                                        </Button>
                                            </div>
                                        </div>
                                        : <div className="equipmentDetails container m-auto grid justify-items-end m-56">
                                            <div className="addToCart">
                                                <Button {...configAddToCardBtn} onClick={() => alert("Terá de finalizar a requisição ou esvaziar o carrinho para requisitar mais Itens!")}>
                                                    Requisitar
                                        </Button>
                                            </div>
                                        </div>
                                    : <div className="equipmentDetails container m-auto grid justify-items-end m-56">
                                        <div className="addToCart">
                                            <Button {...configAddToCardBtn} style={{ backgroundColor: 'black', cursor: 'not-allowed' }} >
                                                Oficina Indisponível
                                        </Button>
                                        </div>
                                    </div>
                                }

                                {/* {workshop.disponibilidade === "Disponível"
                                ? <div className="workshopDetails container m-auto grid justify-items-end m-56">
                                    <div className="addToCart">
                                        <Button {...configAddToCardBtn} onClick={() => handleAddToCart(workshop)}>
                                            Requisitar
                                        </Button>
                                    </div>
                                </div>
                                : <div className="workshopDetails container m-auto grid justify-items-end m-56">
                                    <div className="addToCart">
                                        <Button {...configAddToCardBtn} style={{ backgroundColor: 'black', cursor: 'not-allowed' }} >
                                            Oficina Indisponível
                                        </Button>
                                    </div>
                                </div>


                                } */}

                            </div>
                    </>}
            </div>
        </>
    )
}

export default WorkshopCard
