function printUser({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}

printUser({ name: "Shampa", age: 22 });

//nested
type Seller = {
  name: string;
  rating: number;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  seller: Seller;
};

function printItem({ name, price, quantity, seller: { name: sellerName, rating } }: CartItem) {
  console.log(`${name} x ${quantity} = ${price * quantity} | Seller: ${sellerName} (${rating})`);
}

const laptop: CartItem = {
  id: 101,
  name: "Laptop",
  price: 50000,
  quantity: 1,
  seller: { name: "TechStore", rating: 4.8 }
};

printItem(laptop);
