import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product | undefined {
      const product = products.find(p => p.id === productId);
      if (product !== undefined) {
        return product;
      }

      return undefined;
  }
}
const products = [
  {
    'id': 0,
    'title': 'Pierwszy produkt',
    'price': 24.99,
    'rating': 4.3,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Drugi produkt',
    'price': 64.99,
    'rating': 3.5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Trzeci produkt',
    'price': 74.99,
    'rating': 4.2,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Czwarty produkt',
    'price': 84.99,
    'rating': 3.9,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Piąty produkt',
    'price': 94.99,
    'rating': 5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Szósty produkt',
    'price': 54.99,
    'rating': 4.6,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
]
