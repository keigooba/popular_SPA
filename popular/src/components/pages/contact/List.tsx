import {Table, Tr, Thead, Tbody, Td, Th, TableCaption} from "@chakra-ui/react";
import {memo, VFC, useState, useEffect} from "react";
import PrimaryButton from "../../atoms/button/PrimaryButton";
import Title from "../../atoms/text/Title";
import {db} from "../../../firebase";

const List: VFC = memo(() => {
	const [contactList, SetContactList] = useState([
		{
			id: "",
			browser_id: 0,
			content: "",
			os_id: 0,
			other_browser: "",
			other_os: "",
			twitter_name: "",
		},
	]);

	useEffect(() => {
		const unSub = db.collection("contact_list").onSnapshot((snapshot) => {
			SetContactList(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					browser_id: doc.data().browser_id,
					content: doc.data().content,
					os_id: doc.data().os_id,
					other_browser: doc.data().other_browser,
					other_os: doc.data().other_os,
					twitter_name: doc.data().twitter_name,
				}))
			);
		});
		return () => unSub();
	});

	return (
		<>
			<Title>お問い合わせ一覧</Title>
			<Table variant="simple" mb={20}>
				<TableCaption fontWeight="bold">ご協力ありがとう！</TableCaption>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th width="500px">内容</Th>
						<Th>お使いのOS</Th>
						<Th>お使いのブラウザ</Th>
						<Th>ツイッターアカウント名</Th>
					</Tr>
				</Thead>
				<Tbody mb={4}>
					{contactList.map((list) => (
						<Tr>
							<Td>{list.id}</Td>
							<Td fontSize="xs">{list.content}</Td>
							<Td>{list.os_id}</Td>
							<Td>{list.browser_id}</Td>
							<Td>{list.twitter_name}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
			<PrimaryButton colorScheme="teal" onClickUrl="/contact" width="50%">
				お問い合わせに戻る
			</PrimaryButton>
		</>
	);
});

export default List;
