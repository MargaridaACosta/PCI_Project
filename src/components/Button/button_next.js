import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    
    fontFamily: [
      'Proxima Nova',
      'sans-serif',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      outline: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
      outline: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      outline: 'none',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#DA291C'),
    backgroundColor: '#DA291C',
    borderRadius: 8,
    height: 50,
    width: 170,
    fontSize: 25,
    textTransform: 'none',
    float: 'right',
    position: 'relative',
    fontFamily: [
      'Proxima Nova',
      'sans-serif',
    ].join(','),
    '&:hover': {
      backgroundColor: '#C51A0D',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(13),
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  },
}));



const CustomizedButtons = () => {
  const classes = useStyles();

  return (
    <div >
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Agendar
      </ColorButton>
    </div>
  );
}

export default CustomizedButtons;