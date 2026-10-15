import Image, { type ImageProps } from "next/image";

/** next/image que também aceita URLs externas (ex.: Vercel Blob) sem configuração extra. */
export default function SmartImage({ src, alt, ...rest }: Omit<ImageProps, "src"> & { src: string }) {
  const remote = /^https?:\/\//.test(src);
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={src} alt={alt} unoptimized={remote || src.endsWith(".svg")} {...rest} />;
}
