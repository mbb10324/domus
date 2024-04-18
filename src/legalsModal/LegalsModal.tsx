import { useState } from "react";
import Modal from "../modal/Modal";
import "./LegalsModal.css";

type LegalsModalProps = {
	showLegalsModal: boolean;
	setShowLegalsModal: (showLegalsModal: boolean) => void;
};

export default function LegalsModal(props: LegalsModalProps) {
	const { showLegalsModal, setShowLegalsModal } = props;
	const [showPrivacy, setShowPrivacy] = useState(true);

	return (
		<Modal showModal={showLegalsModal} setShowModal={setShowLegalsModal}>
			<div className="menu-text">
				<div className="btn-selector">
					<button className={`hp-btn ${showPrivacy ? "hp-btn-selected" : ""}`} onClick={() => setShowPrivacy(true)}>
						Privacy Policy
					</button>
					<button className={`hp-btn ${!showPrivacy ? "hp-btn-selected" : ""}`} onClick={() => setShowPrivacy(false)}>
						Terms of Service
					</button>
				</div>
				{showPrivacy ? (
					<>
						<p>Last Updated: April 18, 2024</p>
						<h4>Introduction</h4>
						<p>
							Thank you for visiting Domus, located at https://milesbreman.com/domus. This Privacy Policy outlines Domus' commitment to
							respecting your privacy. As the site doesn't collect any personal information, this is a simple policy designed to explain
							that fact.
						</p>
						<h4>Personal Information</h4>
						<p>
							This site does not collect any personal information. Visitors are free to navigate the site without providing any
							personally identifiable information.
						</p>
						<h4>Cookies and Tracking</h4>
						<p>
							Cookies are files with small amounts of data. Cookies are sent to your browser from a web site and stored on your
							computer's hard drive. Like many sites, we use "cookies". We do not use cookies to collect personally identifiable
							information. We only use cookies for the purposes of storing your favorites, and your theme. You can instruct your browser
							to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, this site will
							not function as intended.
						</p>
						<h4>Third-Party Links</h4>
						<p>
							This website gives you the opportunity to favorite websites by way of providing third-party url's that are then stored in
							a cookie on your system. Domus is not responsible for the privacy practices or the content of these third-party sites.
							Please review the privacy policies of any third-party sites you visit.
						</p>
						<h4>Security</h4>
						<p>
							While no data collection is involved with the use of this site, Domus takes reasonable measures to protect the integrity
							of the website and its content.
						</p>
						<h4>Changes to This Policy</h4>
						<p>
							Domus reserves the right to make changes to this Privacy Policy at any time. Any changes will be updated on this page and
							the last updated date will be revised. Please review this policy periodically to stay informed.
						</p>
						<h4>Contact Information</h4>
						<p>
							If you have any questions or concerns about this Privacy Policy, please feel free to contact me at milesbreman@gmail.com.
						</p>
					</>
				) : (
					<>
						<p>Last Updated: April 18, 2024</p>
						<h4>Introduction</h4>
						<p>
							By accessing and using this website, located at https://milesbreman.com/domus, you accept and agree to be bound by the
							terms and provisions of this agreement. This website is owned and operated by Miles Breman.
						</p>
						<h4>Intellectual Property</h4>
						<p>
							The content on this website, including but not limited to text, images, videos, and code, is owned by Mles Breman and may
							not be used, copied, modified, or distributed without prior written consent.
						</p>
						<h4>Use of the Website</h4>
						<p>
							You may use this website for lawful purposes only. You agree not to use the website in any way that could damage the
							website or general user experience.
						</p>
						<h4>Prohibited Activities</h4>
						<p>
							You may not use this website or any links/contact/email information to transmit or send unsolicited or unauthorized
							advertising, promotional materials, junk mail, spam, or any other form of solicitation. You also may not attempt to gain
							unauthorized access to the website, the server on which the website is stored, or any server, computer, or database
							connected to the website. Doing so may result in legal action.
						</p>
						<h4>External Links</h4>
						<p>
							This website may contain links to external websites that are not controlled by Miles Breman. I am not responsible for the
							content or practices of any linked websites. The inclusion of any link does not imply endorsement by Miles Breman.
						</p>
						<h4>Limitation of Liability</h4>
						<p>
							You agree that, to the fullest extent permitted by applicable law, Miles Breman will not be liable for any loss or damage
							arising out of or in connection with your use of (or inability to use) this website, including but not limited to,
							indirect or consequential loss or damage, loss of data or profits, or damage to your computer systems.
						</p>
						<h4>Changes to These Terms</h4>
						<p>
							I reserve the right to make changes to these Terms and Conditions at any time. Any changes will be updated on this page
							and the last updated date will be revised. Please review this page periodically to stay informed.
						</p>
						<h4>Governing Law</h4>
						<p>These Terms and Conditions are governed in accordance with the laws of the State of Texas, United States.</p>
						<h4>Contact Information</h4>
						<p>
							If you have any questions or concerns about these Terms and Conditions, please feel free to contact me at
							milesbreman@gmail.com.
						</p>
					</>
				)}
			</div>
		</Modal>
	);
}
