import {Text} from "@chakra-ui/react";
import {VFC, memo} from "react";
import UseImg1 from "../../img/use_img1.png";
import UseImg2 from "../../img/use_img2.png";
import BoxImage from "../molecules/image/BoxImage";
import ShareButton from "../molecules/button/ShareButton";

const Usage: VFC = memo(() => {
	return (
		<>
			<Text fontSize="2xl" mb={2} color="gray">
				使い方
			</Text>
			<BoxImage title="①好みの画像を検索しよう" img={UseImg1} />
			<BoxImage title="②画像を押して投稿" img={UseImg2} />
			<ShareButton />
		</>
	);
});

export default Usage;
