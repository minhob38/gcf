/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const CarCard: React.FC<IProps> = ({ src, alt, width = "none", height = "none" }) => {
  return (
    <img
      src={src}
      alt={alt}
      css={css`
        object-fit: contain;
        width: ${width};
        height: ${height};
      `}
    ></img>
  );
};

export default CarCard;
