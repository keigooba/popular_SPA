import {memo, VFC} from "react";
import {Link} from "react-router-dom";

export const Login: VFC = memo(() => {
	return (
		<>
			<p>ログインページです</p>
			<Link to="/agreement">利用規約ページ</Link>
			<br />
			<Link to="/privacy_policy">プライバシーポリシーページ</Link>
			<br />
			<Link to="/contact">お問い合わせ</Link>
			<br />
			<Link to="/contact/list">お問い合わせ一覧</Link>
			<br />
			<Link to="/home">Homeページ</Link>
		</>
	);
});
