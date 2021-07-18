import {VFC, ReactNode, memo} from "react";
import {Heading} from "@chakra-ui/react";

type Props = {
	children: ReactNode;
};

const Title: VFC<Props> = memo((props) => {
	const {children} = props;

	return (
		<Heading as="h4" size="lg" pb="10">
			{children}
		</Heading>
	);
});

export default Title;
