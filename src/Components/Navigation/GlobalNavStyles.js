document.body.style.margin = 0;

const styles = {
    wrapper: {
        margin: '1rem auto',
        flexGrow: '1',
    },
  menuBar: {
      display: 'flex',
      justifyContent: 'space-between',
  },
  linkContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
  },
  linkBox: {
      marginRight: 20,
  },
  link: {
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none',
      textTransform: 'capitalize',
  },
  menuLink: {
      cursor: 'pointer',
      color: '#3F51B5',
      textDecoration: 'none',
      textTransform: 'capitalize',
  }
}

export default styles;