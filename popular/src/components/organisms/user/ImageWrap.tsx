import {Wrap, WrapItem} from "@chakra-ui/react";
import {VFC, memo} from "react";
import SearchImage from "../../molecules/image/SearchImage";
import Bidanshi from "../../../img/bidanshi.jpeg";
import Bijin from "../../../img/bijin.jpeg";
import Yuyake from "../../../img/yuyake.jpeg";
import Doubutu from "../../../img/doubutu.jpeg";
import Cake from "../../../img/cake.jpeg";
import Sport from "../../../img/sport.jpeg";

const ImageWrap: VFC = memo(() => {
	return (
		<Wrap>
			<WrapItem>
				<SearchImage img={Bidanshi} title="美男子" />
			</WrapItem>
			<WrapItem>
				<SearchImage img={Bijin} title="美人" />
			</WrapItem>
			<WrapItem>
				<SearchImage img={Yuyake} title="夕焼け" />
			</WrapItem>
			<WrapItem>
				<SearchImage img={Doubutu} title="動物" />
			</WrapItem>
			<WrapItem>
				<SearchImage img={Cake} title="ケーキ" />
			</WrapItem>
			<WrapItem>
				<SearchImage img={Sport} title="スポーツ" />
			</WrapItem>
		</Wrap>
	);
});

export default ImageWrap;
