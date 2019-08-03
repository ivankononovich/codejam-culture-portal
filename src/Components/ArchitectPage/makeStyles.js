import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
  },
  name: {
    margin: 10,
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
