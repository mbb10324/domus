import Modal from "../modal/Modal";
import "./FaqModal.css";

type FaqModalProps = {
	showFAQModal: boolean;
	setShowFAQModal: (showFAQModal: boolean) => void;
};

export default function FaqModal(props: FaqModalProps) {
	const { showFAQModal, setShowFAQModal } = props;
	return (
		<Modal showModal={showFAQModal} setShowModal={setShowFAQModal}>
			<div className="menu-text">
				<h3>FAQ</h3>
				<h4>What is this?</h4>
				<p>This website is meant to be a simple and user friendly homepage that you can customize with your favorite links.</p>
				<h4>How do I add a new favorite?</h4>
				<p>Click the "+ Add New Favorite" button in the menu.</p>
				<h4>How do I edit a favorite?</h4>
				<p>
					On desktop; click the three dots on the favorite you want to edit. On mobile; tap and hold a favorite for at least one second to
					edit.
				</p>
				<h4>How do I remove a favorite?</h4>
				<p>Enter the edit mode as previously described, and click the 'Remove Favorite' button.</p>
				<h4>How do I change the order of favorites?</h4>
				<p>
					Click the "Order Favorites" button in the menu. Then use the arrows under each favorite to change there respective order. Once you
					have the order that you would like, click the 'Exit Order Mode' button.{" "}
				</p>
				<h4>Where do the images for each favorite come from?</h4>
				<p>The images are fetched from Google's favicon service. If a website does not have a favicon, a default icon will be displayed.</p>
				<h4>What does Dormus stand for?</h4>
				<p>Dormus is a Latin word meaning "home".</p>
			</div>
		</Modal>
	);
}
