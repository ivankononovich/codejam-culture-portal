import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
      color: '#3ac14c',
      border: '1px solid #3ac14c',
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
}));

const YouTubeVideo = () => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe className={classes.video} src="https://www.youtube.com/embed/mrfadR51D0I?autoplay=1&amp" frameBorder="0" allowFullScreen></iframe>
  );
};

const ButtonCloseVideo = ({handleClick}) => {
  const classes = useStyles();
  return (
    <button className={classes.сloseVideo} onClick={handleClick}>✖</button>
  );
};

const VideoModal = () => {
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
        Просмотр
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <YouTubeVideo />
          <ButtonCloseVideo handleClick={handleClose}/>
        </div>
      </Modal>
    </div>
  );
};
export default VideoModal;