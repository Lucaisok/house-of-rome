"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./ApartmentGallery.module.css";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { siteContent } from "@/content/global";

export function ApartmentGallery({ apartment, locale }: ApartmentPageParams) {
  const images = apartment.images;
  const apartmentName = apartment.name;
  const t = siteContent[locale].global;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryImages = images
    .filter(Boolean)
    .map((image) => (image.startsWith("http") || image.startsWith("/")
      ? image
      : `/${image.replace(/^\.\/?/, "")}`
    ));
  const hasImages = galleryImages.length > 0;

  const galleryLength = galleryImages.length;
  const remainingCount = Math.max(galleryLength - 10, 0);
  const mobileImages = galleryImages.slice(0, 3);
  const remainingCountMobile = Math.max(galleryLength - 3, 0);

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
      <div className={styles.galleryMobile}>
        {mobileImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.mobileItem} ${styles.imageWrap} ${index === 0 ? styles.mobileItemFull : ""}`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${apartmentName} - ${t.photo} ${index + 1}`}
              className={styles.image}
            />
            {index === 2 && remainingCountMobile > 0 && (
              <div className={styles.moreOverlay}>
                <span>{t.see} {remainingCountMobile} {t.photos}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.galleryDesktop}>
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
                alt={`${apartmentName} - ${t.photo} ${index + 2}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        {/* Thumbnails */}
        <div className={styles.thumbnailRow}>
          {galleryImages.slice(5, 10).map((image, index) => {
            const imageIndex = index + 5;
            const isLast = index === 4;
            return (
              <div
                key={imageIndex}
                className={`${styles.thumbnailSmall} ${styles.imageWrap}`}
                onClick={() => openLightbox(imageIndex)}
              >
                <img
                  src={image}
                  alt={`${apartmentName} - ${t.photo} ${imageIndex + 1}`}
                  className={styles.image}
                />
                {isLast && remainingCount > 0 && (
                  <div className={styles.moreOverlay}>
                    <span>{t.see} {remainingCount} {t.photos}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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