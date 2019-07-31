import React from 'react';
import { Container, GridListTile, GridList, Popover, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

export default (props) => {
    const devSort = props.developers.sort((a, b) => {return a.name > b.name ? 1 : -1} );

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handlePopoverOpen(event) {
      setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
      setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    return (
    <>
        <Container style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
            {`${props.devTitle}: `}
            <GridList cols={7} style={{justifyContent: 'space-between'}}>
            {devSort.map((dev, i) =>
                <GridListTile
                    key={i}
                    style={{width: 'auto', height: 'auto'}}
                >
                    <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                    {`@${dev.github.match(/([^/]+$)/g)}`}
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.paper,
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>
                          {dev.name}
                      </Typography>
                    </Popover>
                </GridListTile>
            )}
            </GridList>
        </Container>
    </>
    )
}