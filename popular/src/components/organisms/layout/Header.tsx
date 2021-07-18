import {VFC, memo, useCallback} from "react";
import {
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Image,
	Container,
} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {useAuth} from "../../../hooks/useAuth";
import {useLoginUser} from "../../../hooks/providers/useLoginUserProvider";

const Header: VFC = memo(() => {
	const {login} = useAuth();

	const {loginUser} = useLoginUser();
	console.log(loginUser);
	const history = useHistory();
	const onClickHome = useCallback(() => history.push("/home"), [history]);
	const onClickLogout = useCallback(() => history.push("/logout"), [history]);

	const onClickLogin = () => login("1");

	return (
		<Container bg="#9d00ff" minWidth="100%">
			<Flex
				as="nav"
				maxWidth="1140px"
				color="white"
				justify="spance-between"
				padding={{base: 1, md: 2}}
				mx="auto"
				fontWeight="700"
				fontSize="1.75rem"
			>
				<Flex as="a" _hover={{cursor: "pointer"}}>
					<Heading
						fontSize="2rem"
						onClick={onClickHome}
						display="flex"
						alignItems="center"
					>
						<i className="far fa-image"></i>
						popular
					</Heading>
				</Flex>
				{loginUser || (
					<Flex marginLeft="auto">
						<Button onClick={onClickLogin}>
							<i className="fab fa-twitter-square"></i>
							ログイン
						</Button>
					</Flex>
				)}
				{loginUser && (
					<Flex width="20%" marginLeft="auto">
						<Menu>
							<MenuButton width="20%" marginLeft="auto">
								<Image
									src="https://bit.ly/sage-adebayo"
									borderRadius="full"
									alt="Segun Adebayo"
									borderColor="white"
									borderWidth="1px"
									borderStyle="solid"
								/>
							</MenuButton>
							<MenuList fontSize="1rem" color="black" minWidth="150px">
								<MenuItem onClick={onClickHome}>
									<i className="fas fa-home"></i>ホームへ
								</MenuItem>
								<MenuItem onClick={onClickLogout}>
									<i className="fas fa-sign-out-alt"></i>ログアウト
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				)}
			</Flex>
		</Container>
	);
});

const Button = styled.button`
	font-weight: 700;
`;

export default Header;
