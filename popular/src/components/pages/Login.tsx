import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {memo, VFC} from "react";
import {FaTwitter} from "react-icons/fa";
import {Link, useHistory} from "react-router-dom";
import {useLoginUser} from "../../hooks/providers/useLoginUserProvider";
import Title from "../atoms/text/Title";
import ShareButton from "../molecules/button/ShareButton";
import styled from "styled-components";

const Login: VFC = memo(() => {
	const {loginUser} = useLoginUser();
	const history = useHistory();

	const onClickLogin = () => history.push("/home");

	return (
		<Flex
			justify="spance-between"
			padding={{base: 1, md: 2}}
			mx="auto"
			color="#9d00ff"
		>
			<OrderContainer3 order={2}>
				{/* <Image src="/img/hukidashi.png" alt="吹き出し" /> */}
				<Text color="red">これで僕も人気者！！</Text>
			</OrderContainer3>
			<OrderContainer2 order={3}>
				<Text fontSize="2xl" fontWeight="500">フリー画像投稿アプリ</Text>
				<Text fontSize="5xl" fontWeight="bold">
					<i className="far fa-image"></i>popular
				</Text>
				{/* <Image src="/img/happy.png" alt="喜ぶ家族のイラスト" /> */}
				{loginUser || (
					<>
						<Button
							leftIcon={<FaTwitter />}
							colorScheme="twitter"
							onClick={onClickLogin}
							width="100%"
							fontSize="xl"
							height="40px"
						>
							ツイッターでログイン
						</Button>
						<Text fontSize="xs" color="gray">
							<SLink to="/agreement">利用規約</SLink>・
							<SLink to="/privacy_policy">プライバシーポリシー</SLink>
							に同意の上でご利用ください
						</Text>
					</>
				)}
				{loginUser && (
					<Button
						leftIcon={<FaTwitter />}
						colorScheme="twitter"
						onClick={onClickLogin}
					>
						ホーム
					</Button>
				)}
			</OrderContainer2>
			<OrderContainer order={1}>
				<Title>つかいかた</Title>
				<Box>
					<Text>① 好みの画像を検索しよう</Text>
					<Image src="/popular/src/img/use_img1.png" />
				</Box>
				<ShareButton />
			</OrderContainer>
		</Flex>
	);
});

const OrderContainer3 = styled.div`
	order: 3;
	width: 100%;
`;

const OrderContainer2 = styled.div`
	order: 2;
	width: 100%;
`;

const OrderContainer = styled.div`
	order: 1;
	width: 100%;
`;

const SLink = styled(Link)`
	text-decoration: underline;
`;

export default Login;
