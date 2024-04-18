import { FaX } from "react-icons/fa6";
import "./Modal.css";

type ModalProps = {
	children?: React.ReactNode;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
};

export default function Modal(props: ModalProps) {
	const { children, showModal, setShowModal } = props;
	return (
		<>
			<div className={`modal ${showModal ? "modal-open" : "modal-closed"}`}>
				{children}
				<div className="modal-close-btn" onClick={() => setShowModal(false)}>
					<FaX />
				</div>
			</div>
			<div className={`modal-overlay ${showModal ? "modal-overlay-open" : "modal-overlay-closed"}`} onClick={() => setShowModal(false)} />
		</>
	);
}
