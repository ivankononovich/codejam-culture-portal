import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    display: 'grid',
    width: 280,
    margin: '30px 10px',
    borderRadius: 25,
  },
  img: {
    height: 250,
  },
  name: {
    textAlign: 'center'
  },
  contribution: {
    textAlign: 'justify',
  },
  actions: {
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
