import {VFC, memo} from "react";

import {Login} from "../components/pages/Login";
import {Page404} from "../components/pages/Page404";
import {Home} from "../components/pages/user/Home";
import {Agreement} from "../components/pages/Agreement";
import {PrivacyPolicy} from "../components/pages/PrivacyPolicy";
import {Route, Switch} from "react-router-dom";
import {contactRoutes} from "./ContactRoutes";
import {LoginUserProvider} from "../hooks/providers/useLoginUserProvider";
import Layout from "../components/templates/Layout";

const Router: VFC = memo(() => {
	return (
		<Switch>
			<LoginUserProvider>
				<Route exact path="/">
					<Layout>
						<Login />
					</Layout>
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/agreement">
					<Agreement />
				</Route>
				<Route exact path="/privacy_policy">
					<PrivacyPolicy />
				</Route>
				<Route
					path="/contact"
					render={({match: {url}}) => (
						<Switch>
							{contactRoutes.map((route) => (
								<Route
									key={route.path}
									exact={route.exact}
									path={`${url}${route.path}`}
								>
									<Layout>{route.children}</Layout>
								</Route>
							))}
						</Switch>
					)}
				/>
			</LoginUserProvider>
			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	);
});

export default Router;
