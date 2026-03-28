export interface Product {
  slug: string
  code: string
  category: 'Aluminum Railing' | 'Aluminum Brackets'
  name: string
  description: string
  size: string
  glass: string
  lengths: string
  weight: string
  locking: 'Channel Lock' | 'Gasket Lock' | 'Wedge Lock'
  profileType: 'Continuous Bottom' | 'Bracket with Cover'
  finishes: string[]
  applications: string[]
  image: string
  diagram: string
  related: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'cr-01',
    code: 'CR-01',
    category: 'Aluminum Railing',
    name: 'Aluminum Continuous Bottom Profile',
    description: 'Standard continuous bottom profile for clean, unobstructed glass installations. Reliable and versatile.',
    size: '57 x 71 mm',
    glass: '12 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: 'See catalog',
    locking: 'Channel Lock',
    profileType: 'Continuous Bottom',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Residential', 'General Use', 'Balcony'],
    image: 'https://conceptrailindia.com/images/product-cr01.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr01.jpeg',
    related: ['cr-02', 'cr-03', 'cr-06'],
  },
  {
    slug: 'cr-02',
    code: 'CR-02',
    category: 'Aluminum Brackets',
    name: 'Aluminum Bracket with Cover Profile',
    description: 'Elegant bracket system with protective cover for enhanced aesthetics and durability. Ideal for modern architectural designs.',
    size: '65 x 96 mm',
    glass: '12 to 14 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '250 gm/ft (one side cover) · Bracket 65 mm: 450 gm',
    locking: 'Gasket Lock',
    profileType: 'Bracket with Cover',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Balcony', 'Staircase', 'Commercial'],
    image: 'https://conceptrailindia.com/images/product-cr02.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr02.jpeg',
    related: ['cr-01', 'cr-05', 'cr-03'],
  },
  {
    slug: 'cr-03',
    code: 'CR-03',
    category: 'Aluminum Railing',
    name: 'Aluminum Continuous Bottom Profile',
    description: 'Compact profile solution for residential and commercial applications. Offers excellent stability and clean aesthetics.',
    size: '50 x 60 mm',
    glass: '12 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '500 to 600 gm/ft',
    locking: 'Channel Lock',
    profileType: 'Continuous Bottom',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Residential', 'Indoor', 'Outdoor'],
    image: 'https://conceptrailindia.com/images/product-cr03.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr03.jpeg',
    related: ['cr-01', 'cr-04', 'cr-06'],
  },
  {
    slug: 'cr-04',
    code: 'CR-04',
    category: 'Aluminum Railing',
    name: 'Aluminum Continuous Bottom Profile',
    description: 'Heavy-duty profile designed for high-traffic areas and commercial installations. Maximum strength and durability.',
    size: '45 x 117 mm',
    glass: '12 to 14 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '1700 gm/ft',
    locking: 'Wedge Lock',
    profileType: 'Continuous Bottom',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Commercial', 'High-Traffic', 'Public Spaces'],
    image: 'https://conceptrailindia.com/images/product-cr04.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr04.jpeg',
    related: ['cr-01', 'cr-03', 'cr-06'],
  },
  {
    slug: 'cr-05',
    code: 'CR-05',
    category: 'Aluminum Brackets',
    name: 'Aluminum Bracket with Cover Profile',
    description: 'Premium bracket system with enhanced cover design. Perfect for luxury residential and hospitality projects.',
    size: '60 x 115 mm',
    glass: '12 to 14 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '270 gm/ft (one side cover) · Bracket 65 mm: 350 gm',
    locking: 'Wedge Lock',
    profileType: 'Bracket with Cover',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Luxury Residential', 'Hospitality', 'Premium Projects'],
    image: 'https://conceptrailindia.com/images/product-cr05.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr05.jpeg',
    related: ['cr-02', 'cr-06', 'cr-07'],
  },
  {
    slug: 'cr-06',
    code: 'CR-06',
    category: 'Aluminum Railing',
    name: 'Aluminum Continuous Bottom Profile',
    description: 'Versatile profile suitable for both indoor and outdoor applications. Excellent balance of strength and aesthetics.',
    size: '65 x 75 mm',
    glass: '12 to 14 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '900 gm/ft',
    locking: 'Wedge Lock',
    profileType: 'Continuous Bottom',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Indoor', 'Outdoor', 'Versatile'],
    image: 'https://conceptrailindia.com/images/product-cr06.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr06.jpeg',
    related: ['cr-01', 'cr-03', 'cr-04'],
  },
  {
    slug: 'cr-07',
    code: 'CR-07',
    category: 'Aluminum Railing',
    name: 'Aluminum Continuous Bottom Profile',
    description: 'Square profile design offering contemporary look and reliable performance. Ideal for modern architectural projects.',
    size: '70 x 70 mm',
    glass: '12 to 14 mm Glass',
    lengths: '12 Ft. / 15 Ft. / 16 Ft.',
    weight: '700 gm/ft',
    locking: 'Wedge Lock',
    profileType: 'Continuous Bottom',
    finishes: ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish'],
    applications: ['Modern Architecture', 'Contemporary', 'Residential'],
    image: 'https://conceptrailindia.com/images/product-cr07.jpeg',
    diagram: 'https://conceptrailindia.com/images/technical-diagram-cr07.jpeg',
    related: ['cr-01', 'cr-03', 'cr-04'],
  },
]

export const PRODUCT_FEATURES = [
  { title: 'Easy Installation', desc: 'Quick and hassle-free installation process with minimal tools required' },
  { title: 'Weather Proof', desc: 'Designed to withstand all weather conditions and environmental factors' },
  { title: 'Easy Cleaning', desc: 'Low maintenance design with smooth surfaces for effortless cleaning' },
  { title: 'Maintenance Free', desc: 'Durable materials that require no regular maintenance or upkeep' },
  { title: '100% Recyclable', desc: 'Environmentally friendly materials that are fully recyclable' },
  { title: 'Corrosion Resistance', desc: 'Superior protection against rust and corrosion for long-lasting performance' },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}
