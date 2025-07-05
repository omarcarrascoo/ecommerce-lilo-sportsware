interface Product {
  id: string;
  name: string;
  price: number;
  src: string;
  img: string[];
  colors: {
    [key: string]: string[];
  };
}

export const products: Product[] = [
  { 
    id: 'lunara', 
    name: 'Lunara', 
    price: 1200, 
    src: '/assets/imgs/LILO-8.jpg', 
    img: ['/assets/imgs/product/LILO-8.jpg', '/assets/imgs/product/LILO-9.jpg', '/assets/imgs/product/LILO-10.jpg'], 
    colors: {
      black: ['/assets/imgs/product/LILO-8.jpg', '/assets/imgs/product/LILO-9.jpg', '/assets/imgs/product/LILO-10.jpg'],
      pink: ['/assets/imgs/product/LILO-11.jpg', '/assets/imgs/product/LILO-12.jpg', '/assets/imgs/product/LILO-13.jpg'],
      white: ['/assets/imgs/product/LILO-14.jpg', '/assets/imgs/product/LILO-15.jpg']
    }
  },
  { 
    id: 'sylira', 
    name: 'Sylira', 
    price: 1100, 
    src: '/assets/imgs/LILO-18.jpg', 
    img: ['/assets/imgs/product/LILO-17.jpg', '/assets/imgs/product/LILO-18.jpg', '/assets/imgs/product/LILO-19.jpg'], 
    colors: {
      black: ['/assets/imgs/product/LILO-17.jpg', '/assets/imgs/product/LILO-18.jpg', '/assets/imgs/product/LILO-19.jpg'],
      white: ['/assets/imgs/product/LILO-23.jpg', '/assets/imgs/product/LILO-24.jpg'],
      nude: ['/assets/imgs/product/LILO-21.jpg', '/assets/imgs/product/LILO-22.jpg']
    }
  },
  { 
    id: 'fugaz', 
    name: 'Fugaz', 
    price: 1200, 
    src: '/assets/imgs/LILO-5.jpg', 
    img: ['/assets/imgs/product/LILO-5.jpg'], 
    colors: {
      darkBlue: ['/assets/imgs/product/LILO-5.jpg', '/assets/imgs/product/LILO-6.jpg', '/assets/imgs/product/LILO-7.jpg'],
      brightPink: ['/assets/imgs/product/LILO-1.jpg'],
      black: ['/assets/imgs/product/LILO-2.jpg', '/assets/imgs/product/LILO-3.jpg', '/assets/imgs/product/LILO-4.jpg']
    }
  },
  { 
    id: 'nebula', 
    name: 'Nebula', 
    price: 1200, 
    src: '/assets/imgs/LILO-31.jpg', 
    img: ['/assets/imgs/product/LILO-30.jpg'], 
    colors: {
      pink: ['/assets/imgs/product/LILO-30.jpg', '/assets/imgs/product/LILO-31.jpg'],
      black: ['/assets/imgs/product/LILO-32.jpg', '/assets/imgs/product/LILO-33.jpg', '/assets/imgs/product/LILO-34.jpg'],
    }
  },
  { 
    id: 'lumira', 
    name: 'Lumira', 
    price: 900, 
    src: '/assets/imgs/LILO-25.jpg', 
    img: ['/assets/imgs/LILO-25.jpg'], 
    colors: {
      lightBllue: ['/assets/imgs/product/LILO-25.jpg', '/assets/imgs/product/LILO-26.jpg', '/assets/imgs/product/LILO-27.jpg'],
    }
  },
  { 
    id: 'luma', 
    name: 'Luma', 
    price: 1300, 
    src: '/assets/imgs/LILO-28.jpg', 
    img: ['/assets/imgs/LILO-28.jpg'], 
    colors: {
      aquaBlue: ['/assets/imgs/product/LILO-28.jpg'],
      purple: ['/assets/imgs/product/LILO-29.jpg']
    }
  }
];
