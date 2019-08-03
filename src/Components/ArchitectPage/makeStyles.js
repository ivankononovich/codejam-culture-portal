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
  years: {
    marginBottom: 15,
  },
  map: {
    marginBottom: 50,
  },
  description: {
    marginBottom: 30,
  },
  gallery: {
    margin: 50,
  },
  video: {
    marginBottom: 30,
  },
  title: {
    color: '#3f51b5',
  }
}));

export default useStyles;
