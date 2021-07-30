import {VFC, memo, useState, useEffect} from "react";
import styled from "styled-components";

import {Button} from "@chakra-ui/react";

import FormSelect from "../../atoms/form/FormSelect";
import FormInput from "../../atoms/form/FormInput";
import FromTextarea from "../../atoms/form/FormTextarea";
import {db} from "../../../firebase";
import {useMessage} from "../../../hooks/useMessage";
import {useHistory} from "react-router-dom";

export const ArrayOS = ["iPhone", "Android", "Mac", "Windows", "その他"];

export const ArrayBrowser = [
	"Safari",
	"Chrome",
	"Twitterのブラウザ",
	"Firefox",
	"その他",
];

const ContactForm: VFC = memo(() => {
	const [content, setContent] = useState("");
	const [selectOS, setSelectOS] = useState({value: ""});
	const [otherOS, setOtherOS] = useState("");
	const [selectBrowser, setSelectBrowser] = useState({value: ""});
	const [otherBrowser, setOtherBrowser] = useState("");
	const [twitterName, setTwitterName] = useState("");
	const {showMessage} = useMessage();
	const history = useHistory();
	const [contactList, SetContactList] = useState([
		{
			id: "",
		},
	]);

	useEffect(() => {
		const unSub = db.collection("contact_list").onSnapshot((snapshot) => {
			SetContactList(
				snapshot.docs.map((doc) => ({
					id: doc.id,
				}))
			);
		});
		return () => unSub();
	});

	const onClickNewContactList = () => {
		const listCount = contactList.length;
		db.collection("contact_list")
			.doc(`${listCount + 1}`)
			.set({
				content: content,
				browser_id: selectBrowser,
				os_id: selectOS,
				other_browser: "",
				other_os: "",
				twitter_name: twitterName,
			});
		showMessage({title: "送信しました", status: "success"});
		history.push("/contact/list");
	};

	return (
		<Container>
			<FromTextarea
				title="内容"
				id="content"
				setTextarea={setContent}
				value={content}
			/>
			<FormSelect
				name="OS"
				id="selectOS"
				selects={ArrayOS}
				setSelect={setSelectOS}
				value={selectOS}
				setOther={setOtherOS}
				otherValue={otherOS}
			/>
			<FormSelect
				name="ブラウザ"
				id="selectBrowser"
				selects={ArrayBrowser}
				setSelect={setSelectBrowser}
				value={selectBrowser}
				setOther={setOtherBrowser}
				otherValue={otherBrowser}
			/>
			<FormInput
				title="返信が必要な場合のツイッターアカウント名"
				id="twitterName"
				placeholder="@hx_kei"
				setInput={setTwitterName}
				value={twitterName}
			/>
			<Button
				mt={4}
				bg="#9d00ff"
				color="white"
				fontSize="1.2rem"
				width="100%"
				onClick={onClickNewContactList}
			>
				送信
			</Button>
		</Container>
	);
});

const Container = styled.div`
	width: 50%;
	margin: 2rem auto;
`;

export default ContactForm;
