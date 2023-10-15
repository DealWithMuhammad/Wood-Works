'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { ProductCard } from '../../../components/ProductCard';
import { SwiperNavButtons } from '@src/components/SwiperNavButtons';
import { IProduct } from '@src/model';
import { SwiperOptions } from '@node_modules/swiper/types/swiper-options';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
};

interface ProductsSlider {
  products: IProduct[];
}
export const ProductsSlider = ({ products }: ProductsSlider) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w="100%" h="100%">
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {products.map((product) => (
          <SwiperSlide key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};
