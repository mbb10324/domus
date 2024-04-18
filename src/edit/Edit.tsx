import { FaEllipsisVertical } from "react-icons/fa6";
import "./Edit.css";
import { Website } from "../App";

type EditProps = {
	thisLink: Website;
	setShowEditModal: (showEditModal: boolean) => void;
	setSelectedLink: (link: Website) => void;
};

export default function Edit(props: EditProps) {
	const { thisLink, setShowEditModal, setSelectedLink } = props;
	return (
		<div
			className="edit"
			onClick={() => {
				setShowEditModal(true);
				setSelectedLink(thisLink);
			}}
		>
			<FaEllipsisVertical />
		</div>
	);
}
