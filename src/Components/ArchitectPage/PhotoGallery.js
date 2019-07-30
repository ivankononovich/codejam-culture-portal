import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function PhotoGallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, {photo, index}) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
     <>
       <Gallery photos={props.data} onClick={openLightbox}/>
       <ModalGateway>
         {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
             currentIndex={currentImage}
             views={props.data.map(x => ({
               ...x,
               key: x.num,
               srcset: x.srcSet,
               caption: x.text,
             }))}
            />
          </Modal>
         ) : null}
       </ModalGateway>
     </>
    );
}

export default PhotoGallery;
