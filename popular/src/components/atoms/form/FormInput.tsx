import {VFC, memo, ChangeEvent} from "react";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

type Props = {
	title: string;
	id: string;
	placeholder: string;
	setInput: () => void;
	value: () => void;
};

const FormInput: VFC<Props> = memo((props) => {
	const {title, id, placeholder, setInput, value} = props;

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<>
			<FormControl mb={4}>
				<FormLabel htmlFor={id}>{title}</FormLabel>
				<Input
					placeholder={placeholder}
					id={id}
					value={value}
					onChange={onChangeInput}
				/>
			</FormControl>
		</>
	);
});

export default FormInput;
