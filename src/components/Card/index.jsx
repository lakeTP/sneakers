import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, price, onPlus }) {
	const [isAdded, setIsAdded] = useState(false);
	const onClickPlus = () => {
		onPlus({ imageUrl, title, price });
		setIsAdded(!isAdded);
	};
	const [add, setAdd] = useState(false);
	const onClickFavorite = () => {
		setAdd(!add);
	};

	return (
		<div className={styles.card}>
			<img
				className={styles.favorite}
				src={add ? "/img/heart-logo.svg" : "/img/heart.svg"}
				onClick={onClickFavorite}
				alt=""
			/>

			<img width={140} height={140} alt="" src={imageUrl} />
			<h5>{title}</h5>
			<div className={styles.cardItems}>
				<div>
					<span>Price:</span>
					<br />
					<b>{price}</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickPlus}
					src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Card;
