import type { FC } from 'react';

const imageBaseUrl = `${import.meta.env.BASE_URL}images/`;
const galleryPhotos = [
  { src: `${imageBaseUrl}pic%201.webp`, alt: 'Restaurant dish from the gallery' },
  { src: `${imageBaseUrl}pic%202.webp`, alt: 'Freshly prepared restaurant dish' },
  { src: `${imageBaseUrl}pic%203.jpg`, alt: 'Tandoori restaurant food' },
];
export const Gallery: FC = () => {
  return (
    <section
      id="gallery"
      className="relative z-10 border-t border-[#39332F]/40 bg-[#0D0C0B]/60 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#F8F3EC] md:text-5xl">
            Restaurant &amp; Food Gallery
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#B9B0A6]">
            A glimpse into our dining environment and freshly crafted tandoori dishes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className="group relative h-72 overflow-hidden rounded-xl border border-[#39332F] bg-[#151311]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E87532]">
                  Tandoori Restaurant
                </span>
                <p className="font-serif text-lg font-bold text-[#F8F3EC]">
                  Authentic Preparation {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
