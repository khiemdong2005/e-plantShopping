import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const categories = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: 1,
          name: "Snake Plant",
          price: 20,
          image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32f5591",
        },
        {
          id: 2,
          name: "Peace Lily",
          price: 25,
          image:
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        },
        {
          id: 3,
          name: "Spider Plant",
          price: 18,
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        },
        {
          id: 4,
          name: "Rubber Plant",
          price: 22,
          image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        },
        {
          id: 5,
          name: "Areca Palm",
          price: 30,
          image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
        },
        {
          id: 6,
          name: "Boston Fern",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        },
      ],
    },

    {
      category: "Succulents",
      plants: [
        {
          id: 7,
          name: "Aloe Vera",
          price: 15,
          image:
            "https://images.unsplash.com/photo-1459156212016-c812468e2115",
        },
        {
          id: 8,
          name: "Cactus",
          price: 12,
          image:
            "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
        },
        {
          id: 9,
          name: "Haworthia",
          price: 22,
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
        },
        {
          id: 10,
          name: "Echeveria",
          price: 17,
          image:
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        },
        {
          id: 11,
          name: "Jade Plant",
          price: 20,
          image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        },
        {
          id: 12,
          name: "Zebra Plant",
          price: 24,
          image:
            "https://images.unsplash.com/photo-1459156212016-c812468e2115",
        },
      ],
    },

    {
      category: "Flowering Plants",
      plants: [
        {
          id: 13,
          name: "Orchid",
          price: 30,
          image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
        },
        {
          id: 14,
          name: "Rose",
          price: 28,
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
        },
        {
          id: 15,
          name: "Lavender",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        },
        {
          id: 16,
          name: "Sunflower",
          price: 26,
          image:
            "https://images.unsplash.com/photo-1470509037663-253afd7f0f51",
        },
        {
          id: 17,
          name: "Daisy",
          price: 16,
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
        },
        {
          id: 18,
          name: "Tulip",
          price: 23,
          image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Our Plants</h1>

      {categories.map((categoryItem, index) => (
        <div key={index}>
          <h2>{categoryItem.category}</h2>

          {categoryItem.plants.map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="200"
              />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button
                onClick={() => dispatch(addItem(plant))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;