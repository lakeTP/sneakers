function Cart({ onClose, items = [] }) {
	return (
		<div className="overlay">
			<div className="drawer ">
				<h2 className="cart">
					Cart <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" />
				</h2>
				<div className="items">
					{items.map((obj) => (
						<div className="cartItem">
							<div
								style={{ backgroundImage: `url(${obj.imageUrl})` }}
								className="cartItemImg"></div>
							<div className="cartInfo">
								<p>{obj.title}</p>
								<b>{obj.price}</b>
							</div>
							<img
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="Remove"
							/>
						</div>
					))}
				</div>
				<div className="pay">
					<div className="payInfo">
						<ul>
							<li className="firstInfo">
								<span>Total:</span>
								<div></div>
								<b>1488$</b>
							</li>
							<li className="lastInfo">
								<span>Tax 5%:</span>
								<div></div>
								<b>69$</b>
							</li>
						</ul>
						<button className="greyButton">Сheckout</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
