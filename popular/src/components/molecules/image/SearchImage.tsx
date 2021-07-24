import {VFC, memo} from "react";

import {Box, Image, Text} from "@chakra-ui/react";

type Props = {
	title: string;
	img: string;
};

const SearchImage: VFC<Props> = memo((props) => {
	const {title, img} = props;

	return (
		<Box mb={1}>
			<Image src={img} alt={title} width="164px" p={1} />
			<Text>{title}</Text>
		</Box>
	);
});

export default SearchImage;
