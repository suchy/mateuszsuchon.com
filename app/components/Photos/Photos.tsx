import image01 from "./images/01.webp";
import image02 from "./images/02.webp";
import image03 from "./images/03.webp";
import image04 from "./images/04.webp";
import image05 from "./images/05.webp";

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

const images = [image01, image02, image03, image04, image05];

export const Photos = () => (
  <div className="mt-16 sm:mt-20">
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {images.map((image, imageIndex) => (
        <div
          key={image}
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
            rotations[imageIndex % rotations.length]
          }`}
        >
          <img
            src={image}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);
