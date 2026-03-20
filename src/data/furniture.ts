import type { ImageMetadata } from 'astro';

export interface Piece {
  slug: string;
  images: { src: ImageMetadata; alt: string }[];
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  blurb?: string;
  price?: string;
  sold?: string;
  buyLink?: string;
  video?: string;
}

import img1309  from '../assets/images/furniture/BF6A1309.jpg';
import img1327  from '../assets/images/furniture/BF6A1327.jpg';
import img1327b from '../assets/images/furniture/BF6A1327-2.jpg';
import img1333  from '../assets/images/furniture/BF6A1333.jpg';
import img1333b from '../assets/images/furniture/BF6A1333-2.jpg';
import img1342  from '../assets/images/furniture/BF6A1342.jpg';
import img1342b from '../assets/images/furniture/BF6A1342-2.jpg';
import img1360  from '../assets/images/furniture/BF6A1360.jpg';
import img1361  from '../assets/images/furniture/BF6A1361.jpg';
import img1367  from '../assets/images/furniture/BF6A1367.jpg';
import img1374  from '../assets/images/furniture/BF6A1374.jpg';
import img1397  from '../assets/images/furniture/BF6A1397.jpg';
import img1410  from '../assets/images/furniture/BF6A1410.jpg';
import img1414  from '../assets/images/furniture/BF6A1414.jpg';
import img1425  from '../assets/images/furniture/BF6A1425.jpg';
import img1437  from '../assets/images/furniture/BF6A1437.jpg';

export const furniture: Piece[] = [
  { slug: 'bench-i-surface', images: [{ src: img1360, alt: 'Bench' }, { src: img1361, alt: 'Bench — detail' }, { src: img1367, alt: 'Bench — detail' }, { src: img1374, alt: 'Bench — detail' }, { src: img1397, alt: 'Bench — detail' }, { src: img1410, alt: 'Bench — detail' }, { src: img1414, alt: 'Bench — detail' }, { src: img1425, alt: 'Bench — detail' }, { src: img1437, alt: 'Bench — detail' }], title: 'Bench I — surface', medium: 'Charred oak', year: '2024', dimensions: '70 × 25 × 45 cm', price: '£300', buyLink: 'https://buy.stripe.com/14A6oGcwngHqeVp2Zc9EI01' },
  { slug: 'stool-i',    images: [{ src: img1309, alt: 'Stool I' }, { src: img1327, alt: 'Stool I' }, { src: img1327b, alt: 'Stool I — detail' }, { src: img1333, alt: 'Stool I — detail' }, { src: img1333b, alt: 'Stool I — detail' }, { src: img1342, alt: 'Stool I — detail' }, { src: img1342b, alt: 'Stool I — detail' }], title: 'Stool I', medium: 'Charred oak', year: '2024', dimensions: '30 × 28 cm', price: '£200', buyLink: 'https://buy.stripe.com/fZu9AS7c3bn6bJdeHU9EI02' },
];
