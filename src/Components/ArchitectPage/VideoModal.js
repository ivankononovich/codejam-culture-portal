import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MediaQuery from 'react-responsive';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  videoButton: {
    padding: '20px 50px',
    marginBottom: '50px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    border: '1px solid #000',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.8s',
    outline: 'none',
    '&:hover': {
      color: '#3F51B5',
      border: '1px solid #3F51B5',
      boxShadow: theme.shadows[5],
    },
  },
  сloseVideo: {
    position: 'absolute',
    top: '-35px',
    right: '-35px',
    fontSize: '30px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  paper: {
    position: 'relative',
    width: 800,
    height: 500,
    backgroundColor: '#000',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
  mediaPaper: {
    position: 'relative',
    width: '75%',
    height: '50%',
    backgroundColor: '#000',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
}));

const YouTubeVideo = ({idVideo}) => {
  const classes = useStyles();
  const api = 'https://www.youtube.com/embed/'+idVideo.data.id+'?autoplay=1&amp';
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe className={classes.video} src={api} frameBorder="0" allowFullScreen></iframe>
  );
};

const ButtonCloseVideo = ({handleClick}) => {
  const classes = useStyles();
  return (
    <button className={classes.сloseVideo} onClick={handleClick}>✖</button>
  );
};

const VideoModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <button className={classes.videoButton} type="button" onClick={handleOpen}>
        {props.langButton}
      </button>
      <MediaQuery query="(max-device-width: 900px)"> 
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.mediaPaper}>
            <YouTubeVideo idVideo={props} />
            <ButtonCloseVideo handleClick={handleClose}/>
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 900px)"> 
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <YouTubeVideo idVideo={props} />
            <ButtonCloseVideo handleClick={handleClose}/>
          </div>
        </Modal>
      </MediaQuery>
    </div>
  );
};
export default VideoModal;