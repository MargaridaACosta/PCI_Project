import React, { useState } from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

// Estilos importados a partir de https://snazzymaps.com/editor
import mapStyles from '../../styles/map_style.json'

// Icone do Marcador
import map_icon from '../../assets/icons/pci.png'

const libraries = ["places"];

// A ADICIONAR A UM FICHEIRO CSS À PARTE
const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
}

// SE FOR NECESSÁRIO, SEPARAM-SE AS CONST QUE REPRESENTAM SETTINGS
const center = {
    lat: 40.619038,
    lng: -8.666912,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    streetView: false,
}

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({

        // GUARDAR API KEY COMO ENV LOCAL
        googleMapsApiKey: 'AIzaSyBsk1sCAGkSkFneV52lCZsnd9XlRTNHKnw',
        libraries,
    });

    const [selected, setSelected] = useState(null);
    const [markers] = useState([]);

    if (loadError) return "Error Loading Map"
    if (!isLoaded) return "Loading Maps"

    return (
        <div className=" overflow-hidden">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
            >

                <Marker
                    position={{ lat: center.lat, lng: center.lng }}
                    icon={{
                        url: map_icon,
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                    }}
                    onClick={() => {
                        setSelected(markers);
                    }}
                />


                {selected ? (
                    <InfoWindow
                        position={{ lat: center.lat, lng: center.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}>
                        <div>
                            <h2>PCI</h2>
                            <p>Creative Science Park</p>
                        </div>
                    </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )
}

export default Map
