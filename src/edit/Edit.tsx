import { FaEllipsisVertical } from "react-icons/fa6";
import "./Edit.css";

type EditProps = {
	thisLink: {
		name: string;
		url: string;
		image: string;
	};
	setShowEditModal: (showEditModal: boolean) => void;
	setSelectedLink: (link: { name: string; url: string; image: string }) => void;
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
