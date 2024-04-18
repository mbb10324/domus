import { useState } from "react";
import "./EditModal.css";
import { FaX } from "react-icons/fa6";

type EditModalProps = {
	showEditModal: boolean;
	setShowEditModal: (showEditModal: boolean) => void;
	link: {
		name: string;
		url: string;
		image: string;
	};
};

export default function EditModal(props: EditModalProps) {
	const { link, showEditModal, setShowEditModal } = props;
	const [name, setName] = useState(link.name);
	const [url, setUrl] = useState(link.url);
	const [image, setImage] = useState(link.image);

	return (
		<>
			<div className={`edit-modal ${showEditModal ? "edit-modal-open" : "edit-modal-closed"}`}>
				<div className="edit-modal-content">
					<h2>Edit Link</h2>
					<form>
						<div className="input-group">
							<label htmlFor="name">Name:</label>
							<input name="name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div className="input-group">
							<label htmlFor="url">URL:</label>
							<input name="url" id="url" type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
						</div>
						<div className="input-group">
							<label htmlFor="image">Image:</label>
							<input name="image" id="image" type="url" value={image} onChange={(e) => setImage(e.target.value)} />
						</div>
						<button type="submit">Save</button>
						<button type="button">Remove</button>
					</form>
				</div>
				<div className="edit-close-btn" onClick={() => setShowEditModal(false)}>
					<FaX />
				</div>
			</div>
			<div
				className={`edit-overlay ${showEditModal ? "edit-overlay-open" : "edit-overlay-closed"}`}
				onClick={() => setShowEditModal(false)}
			/>
		</>
	);
}
