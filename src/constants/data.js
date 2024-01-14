import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹1299',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹8999',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹2499',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹3599',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹2989',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$₹899',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$₹759',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$₹689',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$999',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$679',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Bib Gourmond',
    subtitle: 'Nestled in the heart of Provence, the Bistrot de Berne welcomes you in an exceptional Provençal setting, and offers top-of-the-range cuisine at a lower cost. ',
  },
  {
    imgUrl: images.award02,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Chef',
    subtitle: 'All these qualities have earned it a Bib Gourmand in the Michelin Guide.',
  },
];

export default { wines, cocktails, awards };
