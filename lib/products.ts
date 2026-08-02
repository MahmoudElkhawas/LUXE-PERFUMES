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
