'use client';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';

export default function ImageHero({
  picture,
  handleOpen,
}: {
  picture: any;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const mediumBreakpoint = 768;

  useEffect(() => {
    const updateWindow = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', updateWindow);
    return () => window.removeEventListener('resize', updateWindow);
  }, []);

  const ResponsiveGalleryImage = () => {
    if (windowSize < mediumBreakpoint) {
      return (
        <Image
          src={picture.images.hero.small.slice(1)}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: '100%',
          }}
          sizes="100vw"
          alt={`Gallery image ${picture.name}`}
        />
      );
    } else {
      return (
        <Image
          src={picture.images.hero.large.slice(1)}
          width={0}
          height={0}
          style={{
            width: '70%',
            height: 'auto',
          }}
          sizes="100vw"
          alt={`Gallery image ${picture.name}`}
        />
      );
    }
  };

  const ResponsiveArtistImage = () => {
    if (windowSize < mediumBreakpoint) {
      return (
        <Image
          src={picture.artist.image.slice(1)}
          alt={`${picture.artist.name} image`}
          width={0}
          height={0}
          style={{
            width: '70px',
            height: 'auto',
          }}
          sizes="100vw"
        />
      );
    } else {
      return (
        <Image
          src={picture.artist.image.slice(1)}
          alt={`${picture.artist.name} image`}
          width={0}
          height={0}
          style={{
            width: '120px',
            height: 'auto',
            position: 'absolute',
            right: '0px',
            top: '275px',
          }}
          sizes="100vw"
        />
      );
    }
  };

  return (
    <div className="relative m-auto mb-40 w-full">
      <ResponsiveGalleryImage />
      <div className="absolute bottom-0 left-0 block h-20 w-3/4 bg-white p-4 md:left-auto md:right-0 md:top-0 md:h-fit md:w-3/5 md:px-12 md:pb-10 md:pt-0">
        <h1 className="mb-4 text-3xl font-semibold md:text-6xl">
          {picture.name}
        </h1>
        <h2 className="mb-4 text-gray-500 md:text-xl">{picture.artist.name}</h2>
        <ResponsiveArtistImage />
      </div>
      <div
        onClick={() => handleOpen(true)}
        className="absolute left-4 top-4 cursor-pointer bg-black p-3 text-center text-white opacity-70 transition duration-300 hover:bg-white hover:text-black hover:opacity-80"
      >
        <h1 className="w-32 text-xs font-bold tracking-widest">VIEW IMAGE</h1>
      </div>
    </div>
  );
}
