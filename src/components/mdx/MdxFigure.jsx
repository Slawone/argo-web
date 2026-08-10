export const MdxFigure = ({ src, alt, children }) => {
  return (
    <figure className="md:flex gap-5 items-start">
       <img src={src} alt={alt} className="w-50 h-66.5" />

      <figcaption className="max-w-100">
        {children}
      </figcaption>
    </figure>
  );
};
