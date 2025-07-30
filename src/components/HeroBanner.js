import React from "react";

const categories = [
  { id: 1, name: "Indian Meals", image: "https://example.com/indian-meals.jpg" },
  { id: 2, name: "Fast Food", image: "https://example.com/fast-food.jpg" },
  { id: 3, name: "Chinese", image: "https://example.com/chinese.jpg" },
  { id: 4, name: "Desserts", image: "https://example.com/desserts.jpg" },
  { id: 5, name: "Beverages", image: "https://example.com/beverages.jpg" },
];

const CategoryCards = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {categories.map(cat => (
        <div key={cat.id} style={{ width: "180px", boxShadow: "0 0 8px rgba(0,0,0,0.15)", borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}>
          <img src={cat.image} alt={cat.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
          <div style={{ padding: "10px", backgroundColor: "#ffcc00", color: "#000", fontWeight: "bold", textAlign: "center" }}>
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
