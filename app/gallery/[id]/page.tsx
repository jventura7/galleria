'use client';
import Pictures from '@/data.json';
import ImageHero from '@/components/ImageHero';
import Link from 'next/link';
import GalleryImageModal from '@/components/GalleryImageModal';
import { useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(false);

  const picture = Pictures.find((p, i) => i.toString() == params.id);
  return (
    <div className="flex w-full flex-col p-6 md:mt-10 md:max-w-3xl xl:max-w-7xl xl:flex-row xl:items-center">
      {picture ? (
        <>
          {open ? (
            <GalleryImageModal
              image={picture.images.gallery.slice(1)}
              handleClose={setOpen}
            />
          ) : null}
          <ImageHero picture={picture} handleOpen={setOpen} />
          <div className="relative leading-7 xl:ml-20">
            <h1 className="md:text-10xl absolute right-0 top-[-60px] text-8xl font-bold text-gray-300 opacity-20 md:left-[-70px] md:right-auto md:top-[-100px]">
              {picture.year}
            </h1>
            <p className="text-md mb-6 text-gray-800 xl:max-w-xl">
              {picture.description}
            </p>
            <Link
              className="text-gray-450 text-xs underline"
              href={picture.source}
            >
              GO TO SOURCE
            </Link>
          </div>
        </>
      ) : (
        <h1>Invalid image source</h1>
      )}
    </div>
  );
}
