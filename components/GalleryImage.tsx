import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export default function GalleryImage({
  image,
  handleClose,
}: {
  image: string;
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white">
      <div className="w-full p-6 text-right md:max-w-3xl">
        <button
          className="mb-6 cursor-pointer tracking-widest transition duration-300 hover:text-slate-600"
          onClick={() => handleClose(false)}
        >
          CLOSE
        </button>
        <Image
          src={image}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: 'auto',
          }}
          sizes="100vw"
          alt={`Gallery image`}
        />
      </div>
    </div>
  );
}
