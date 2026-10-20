import type { FC } from 'react';
import { Camera } from 'lucide-react';

const galleryPhotos = [
  { src: '/images/pic%201.webp', alt: 'Restaurant dish from the gallery' },
  { src: '/images/pic%202.webp', alt: 'Freshly prepared restaurant dish' },
  { src: '/images/pic%203.jpg', alt: 'Tandoori restaurant food' },
];

export const Gallery: FC = () => {
  return (
    <section
      id="gallery"
      className="relative z-10 border-t border-[#39332F]/40 bg-[#0D0C0B]/60 px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E87532]/30 bg-[#E87532]/10 px-4 py-1.5">
            <Camera className="h-3.5 w-3.5 text-[#E87532]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E87532]">
              Visual Atmosphere
            </span>
          </div>
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
              className="group relative h-72 overflow-hidden rounded-xl border border-[#39332F] bg-[#151311]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
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
