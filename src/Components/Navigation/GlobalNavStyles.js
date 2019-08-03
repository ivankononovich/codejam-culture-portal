document.body.style.margin = 0;
document.body.style.background = '#8e98a1';
document.body.style.background = '-moz-linear-gradient(0deg, rgba(142,152,161,0.2) 0%, rgba(63,81,181,0.3) 100%)';
document.body.style.background = '-webkit-linear-gradient(0deg, rgba(142,152,161,0.2) 0%, rgba(63,81,181,0.3) 100%)';
document.body.style.background = 'linear-gradient(0deg, rgba(142,152,161,0.2) 0%, rgba(63,81,181,0.3) 100%)';
document.body.style.filter = 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#8e98a1",endColorstr="#3f51b5",GradientType=1)';

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