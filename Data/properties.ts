export interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  status: 'sale' | 'sold';
  beds: number;
  baths: number;
  garage: number;
  image: string;
  description: string;
}
export const properties: Property[] = [
  {
    id: '1',
    title: 'Four Bedroom Starter on Frances Street',
    address: '7 Frances Street, Ngongotaha, NZ',
    price: 'Sold',
    status: 'sold',
    beds: 4,
    baths: 1,
    garage: 1,
    image: '/images/properties/frances-st.jpg',
    description: 'A fantastic starter home with plenty of space for the family...',
  },
  {
    id: '2',
    title: 'Clean, Easy, Low-Maintenance Living',
    address: '45A Blomfield street, Pukehangi, NZ',
    price: 'Sold',
    status: 'sold',
    beds: 3,
    baths: 1,
    garage: 1,
    image: '/images/properties/blomfield-st.jpg',
    description: 'Perfect for those seeking a low-maintenance lifestyle in a great location...',
  },
  // Add new listings here
];
