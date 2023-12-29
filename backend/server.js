// server
const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi!!!!");
});

// Items
app.get("/api/items", (req, res) => {
  // mock
  res.json([
    {
      name: "Classic Burger",
      desc: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce on a toasted bun.",
      category: "Burgers",
      price: 10.99,
      imageUrl: "https://example.com/classic-burger.jpg",
    },
    {
      name: "Margherita Pizza",
      desc: "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
      category: "Pizzas",
      price: 12.99,
      imageUrl: "https://example.com/margherita-pizza.jpg",
    },
  ]);
});

// Orders
app.get("/api/orders/:id", (req, res) => {
  // mock
  res.json({
    id: req.params.id,
    date: new Date(),
    price: 10,
  });
});

app.get("/api/orders", (req, res) => {
  // mock
  res.json([
    {
      id: 1,
      date: new Date(),
      price: 10,
    },
    {
      id: 2,
      date: new Date(),
      price: 20,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}........`);
});
