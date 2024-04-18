import { mockWebsites } from "./mocksites";
import Menu from "./menu/Menu";
import Edit from "./edit/Edit";
import "./App.css";
import { useState } from "react";
import EditModal from "./editModal/EditModal";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function App() {
	const [showEdit, setShowEdit] = useState<number | undefined>();
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedLink, setSelectedLink] = useState(mockWebsites[0]);
	const [orderMode, setOrderMode] = useState(false);
	const storedWebsites: { name: string; url: string; image: string }[] = localStorage.getItem("websites")
		? JSON.parse(localStorage.getItem("websites")!)
		: mockWebsites;
	const [websites, setWebsites] = useState(storedWebsites);

	function handleMoveRight(website: { name: string; url: string; image: string }) {
		// move the order of the website to the right in the array and setWebsites to update state
		const index = websites.indexOf(website);
		if (index === websites.length - 1) return;
		const nextWebsite = websites[index + 1];
		websites[index] = nextWebsite;
		websites[index + 1] = website;
		setWebsites([...websites]);
	}

	function handleMoveLeft(website: { name: string; url: string; image: string }) {
		// move the order of the website to the left in the array and setWebsites to update state
		const index = websites.indexOf(website);
		if (index === 0) return;
		const previousWebsite = websites[index - 1];
		websites[index] = previousWebsite;
		websites[index - 1] = website;
		setWebsites([...websites]);
	}

	return (
		<>
			<div className="app">
				<div className="content">
					{websites.map((website, index) => (
						<div className="link" onMouseEnter={() => setShowEdit(index)} onMouseLeave={() => setShowEdit(undefined)}>
							{showEdit === index && (
								<Edit setShowEditModal={setShowEditModal} thisLink={website} setSelectedLink={setSelectedLink} />
							)}
							<a href={website.url} target="_blank" rel="noreferrer" key={index} className="link-wrapper">
								<div className="img-wrapper">
									<img src={website.image} alt={website.name} />
								</div>
								<h3>{website.name}</h3>
							</a>
							{orderMode && (
								<div className="order">
									<div className="order-btn" onClick={() => handleMoveLeft(website)}>
										<FaArrowLeft />
									</div>
									<div className="order-btn" onClick={() => handleMoveRight(website)}>
										<FaArrowRight />
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				{orderMode && (
					<button className="hp-btn hp-btn-light" onClick={() => setOrderMode(!orderMode)}>
						Save Order
					</button>
				)}
				{websites.length === 0 && <button className="hp-btn hp-btn-light">+ Add New Favorite</button>}
			</div>
			<EditModal
				key={selectedLink.name}
				showEditModal={showEditModal}
				setShowEditModal={setShowEditModal}
				link={selectedLink}
			/>
			<Menu setOrderMode={setOrderMode} />
		</>
	);
}

export default App;
