import React from 'react';
import { AppBar, Container, GridListTile, GridList, Popover, Typography, Avatar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        marginTop: '1rem', 
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    wrapper: {
      padding: '0.5rem',
    },
    list: {
      cursor: 'pointer',
    },
    avatar: {
      margin: '0 auto',
    },
  });

export default (props) => {
    const devSort = props.developers.sort((a, b) => {return a.name > b.name ? 1 : -1} );
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState({anchor: null, dev: null});

    function handlePopoverOpen(event, devId) {
      const dev = devSort.filter(developer => developer.id === devId)[0];
      setAnchorEl({anchor: event.currentTarget, dev: dev});
    }

    function handlePopoverClose() {
      setAnchorEl({anchor: null, dev: null});
    }

    const open = Boolean(anchorEl.anchor);
    // const id = open ? 'simple-popover' : undefined;
    
    return (
    <>
    <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Container className={classes.container}>
            <GridList style={{justifyContent: 'space-between'}}>
              {devSort.map((dev, i) =>
                <GridListTile
                  key={i}
                  style={{width: 'auto', height: 'auto', margin: 'auto 1rem'}}
                >
                  <Typography
                    className={classes.list}
                    variant="body1"
                    component="h3"
                    onMouseOver={(ev) => handlePopoverOpen(ev, dev.id)}
                  >
                    {`@${dev.github.match(/([^/]+$)/g)}`}
                  </Typography>
                </GridListTile>
              )}
            </GridList>
            <Popover
              className={classes.popover}
              open={open}
              anchorEl={anchorEl.anchor}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div
                onMouseLeave={handlePopoverClose}
                className={classes.wrapper}
              >
                <Avatar
                  className={classes.avatar}
                  alt={anchorEl.dev ? anchorEl.dev.name : ''}
                  src= {anchorEl.dev ? anchorEl.dev.image : ''}
                />
                <Typography variant="h5" component="h4">
                  {anchorEl.dev ? anchorEl.dev.name : ''}
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                >
                 {`Github: `}
                <Link
                  href={anchorEl.dev ? anchorEl.dev.github : ''}
                  target='_blank'
                >
                  {anchorEl.dev ? `${anchorEl.dev.github.match(/([^/]+$)/g)}` : ''}
                </Link>
                </Typography>
              </div>
            </Popover>  
        </Container>
        </AppBar>
    </>
    )
}