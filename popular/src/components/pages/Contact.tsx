import {Text} from "@chakra-ui/react";
import {memo, VFC} from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import Title from "../atoms/text/Title";

const Contact: VFC = memo(() => {
	const onClickUrl = () => {
		window.location.href = "https://popular-32pe64nwja-an.a.run.app";
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
					(https://popular-32pe64nwja-an.a.run.app)
				</Text>
			</Text>
			<PrimaryButton colorScheme="teal" onClickUrl="/contact/list" width="50%">
				お問い合わせ一覧
			</PrimaryButton>
			<Text fontSize="xs">公開(2021/07/30)から3ヶ月間のみ表示</Text>
		</>
	);
});

export default Contact;
