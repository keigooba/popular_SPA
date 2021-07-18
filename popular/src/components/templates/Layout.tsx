import {VFC, memo, ReactNode} from "react";
import {Container} from "@chakra-ui/react";

import Header from "../organisms/layout/Header";
import Footer from "../organisms/layout/Footer";

type Props = {
	children: ReactNode;
};

const Layout: VFC<Props> = memo((props) => {
	const {children} = props;
	return (
		<>
			<Header />
			<Container minH="700px" minW="1140px" p="10">{children}</Container>
			<Footer />
		</>
	);
});

export default Layout;
