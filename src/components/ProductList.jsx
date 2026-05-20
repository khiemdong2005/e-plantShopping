
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

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
      ],
    },

    {
      category: "Succulents",
      plants: [
        {
          id: 4,
          name: "Aloe Vera",
          price: 15,
          image:
            "https://images.unsplash.com/photo-1459156212016-c812468e2115",
        },

        {
          id: 5,
          name: "Cactus",
          price: 12,
          image:
            "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
        },

        {
          id: 6,
          name: "Haworthia",
          price: 22,
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
        },
      ],
    },

    {
      category: "Flowering Plants",
      plants: [
        {
          id: 7,
          name: "Orchid",
          price: 30,
          image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
        },

        {
          id: 8,
          name: "Rose",
          price: 28,
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
        },

        {
          id: 9,
          name: "Lavender",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
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
                onClick={() => dispatch(addToCart(plant))}
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