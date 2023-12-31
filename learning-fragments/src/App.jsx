import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [
    "Salad",
    "Green Vagitabel",
    "Rosted Chicken",
    "Grilled Beaf",
    "Grilled Fish",
    "Backed Fish",
  ];
  return (
    <>
      <h1>Healthy Food</h1>;
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
