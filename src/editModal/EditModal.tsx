import { useEffect, useState } from "react";
import "./EditModal.css";
import { Website } from "../App";
import Modal from "../modal/Modal";

type EditModalProps = {
	showEditModal: boolean;
	setShowEditModal: (showEditModal: boolean) => void;
	link: Website;
	websites: Website[];
};

export default function EditModal(props: EditModalProps) {
	const { websites, link, showEditModal, setShowEditModal } = props;
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");

	useEffect(() => {
		if (showEditModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		if (link) {
			setName(link.name);
			setUrl(link.url);
		}
		// eslint-disable-next-line
	}, [showEditModal]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const updatedWebsites = websites.map((website) => {
			if (website === link) {
				return {
					name,
					url,
				};
			}
			return website;
		});
		if (!link) {
			updatedWebsites.push({ name, url });
		}
		localStorage.setItem("websites", JSON.stringify(updatedWebsites));
		window.location.reload();
	}

	function handleRemove() {
		const updatedWebsites = websites.filter((website) => website !== link);
		localStorage.setItem("websites", JSON.stringify(updatedWebsites));
		window.location.reload();
	}

	return (
		<Modal showModal={showEditModal} setShowModal={setShowEditModal}>
			<div className="edit-modal-content">
				<h2>{link.name.length > 0 ? "Edit Favorite" : "Add Favorite"}</h2>
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<label htmlFor="name">Name:</label>
						<input name="name" id="name" type="text" maxLength={40} value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="input-group">
						<label htmlFor="url">URL:</label>
						<input name="url" id="url" type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
					</div>
					<button type="submit">Save</button>
					{link.name.length > 0 && (
						<button type="button" onClick={handleRemove}>
							Remove
						</button>
					)}
				</form>
			</div>
		</Modal>
	);
}
