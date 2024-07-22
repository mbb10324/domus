import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useBreakpoints from "./hooks/useBreakpoints";
import LegalsModal from "./legalsModal/LegalsModal";
import EditModal from "./editModal/EditModal";
import FaqModal from "./faqModal/FaqModal";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Menu from "./menu/Menu";
import Edit from "./edit/Edit";
import "./App.css";

export type Website = {
	name: string;
	url: string;
};

function App() {
	const breakpoint = useBreakpoints(768);
	const [showEdit, setShowEdit] = useState<number | undefined>();
	const [showEditModal, setShowEditModal] = useState(false);
	const [showFAQModal, setShowFAQModal] = useState(false);
	const [showLegalsModal, setShowLegalsModal] = useState(false);
	const [selectedLink, setSelectedLink] = useState<Website>({ name: "", url: "" });
	const [orderMode, setOrderMode] = useState(false);
	const storedWebsites: Website[] = localStorage.getItem("websites") ? JSON.parse(localStorage.getItem("websites")!) : [];
	const [websites, setWebsites] = useState(storedWebsites);
	const [longPressTimer, setLongPressTimer] = useState<number | null>(null);
	const [isLongPress, setIsLongPress] = useState(false);
	const includeSearch = localStorage.getItem("includeSearch") || "Yes";

	useEffect(() => {
		if (!showEditModal) {
			setTimeout(() => {
				setSelectedLink({ name: "", url: "" });
			}, 500);
		}
	}, [showEditModal]);

	function handleMoveRight(website: Website) {
		// move the order of the website to the right in the array and setWebsites to update state
		const index = websites.indexOf(website);
		if (index === websites.length - 1) return;
		const nextWebsite = websites[index + 1];
		websites[index] = nextWebsite;
		websites[index + 1] = website;
		setWebsites([...websites]);
		localStorage.setItem("websites", JSON.stringify(websites));
	}

	function handleMoveLeft(website: Website) {
		// move the order of the website to the left in the array and setWebsites to update state
		const index = websites.indexOf(website);
		if (index === 0) return;
		const previousWebsite = websites[index - 1];
		websites[index] = previousWebsite;
		websites[index - 1] = website;
		setWebsites([...websites]);
		localStorage.setItem("websites", JSON.stringify(websites));
	}

	function handleLongPressStart(website: Website, event: React.TouchEvent) {
		const timer = setTimeout(() => {
			event.preventDefault();
			setShowEditModal(true);
			setSelectedLink(website);
			setIsLongPress(true);
		}, 700);
		setLongPressTimer(timer);
	}

	function handleLongPressEnd(event: React.TouchEvent) {
		if (longPressTimer) {
			clearTimeout(longPressTimer);
			setLongPressTimer(null);
		}
		if (isLongPress) {
			event.preventDefault();
			setIsLongPress(false);
		}
	}

	return (
		<>
			<div className="app">
				{includeSearch === "Yes" && (
					<form method="GET" action="https://www.google.com/search" className="google-search">
						<input name="q" type="text" className="google-input" placeholder="Google Search..." />
						<button type="submit" className="google-btn">
							<FiSearch />
						</button>
					</form>
				)}
				<div className="content">
					{websites.map((website, index) => (
						<div
							key={index}
							className="link"
							onMouseEnter={() => !breakpoint && setShowEdit(index)}
							onMouseLeave={() => !breakpoint && setShowEdit(undefined)}
							onTouchStart={(e) => handleLongPressStart(website, e)}
							onTouchEnd={handleLongPressEnd}
						>
							{showEdit === index && <Edit setShowEditModal={setShowEditModal} thisLink={website} setSelectedLink={setSelectedLink} />}
							<a href={website.url} key={index} className="link-wrapper" onContextMenu={(e) => e.preventDefault()}>
								<div className="img-wrapper">
									<img
										src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${website.url}/&size=32`}
										alt="favicon"
										onContextMenu={(e) => e.preventDefault()}
									/>
								</div>
								<h3 onContextMenu={(e) => e.preventDefault()}>{website.name}</h3>
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
					{websites.length === 0 && (
						<>
							<button className="hp-btn hp-btn-light" onClick={() => setShowEditModal(true)}>
								+ Add New Favorite
							</button>
							<button className="hp-btn hp-btn-light" onClick={() => setShowFAQModal(true)}>
								Read Our FAQ To Get Started
							</button>
						</>
					)}
				</div>
				{orderMode && (
					<button className="hp-btn hp-btn-light save-btn" onClick={() => setOrderMode(!orderMode)}>
						Exit Order Mode
					</button>
				)}
			</div>
			<EditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} link={selectedLink} websites={websites} />
			<FaqModal showFAQModal={showFAQModal} setShowFAQModal={setShowFAQModal} />
			<LegalsModal showLegalsModal={showLegalsModal} setShowLegalsModal={setShowLegalsModal} />
			<Menu
				setOrderMode={setOrderMode}
				setShowEditModal={setShowEditModal}
				setShowFAQModal={setShowFAQModal}
				setShowLegalsModal={setShowLegalsModal}
			/>
		</>
	);
}

export default App;
