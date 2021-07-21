import Contact from "../components/pages/Contact";
import List from "../components/pages/contact/List";
import Page404 from "../components/pages/Page404";

export const contactRoutes = [
	{
		path: "/",
		exact: true,
		children: <Contact />,
	},
	{
		path: "/list",
		exact: true,
		children: <List />,
	},
	{
		path: "*",
		exact: false,
		children: <Page404 />,
	},
];
