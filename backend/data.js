import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: "Jon",
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: "Bobby",
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            image: '/images/p1.jpg',
            category: 'Shirts',
            brand: 'Nike',
            price: 120,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Slim Shirt',
            image: '/images/p2.jpg',
            category: 'Shirts',
            brand: 'Adidas',
            price: 50,
            countInStock: 0,
            rating: 3,
            numReviews: 8,
            description: 'high quality product'

        },
        {
            name: 'Nike Slim Pants',
            image: '/images/p4.jpg',
            category: 'Pants',
            brand: 'Nike',
            price: 75,
            countInStock: 20,
            rating: 4.5,
            numReviews: 5,
            description: 'high quality product'
        },
        {
            name: 'Adidas Slim Pants',
            image: '/images/p5.jpg',
            category: 'Pants',
            brand: 'Adidas',
            price: 90,
            countInStock: 12,
            rating: 4.5,
            numReviews: 1000,
            description: 'high quality product'
        },
        {
            name: 'Lacoste Slim Shirt',
            image: '/images/p3.jpg',
            category: 'Shirts',
            brand: 'Lacoste',
            price: 87,
            countInStock: 13,
            rating: 5,
            numReviews: 90,
            description: 'high quality product'
        }
    ]
}

export default data;