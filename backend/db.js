//

// Database
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

var item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM(["draft", "live", "archived"]),
    defaultValue: "live",
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

var order = sequelize.define("Order", {
  date: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
    allowNull: false,
  },
});

var orderItem = sequelize.define("OrderItem", {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

async function createMenuItems() {
  await sequelize.sync({ force: true });
  await item.create({
    name: "Classic Burger",
    desc: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce on a toasted bun.",
    category: "Burgers",
    price: 10.99,
    imageUrl: "https://example.com/classic-burger.jpg",
  });

  await item.create({
    name: "Margherita Pizza",
    desc: "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
    category: "Pizzas",
    price: 12.99,
    imageUrl: "https://example.com/margherita-pizza.jpg",
  });

  await item.create({
    name: "Caesar Salad",
    desc: "Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
    category: "Salads",
    price: 8.99,
    imageUrl: "https://example.com/caesar-salad.jpg",
  });
  // Example Seafood Dish
  await item.create({
    name: "Grilled Salmon",
    desc: "Freshly grilled salmon fillet with lemon butter sauce and a side of roasted vegetables.",
    category: "Seafood",
    price: 16.99,
    imageUrl: "https://example.com/grilled-salmon.jpg",
  });

  // Example Pasta Dish
  await item.create({
    name: "Spaghetti Bolognese",
    desc: "Classic spaghetti with slow-cooked beef Bolognese sauce topped with grated Parmesan cheese.",
    category: "Pasta",
    price: 13.99,
    imageUrl: "https://example.com/spaghetti-bolognese.jpg",
  });

  // Example Vegetarian Option
  await item.create({
    name: "Quinoa Salad Bowl",
    desc: "Nutrient-packed quinoa salad with mixed greens, cherry tomatoes, avocado, and balsamic vinaigrette.",
    category: "Vegetarian",
    price: 11.99,
    imageUrl: "https://example.com/quinoa-salad.jpg",
  });

  // Example Dessert
  await item.create({
    name: "Chocolate Lava Cake",
    desc: "Warm and gooey chocolate lava cake with a scoop of vanilla ice cream.",
    category: "Desserts",
    price: 8.49,
    imageUrl: "https://example.com/chocolate-lava-cake.jpg",
  });

  // Example Beverage
  await item.create({
    name: "Iced Caramel Macchiato",
    desc: "Refreshing iced coffee with vanilla syrup, milk, and a drizzle of caramel.",
    category: "Beverages",
    price: 4.99,
    imageUrl: "https://example.com/iced-caramel-macchiato.jpg",
  });
}

order.belongsToMany(item, { through: orderItem });

createMenuItems();
