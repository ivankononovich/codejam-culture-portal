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
    margin: '40px auto 20px auto',
    borderRadius: 10,
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
  projects: {
    color: '#3ac14c',
  },
  video: {
    color: '#3ac14c',
    marginBottom: 30,
  },
}));

export default useStyles;
