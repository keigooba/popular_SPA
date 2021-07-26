import {VFC, memo, useState, ChangeEvent} from "react";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
	name: string;
	id: string;
	selects: Array<string>;
	setSelect: () => void;
	value: () => void;
	setOther: () => void;
	otherValue: () => void;
};

const FormSelect: VFC<Props> = memo((props) => {
	const {name, id, selects, setSelect, setOther, otherValue} = props;

	const [selectOther, setSelectOther] = useState<boolean>(false);

	const onChangeSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setSelect(val);
		if (val === "4") {
			setSelectOther(true);
		} else {
			setSelectOther(false);
		}
	};

	const returnPlaceholder = () => {
		return `その他の${name}`;
	};

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setOther(e.target.value);
	};

	return (
		<>
			<FormControl mb={4}>
				<FormLabel htmlFor={id}>
					お使いの{name}（不具合・改善点の場合）
				</FormLabel>
				<MultSelect multiple id={id} onChange={onChangeSelect}>
					{selects.map((select, index) => (
						<option key={index} value={index}>
							{select.name}
						</option>
					))}
				</MultSelect>
				{selectOther && (
					<Input
						name="other_os"
						placeholder={returnPlaceholder()}
						border="1px solid"
						mt={1}
						onChange={onChangeInput}
						value={otherValue}
					/>
				)}
			</FormControl>
		</>
	);
});

const MultSelect = styled.select`
	width: 100%;
	height: 130px;
	overflow: hidden;
	border: 1px solid;
`;

export default FormSelect;
