import {Button, Flex, Image, Text} from "@chakra-ui/react";
import {memo, VFC} from "react";
import {FaTwitter} from "react-icons/fa";
import {Link, useHistory} from "react-router-dom";
import {useLoginUser} from "../../hooks/providers/useLoginUserProvider";
import styled from "styled-components";
import Hukidashi from "../../img/hukidashi.png";

import Happy from "../../img/happy.png";
import Usage from "../organisms/Usage";

const Login: VFC = memo(() => {
	const {loginUser} = useLoginUser();
	const history = useHistory();

	const onClickLogin = () => history.push("/home");

	return (
		<Flex justify="spance-between" color="#9d00ff">
			<OrderContainer3>
				<Image src={Hukidashi} alt="吹き出し" />
				<Text
					color="red"
					position="absolute"
					fontWeight="bold"
					fontSize="2xl"
					top="135px"
					left="55px"
				>
					これで僕も人気者！！
				</Text>
			</OrderContainer3>
			<OrderContainer2>
				<Text fontSize="2xl" fontWeight="500">
					フリー画像投稿アプリ
				</Text>
				<Text fontSize="7xl" fontWeight="bold" mb={14}>
					<i className="far fa-image"></i>popular
				</Text>
				<Image src={Happy} alt="喜ぶ家族のイラスト" mb="60px" />
				{loginUser || (
					<>
						<Button
							leftIcon={<FaTwitter />}
							colorScheme="twitter"
							onClick={onClickLogin}
							width="100%"
							fontSize="xl"
							height="50px"
						>
							ツイッターでログイン
						</Button>
						<Text fontSize="xs" color="gray">
							<SLink to="/agreement">利用規約</SLink>・
							<SLink to="/privacy_policy">プライバシーポリシー</SLink>
							に同意の上ご利用ください
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
			<OrderContainer>
				<Usage />
			</OrderContainer>
		</Flex>
	);
});

const OrderContainer3 = styled.div`
	position: relative;
	order: 3;
	width: 100%;
`;

const OrderContainer2 = styled.div`
	order: 2;
	width: 100%;
	padding-right: 2.5rem;
`;

const OrderContainer = styled.div`
	order: 1;
	width: 100%;
	padding-right: 2rem;
`;

const SLink = styled(Link)`
	text-decoration: underline;
`;

export default Login;
