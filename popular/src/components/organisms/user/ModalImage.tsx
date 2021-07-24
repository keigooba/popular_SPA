import {
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import {VFC, memo} from "react";
import {User} from "../../../types/api/user";

type Props = {
	users: Array<User>;
	isOpen: boolean;
	onClose: () => void;
};

const ModalImage: VFC<Props> = memo((props) => {
	const {isOpen, onClose, users} = props;
	console.log(users);
	return (
		<Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					<Wrap>
						<WrapItem>
							<Image src="" alt="" />
						</WrapItem>
					</Wrap>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
});

export default ModalImage;
