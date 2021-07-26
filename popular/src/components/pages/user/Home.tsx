import {
	Box,
	Center,
	Flex,
	Image,
	Input,
	Spinner,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import {memo, VFC, ChangeEvent, useState, useCallback} from "react";
import styled from "styled-components";

import HxKei from "../../../img/@hx_kei.jpeg";
import Usage from "../../organisms/Usage";
import Title from "../../atoms/text/Title";
import ImageCard from "../../organisms/user/ImageWrap";
import ModalImage from "../../organisms/user/ModalImage";
import {usePixabay} from "../../../hooks/usePixabay";

const Home: VFC = memo(() => {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const {getPixabay, users, loading} = usePixabay();
	const [imageName, setImageName] = useState("");

	const onChangeImageName = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setImageName(e.target.value);
			getPixabay();
			onOpen();
		},
		[getPixabay, onOpen]
	);

	// console.log(users.i["1"]);

	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Flex justify="spance-between" color="#9d00ff">
					<OrderContainer3>
						<Text fontSize="2xl" mb={2} color="gray">
							検索画像
						</Text>
						<ImageCard />
					</OrderContainer3>
					<OrderContainer2>
						<Title>ようこそ！</Title>
						<Image
							src={HxKei}
							alt="Twitterの画像"
							borderRadius="full"
							width="200px"
							mx="auto"
						/>
						<Box border="1px solid black" borderRadius="full" p={6} my={10}>
							<Text pb={2}>
								好みの画像を検索して、
								<br /> タップすると投稿できます
							</Text>
							<Text>さっそく投稿してみましょう</Text>
						</Box>
						<Stack spacing={6} py={4}>
							<Input
								type="text"
								name="text"
								placeholder="画像を検索"
								value={imageName}
								onChange={onChangeImageName}
								textAlign="center"
								borderRadius="full"
								p={6}
								bg="#F8F8F8"
								fontWeight="bold"
								fontSize="1.2rem"
								color="black"
							/>
						</Stack>
					</OrderContainer2>
					<OrderContainer>
						<Usage />
					</OrderContainer>
					<ModalImage isOpen={isOpen} onClose={onClose} users={users} />
				</Flex>
			)}
		</>
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

export default Home;
