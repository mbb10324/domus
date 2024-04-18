import { useState } from "react";
import { FaEllipsisVertical, FaX } from "react-icons/fa6";
import "./Menu.css";

const darkTheme = `
:root {
    --primary-background: #0f0f0f;
    --secondary-background: #212121;
    --primary-text: #fefefe;
}`;

const lightTheme = `
:root {
    --primary-background: #fefefe;
    --secondary-background: #ededec;
    --primary-text: #141414;
}`;

const githubTheme = `
:root {
    --primary-background: #0d1117;
    --secondary-background: #161b22;
    --primary-text: #c0c3c7;
}`;

type MenuProps = {
	setOrderMode: (orderMode: boolean) => void;
	setShowEditModal: (showEditModal: boolean) => void;
	setShowFAQModal: (showFAQModal: boolean) => void;
	setShowLegalsModal: (showLegalsModal: boolean) => void;
};

export default function Menu(props: MenuProps) {
	const { setOrderMode, setShowEditModal, setShowFAQModal, setShowLegalsModal } = props;
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
					<button
						onClick={() => handleTheme(darkTheme)}
						className={`hp-btn ${theme === darkTheme ? "hp-btn-selected" : ""}`}
					>
						Dark
					</button>
					<button
						onClick={() => handleTheme(lightTheme)}
						className={`hp-btn ${theme === lightTheme ? "hp-btn-selected" : ""}`}
					>
						Light
					</button>
					<button
						onClick={() => handleTheme(githubTheme)}
						className={`hp-btn ${theme === githubTheme ? "hp-btn-selected" : ""}`}
					>
						Github
					</button>
				</div>
				<button
					className="hp-btn"
					onClick={() => {
						setShowEditModal(true);
						setShowMenu(false);
					}}
				>
					+ Add New Favorite
				</button>
				<button
					className="hp-btn"
					onClick={() => {
						setOrderMode(true);
						setShowMenu(false);
					}}
				>
					Order Favorites
				</button>
				<button
					className="hp-btn"
					onClick={() => {
						setShowFAQModal(true);
						setShowMenu(false);
					}}
				>
					FAQ
				</button>
				<button
					className="hp-btn"
					onClick={() => {
						setShowLegalsModal(true);
						setShowMenu(false);
					}}
				>
					Privacy & Terms
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
