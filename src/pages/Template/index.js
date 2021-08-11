import React from 'react'
//material-ui botões
import Button from '@material-ui/core/Button'

//aqui vai tudo o que eu quiser escrever em jsx

const Template = () => {
    return (
        <div>
            Template

            <Button variant="contained">Default</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </div>
    )
}

export default Template
