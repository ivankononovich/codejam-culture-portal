import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.2)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(26, 24, 58, .6)',
      outline: '1px solid #a4bcd1'
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: 1260,
  },
  card: {
    display: 'grid',
    width: 280,
    margin: '30px 10px',
    borderRadius: 25,
    alignContent: 'space-between',
    '&:hover': {
      boxShadow: theme.shadows[5],
    },
  },
  img: {
    height: 250,
  },
  name: {
    textAlign: 'center'
  },
  contribution: {
    textAlign: 'justify',
    whiteSpace: 'pre-line',
  },
  actions: {
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
