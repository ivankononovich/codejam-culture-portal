import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
  },
  img: {
    height: 'auto',
    maxHeight: 300,
    width: 'auto',
    margin: '0 auto 20px auto',
  },
  name: {
    margin: 10,
  },    
  bio: {
    color: '#3ac14c',
  },
  years: {
    marginBottom: 15,
  },
  map: {
    marginBottom: 50,
    color: '#3ac14c',
  },
  description: {
    marginBottom: 30,
  },
  gallery: {
    margin: 50,
    color: '#3ac14c',
  },
}));

export default useStyles;