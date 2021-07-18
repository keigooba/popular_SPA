import {VFC, memo} from "react";

import {Box, Text} from "@chakra-ui/react";
import {FaTwitter, FaFacebook} from "react-icons/fa";
import IconButton from "../atoms/button/IconButton";

const ShareButton: VFC = memo(() => {
	return (
		<Box py="4">
			<Text fontWeight="bold" color="#9d00ff" my={4}>
				いいねやフォロワーを増やして人気者を目指そう！！
			</Text>
			<IconButton
				leftIcon={<FaTwitter />}
				colorScheme="twitter"
				onClickUrl="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpopular-32pe64nwja-an.a.run.app&text=popular｜人気者を目指そう%0D%0Aフリー画像を投稿できるサービス%0D%0A%20%23popular%0D%0A"
			>
				ツイート
			</IconButton>
			<IconButton
				leftIcon={<FaFacebook />}
				colorScheme="facebook"
				onClickUrl="https://www.facebook.com/share.php?u=https%3A%2F%2Fpopular-32pe64nwja-an.a.run.app"
			>
				Facebook
			</IconButton>
		</Box>
	);
});

export default ShareButton;
