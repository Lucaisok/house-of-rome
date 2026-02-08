"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./ApartmentGallery.module.css";

interface ApartmentGalleryProps {
  images: string[];
  apartmentName: string;
}

export function ApartmentGallery({ images, apartmentName }: ApartmentGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryImages = images
    .filter(Boolean)
    .map((image) => (image.startsWith("http") || image.startsWith("/")
      ? image
      : `/${image.replace(/^\.\/?/, "")}`
    ));
  const hasImages = galleryImages.length > 0;

  const galleryLength = galleryImages.length - 1;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryLength);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryLength) % galleryLength);
    }
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevImage();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, galleryLength]);

  if (!hasImages) {
    return null;
  }

  return (
    <>
      <div className={styles.galleryGrid}>
        {/* Main large image */}
        <div
          className={`${styles.mainImage} ${styles.imageWrap}`}
          onClick={() => openLightbox(0)}
        >
          <img
            src={galleryImages[0]}
            alt={`${apartmentName} - Main view`}
            className={styles.image}
          />
        </div>

        {/* Grid of smaller images */}
        {galleryImages.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${styles.imageWrap}`}
            onClick={() => openLightbox(index + 1)}
          >
            <img
              src={image}
              alt={`${apartmentName} - View ${index + 2}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className={styles.lightbox}>
          <button
            onClick={closeLightbox}
            className={`${styles.lightboxButton} ${styles.closeButton}`}
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className={`${styles.lightboxButton} ${styles.prevButton}`}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className={`${styles.lightboxButton} ${styles.nextButton}`}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div className={styles.lightboxImageWrap}>
            <img
              src={galleryImages[selectedImage]}
              alt={`${apartmentName} - View ${selectedImage + 1}`}
              className={styles.lightboxImage}
            />
          </div>

          <div className={styles.counter}>
            {selectedImage + 1} / {galleryLength}
          </div>
        </div>
      )}
    </>
  );
}