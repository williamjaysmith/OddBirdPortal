export const Flag = ({ src, alt, className = "", ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`max-w-8 rounded-tiny block border border-grey-100 ${className}`}
      {...props}
    />
  );
};