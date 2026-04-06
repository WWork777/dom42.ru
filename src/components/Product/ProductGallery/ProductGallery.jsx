"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import "./ProductGallery.scss";

export default function ProductGallery({ images = [], productName }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const galleryRef = useRef(null);

  if (!images.length) return null;

  return (
    <>
      {/* Swiper превью */}
      <div className="product-gallery">
        <Swiper
          className="product-gallery__thumbs"
          modules={[Thumbs, FreeMode]}
          //direction="vertical"
          onSwiper={setThumbsSwiper}
          slidesPerView="auto"
          //spaceBetween={16}
          freeMode
          watchSlidesProgress
          mode="lg-zoom-out"
          breakpoints={{
          684: {
            direction: "horizontal"
          },
          820: {
            direction: "vertical"
          },
          1920: {
            direction: "vertical"
          }
        }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={`${(img == "/placeholder.png" ? "/placeholder.png" : `${img}`)}`} alt={`${productName}-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className="product-gallery__main"
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={32}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`${(img == "/placeholder.png" ? "/placeholder.png" : `${img}`)}`}
                alt={`${productName}-${i}`}
                onClick={() => galleryRef.current?.openGallery(i)}
                style={{ cursor: "zoom-in" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen LightGallery */}
      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        plugins={[lgThumbnail, lgZoom]}
        thumbnail
        download={false}
        addClass="lg-custom-thumbnails"
        appendThumbnailsTo=".lg-outer"
        animateThumb={false}
        allowMediaOverlap={true}
      >
        {images.map((img, index) => (
          <a
            key={`${img}-${index}`}
            href={`${(img == "/placeholder.png" ? "/placeholder.png" : `${img}`)}`}
          >
            <img src={`${(img == "/placeholder.png" ? "/placeholder.png" : `${img}`)}`} alt="" />
          </a>
        ))}
      </LightGallery>
    </>
  );
}
