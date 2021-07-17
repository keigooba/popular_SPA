import {VFC, memo, ReactNode} from "react";

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
			{children}
			<Footer />
		</>
	);
});

export default Layout;
