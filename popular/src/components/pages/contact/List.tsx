import {Table, Tr, Thead, Tbody, Td, Th, TableCaption} from "@chakra-ui/react";
import {memo, VFC} from "react";
import PrimaryButton from "../../atoms/button/PrimaryButton";
import Title from "../../atoms/text/Title";

const List: VFC = memo(() => {
	return (
		<>
			<Title>お問い合わせ一覧</Title>
			<Table variant="simple" mb={20}>
				<TableCaption fontWeight="bold">ご協力ありがとう！</TableCaption>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>内容</Th>
						<Th>お使いのOS</Th>
						<Th>お使いのブラウザ</Th>
						<Th isNumeric>ツイッターアカウント名</Th>
					</Tr>
				</Thead>
				<Tbody mb={4}>
					<Tr>
						<Td>inches</Td>
						<Td fontSize="xs">millimetres (mm)</Td>
						<Td>25.4</Td>
						<Td>25.4</Td>
						<Td isNumeric>25.4</Td>
					</Tr>
					<Tr>
						<Td>feet</Td>
						<Td>centimetres (cm)</Td>
						<Td>25.4</Td>
						<Td>25.4</Td>
						<Td isNumeric>30.48</Td>
					</Tr>
					<Tr>
						<Td>yards</Td>
						<Td>metres (m)</Td>
						<Td>25.4</Td>
						<Td>25.4</Td>
						<Td isNumeric>0.91444</Td>
					</Tr>
				</Tbody>
			</Table>
			<PrimaryButton colorScheme="teal" onClickUrl="/contact" width="50%">
				お問い合わせに戻る
			</PrimaryButton>
		</>
	);
});

export default List;
