import {VFC, memo} from "react";

import {Box, Image, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

type Props = {
	title: string;
	img: string;
};

const BoxImage: VFC<Props> = memo((props) => {
	const {title, img} = props;

	return (
		<Box mb={1}>
			<Text>{title}</Text>
			<Link to={img}>
				<Image src={img} alt={title} width="200px" m="auto" p={2} />
			</Link>
		</Box>
	);
});

export default BoxImage;
