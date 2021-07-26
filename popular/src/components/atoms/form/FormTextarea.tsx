import {VFC, memo, ChangeEvent} from "react";
import {FormControl, FormLabel, Textarea} from "@chakra-ui/react";

type Props = {
	title: string;
	id: string;
	setTextarea: () => void;
	value: () => void;
};

const FromTextarea: VFC<Props> = memo((props) => {
	const {title, id, setTextarea, value} = props;

	const onChangeTextarea = (e: ChangeEvent<HTMLInputElement>) => {
		setTextarea(e.target.value);
	};

	return (
		<>
			<FormControl isRequired mb={4}>
				<FormLabel htmlFor={id}>{title}</FormLabel>
				<Textarea id={id} rows="4" value={value} onChange={onChangeTextarea} />
			</FormControl>
		</>
	);
});

export default FromTextarea;
