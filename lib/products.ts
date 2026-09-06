const perfumes = {
  men: [
    { id: 1, name: 'Midnight Echo', price: '$89', description: 'A bold blend of oakwood and amber' },
    { id: 2, name: 'Twilight Noir', price: '$79', description: 'Deep notes of sandalwood and musk' },
    { id: 3, name: 'Steel Edge', price: '$84', description: 'Crisp citrus with leather undertones' },
    { id: 4, name: 'Urban Essence', price: '$74', description: 'Modern spice with woody notes' },
    { id: 5, name: 'Royal Heritage', price: '$99', description: 'Classic elegance with tobacco leaf' },
    { id: 6, name: 'Golden Hour', price: '$82', description: 'Warm vanilla and sandalwood blend' },
  ],
  women: [
    { id: 1, name: 'Eternal Rose', price: '$95', description: 'Luxurious rose with floral depths' },
    { id: 2, name: 'Silk Whisper', price: '$85', description: 'Delicate jasmine and white musk' },
    { id: 3, name: 'Crystal Bloom', price: '$88', description: 'Peony and lily with subtle musk' },
    { id: 4, name: 'Midnight Garden', price: '$92', description: 'Intoxicating blend of night flowers' },
    { id: 5, name: 'Golden Sunset', price: '$87', description: 'Warm amber with floral notes' },
    { id: 6, name: 'Enchanted Orchard', price: '$91', description: 'Fruity elegance with floral heart' },
  ],
  unisex: [
    { id: 1, name: 'Neutral Ground', price: '$79', description: 'Balanced citrus and wood notes' },
    { id: 2, name: 'Pure Air', price: '$76', description: 'Fresh and clean with mineral accents' },
    { id: 3, name: 'Stone & Sage', price: '$82', description: 'Herbal sage with rocky minerals' },
    { id: 4, name: 'Zen Garden', price: '$81', description: 'Calming lavender and cedarwood' },
    { id: 5, name: 'Ocean Breeze', price: '$78', description: 'Fresh aquatic with salt notes' },
    { id: 6, name: 'Cosmic Light', price: '$86', description: 'Ethereal amber and exotic spices' },
  ],
};

export interface ShopProduct {
  id: string;
  name: string;
  category: 'Women' | 'Men' | 'Unisex';
  price: number;
  image: string;
  description: string;
  rating: number;
}

export const shopProducts: ShopProduct[] = [
  { id: '1', name: 'Essence Divine', category: 'Women', price: 89.99, image: '/products/essence-divine.jpg', description: 'A luminous floral fragrance with soft petals, warm amber, and a graceful musk finish.', rating: 4.8 },
  { id: '2', name: 'Golden Hour', category: 'Men', price: 79.99, image: '/products/golden-hour.jpg', description: 'A warm, polished composition of bright citrus, smooth woods, and understated spice.', rating: 4.7 },
  { id: '3', name: 'Midnight Bloom', category: 'Women', price: 94.99, image: '/products/midnight-bloom.jpg', description: 'Rich night-blooming florals layered with velvet woods for an unforgettable evening scent.', rating: 4.9 },
  { id: '4', name: 'Silk Satin', category: 'Unisex', price: 84.99, image: '/products/silk-satin.jpg', description: 'A balanced veil of clean musk, delicate iris, and creamy sandalwood.', rating: 4.6 },
  { id: '5', name: 'Pure Elegance', category: 'Unisex', price: 74.99, image: '/products/pure-elegance.jpg', description: 'Fresh, refined, and effortless with airy citrus notes and a soft mineral trail.', rating: 4.5 },
  { id: '6', name: 'Velvet Dreams', category: 'Women', price: 99.99, image: '/products/velvet-dreams.jpg', description: 'A luxurious blend of plush vanilla, dark rose, and smooth amber.', rating: 4.9 },
  { id: '7', name: 'Crystal Night', category: 'Men', price: 89.99, image: '/products/crystal-night.jpg', description: 'Crisp aromatic notes meet cool woods and a confident, lasting base.', rating: 4.7 },
  { id: '8', name: 'Rose Mystique', category: 'Women', price: 87.99, image: '/products/rose-mystique.jpg', description: 'A modern rose composition with bright fruit, soft petals, and warm musk.', rating: 4.8 },
  { id: '9', name: 'Amber Luxe', category: 'Men', price: 92.99, image: '/products/amber-luxe.jpg', description: 'Deep amber and polished leather softened by woods and a hint of vanilla.', rating: 4.8 },
  { id: '10', name: 'Pearl Essence', category: 'Unisex', price: 81.99, image: '/products/pearl-essence.jpg', description: 'A clean, elegant scent with luminous florals, soft musk, and gentle woods.', rating: 4.6 },
];

export function getShopProduct(id: string) {
  return shopProducts.find((product) => product.id === id);
}

export const catalogData = {
  men: {
    title: 'Men\'s Collection',
    description: 'Bold, sophisticated, and timeless fragrances crafted for the modern man',
    products: perfumes.men,
  },
  women: {
    title: 'Women\'s Collection',
    description: 'Elegant, enchanting, and luxurious scents for the contemporary woman',
    products: perfumes.women,
  },
  unisex: {
    title: 'Unisex Collection',
    description: 'Versatile and inclusive fragrances that transcend boundaries',
    products: perfumes.unisex,
  },
};
