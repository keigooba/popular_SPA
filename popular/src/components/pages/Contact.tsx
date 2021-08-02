import {Text} from "@chakra-ui/react";
import {memo, VFC} from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import Title from "../atoms/text/Title";
import ContactForm from "../organisms/form/ContactForm";

const Contact: VFC = memo(() => {
	const onClickUrl = () => {
		window.location.href = "https://popular-e7b81.web.app";
	};

	return (
		<>
			<Title>popularに関するお問い合わせ</Title>
			<Text mb={4}>
				感想・不具合・改善点などお聞かせください
				<br />
				popular
				<Text
					onClick={onClickUrl}
					as="a"
					_hover={{cursor: "pointer"}}
					color="#9d00ff"
				>
					(https://popular-e7b81.web.app)
				</Text>
			</Text>
			<PrimaryButton colorScheme="teal" onClickUrl="/contact/list" width="50%">
				お問い合わせ一覧
			</PrimaryButton>
			<ContactForm />
		</>
	);
});

export default Contact;
