import React, { useState } from "react";
import "../../assets/styles/Project.scss";
import { ProjectImage } from "../../utils/types";
import { ImageModal } from "./ImageModal";

type ModalState = {
  image: ProjectImage;
  rect: DOMRect;
} | null;

export function ProjectsImages({ images }: { images: ProjectImage[] }) {
  const [modal, setModal] = useState<ModalState>(null);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>, image: ProjectImage) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModal({ image, rect });
  };

  return (
    <>
      <div className="projects-images-grid">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            title={image.alt}
            className="clickable-image"
            onClick={(e) => handleClick(e, image)}
          />
        ))}
      </div>

      {modal && (
        <ImageModal modal={modal} onClose={() => setModal(null)} />
      )}
    </>
  );
}