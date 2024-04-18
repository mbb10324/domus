import { useState } from "react";
import { FaEllipsisVertical, FaX } from "react-icons/fa6";
import "./Menu.css";

const darkTheme = `
:root {
    --primary-background: #141414;
    --secondary-background: #1e1e1e;
    --primary-text: #fefefe;
}`;

const lightTheme = `
:root {
    --primary-background: #fffff5;
    --secondary-background: #e9e9df;
    --primary-text: #141414;
}`;

type MenuProps = {
	setOrderMode: (orderMode: boolean) => void;
};

export default function Menu(props: MenuProps) {
	const { setOrderMode } = props;
	const [showMenu, setShowMenu] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || darkTheme);

	function handleTheme(theme: string) {
		localStorage.setItem("theme", theme);
		setTheme(theme);
	}

	return (
		<div className="menu">
			<div className={`menu-btn ${showMenu ? "close-btn" : "open-btn"}`} onClick={() => setShowMenu(!showMenu)}>
				{!showMenu ? <FaEllipsisVertical /> : <FaX />}
			</div>
			<div className={`menu-wrapper ${showMenu ? "menu-open" : "menu-closed"}`}>
				<h2>Menu</h2>
				<div className="theme">
					<h3>Theme:</h3>
					<button onClick={() => handleTheme(darkTheme)} className="hp-btn">
						Dark
					</button>
					<button onClick={() => handleTheme(lightTheme)} className="hp-btn">
						Light
					</button>
				</div>
				<button className="hp-btn">+ Add New Favorite</button>
				<button
					className="hp-btn"
					onClick={() => {
						setOrderMode(true);
						setShowMenu(false);
					}}
				>
					Order Favorites
				</button>
			</div>
			<div
				className={`menu-overlay ${showMenu ? "menu-overlay-open" : "menu-overlay-closed"}`}
				onClick={() => setShowMenu(false)}
			/>
			<style>{theme}</style>
		</div>
	);
}
