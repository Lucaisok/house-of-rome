"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./ApartmentGallery.module.css";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { siteContent } from "@/content/global";

export function ApartmentGallery({ apartment, locale }: ApartmentPageParams) {
  const images = apartment.images;
  const apartmentName = apartment.name;
  const t = siteContent[locale].global;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const galleryImages = images
    .filter(Boolean)
    .map((image) => (image.startsWith("http") || image.startsWith("/")
      ? image
      : `/${image.replace(/^\.\/?/, "")}`
    ));
  const hasImages = galleryImages.length > 0;

  const galleryLength = galleryImages.length;

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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    (event.currentTarget as HTMLDivElement).dataset.touchStartX = `${touch.clientX}`;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    const startX = Number(target.dataset.touchStartX || 0);
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;

    if (Math.abs(delta) < 40) return;
    if (delta < 0) {
      nextImage();
    } else {
      prevImage();
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

  useEffect(() => {
    if (selectedImage === null) return;
    const target = thumbRefs.current[selectedImage];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedImage]);

  if (!hasImages) {
    return null;
  }

  return (
    <>
      <div className={styles.gallerySingle}>
        <div
          className={`${styles.mainImage} ${styles.imageWrap}`}
          onClick={() => openLightbox(0)}
        >
          <img
            src={galleryImages[0]}
            alt={`${apartmentName} - Main view`}
            className={styles.image}
          />
          <div className={styles.viewPill}>
            View gallery
          </div>
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

          <div
            className={styles.lightboxImageWrap}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={galleryImages[selectedImage]}
              alt={`${apartmentName} - View ${selectedImage + 1}`}
              className={styles.lightboxImage}
            />
          </div>

          <div className={styles.lightboxThumbs}>
            {galleryImages.map((image, index) => (
              <button
                key={image}
                className={`${styles.thumbButton} ${index === selectedImage ? styles.thumbButtonActive : ""}`}
                onClick={() => setSelectedImage(index)}
                aria-label={`View image ${index + 1}`}
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
              >
                <img
                  src={image}
                  alt={`${apartmentName} - Thumbnail ${index + 1}`}
                  className={styles.thumbImage}
                />
              </button>
            ))}
          </div>

          <div className={styles.counter}>
            {selectedImage + 1} / {galleryLength}
          </div>
        </div>
      )}
    </>
  );
}