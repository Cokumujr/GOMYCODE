//defining product class 

class Product {
    constructor(id,name,price){
        this.id= id;
        this.name= name;
        this.price= price;
        
    }
}

//defining shopcartItem class

class ShoppingCartItem {
    constructor(product, quantity){
        this.product= product;
        this.quantity= quantity;
    }
     
    getTotalPrice(){
        return this.product.price * this.quantity;
    }
}

//defining ShoppingCart class

class ShoppingCart {
    constructor() {
        this.items = [];
    }


    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total of items inside the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to display cart items
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
        console.log(`Total Cart Price: ${this.getTotal()}`);
    }
}

///testing 
// Create products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);
const product3 = new Product(3, 'Headphones', 100);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart after removing an item
cart.displayCart();
