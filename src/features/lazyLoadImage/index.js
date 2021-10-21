import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { LazyLoadImage as LazyLoadImageLibrary } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const LazyLoadImage = ({
  src,
  alt = 'text image',
  height = '340px',
  width = '340px',
  heightSkeleton = '340px',
  widthSkeleton = '340px',
}) => {
  return (
    <LazyLoadImageLibrary
      effect="blur"
      alt={alt}
      src={src} // use normal <img> attributes as props
      height={height}
      width={width}
      placeholderSrc={
        <Skeleton height={heightSkeleton} width={widthSkeleton} />
      }
    />
  );
};
