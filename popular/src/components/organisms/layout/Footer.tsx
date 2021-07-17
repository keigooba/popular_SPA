import {VFC, memo} from "react";
import {Container, Text, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Footer: VFC = memo(() => {
	return (
		<Container bg="#F5E5FF" minWidth="100%" position="fixed" bottom="0" p="5">
			<Text mb="4" fontWeight="bold">
				&copy; popular
			</Text>
			<SLink to="/agreement">利用規約</SLink>
			<Br />
			<SLink to="/privacy_policy">プライバシーボリシー</SLink>
			<Br />
			<SLink to="/contact">お問い合わせ</SLink>
			<Br />
			<SLink to="https://twitter.com/hx_kei">
				運営者
				<Image
					src="https://bit.ly/sage-adebayo"
					borderRadius="full"
					borderWidth="1px"
					width="30px"
					borderStyle="solid"
					alt="@hx_kei"
					display="inline"
				/>
				@hx_kei
			</SLink>
		</Container>
	);
});

const SLink = styled(Link)`
	color: #9d00ff;
`;

const Br = styled.br`
	display: block;
	content: "";
	margin-bottom: 0.1rem;
`;

export default Footer;
