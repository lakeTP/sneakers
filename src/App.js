import "./scss/index.scss";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";

const arr = [
	{
		title: "Air Jordan 1 Low Black Phantom",
		price: "1099$",
		imageUrl: "img/sneakers/images.jpg",
	},
	{
		title: "Air Jordan VI British Khaki",
		price: "550$",
		imageUrl: "img/sneakers/images3.png",
	},
	{
		title: "SB Dunk Low Mummy",
		price: "500$",
		imageUrl: "img/sneakers/images4.jpg",
	},
	{
		title: "Nike Air Max Plus NR Limited",
		price: "699$",
		imageUrl: "img/sneakers/images2.jpg",
	},
	{
		title: "Nike Air Force 1 Hi Utility 2.0i",
		price: "200$",
		imageUrl: "img/sneakers/images5.jpg",
	},
];

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const onAddToCart = (obj) => {
		setCartItems((prev) => [...prev, obj]);
	};
	const onChangeSearch = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper clear">
			{cartOpen ? (
				<Cart items={cartItems} onClose={() => setCartOpen(false)} />
			) : null}
			<Header onClickCart={() => setCartOpen(true)} />
			<div className="content">
				<div className="caption">
					<h1>
						{searchValue
							? `Search by request: "${searchValue}"`
							: "All sneakers"}
					</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="Search" />
						{searchValue && (
							<img
								className="clear"
								onClick={() => setSearchValue("")}
								src="/img/btn-remove.svg"
								alt="Clear"
							/>
						)}
						<input
							onChange={onChangeSearch}
							value={searchValue}
							placeholder="Search..."
						/>
					</div>
				</div>
				<div className="cards">
					{arr
						.filter((items) => items.title.toLowerCase().includes(searchValue))
						.map((items) => (
							<Card
								key={items.title}
								title={items.title}
								price={items.price}
								imageUrl={items.imageUrl}
								onPlus={(obj) => onAddToCart(obj)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
