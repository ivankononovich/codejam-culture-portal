import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    paddingBottom: 50,
  },
  img: {
    height: 'auto',
    maxHeight: 300,
    width: 'auto',
    margin: '40px auto 20px auto',
    borderRadius: 10,
    boxShadow: '0 2px 6px 0 black, 0 6px 25px 0 black',
  },
  name: {
    margin: 10,
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    color: '#19194c',
    fontWeight:'bold',
  },
  title: {
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    color: '#11113c',
    fontWeight:'bold',
  },
  bio: {
    color: '#000',
  },
  years: {
    marginBottom: 15,
  },
  map: {
    marginBottom: 50,
    color: '#000',
  },
  description: {
    marginBottom: 30,
    textAlign: 'justify',
  },
  gallery: {
    margin: 50,
    color: '#000',
  },
  projects: {
    color: '#000',
  },
  video: {
    color: '#000',
    marginBottom: 30,
  },
}));

export default useStyles;
