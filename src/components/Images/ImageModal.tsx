import React from "react";

export function ImageModal({ modal, onClose }: any) {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // bloque scroll

    setTimeout(() => setAnimate(true), 10);

    return () => {
      document.body.style.overflow = "auto"; // restore scroll
    };
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onClose, 300); // attend animation
  };

  const style = {
    top: animate ? "50%" : modal.rect.top,
    left: animate ? "50%" : modal.rect.left,
    width: animate ? "80vw" : modal.rect.width,
    height: animate ? "auto" : modal.rect.height,
    transform: animate ? "translate(-50%, -50%)" : "none",
  };

  return (
    <div className="image-modal" onClick={handleClose}>
      <img
        src={modal.image.src}
        alt={modal.image.alt}
        className="image-modal-animated"
        style={style}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}