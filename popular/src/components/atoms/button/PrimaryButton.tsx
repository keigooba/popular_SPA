import {VFC, ReactNode, memo, useCallback} from "react";
import {Button} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";

type Props = {
	children: ReactNode;
	colorScheme?: string;
	onClickUrl: string;
	width?: string;
};

const PrimaryButton: VFC<Props> = memo((props) => {
	const history = useHistory();
	const {children, colorScheme = "", onClickUrl, width = ""} = props;

	const onClickEvent = useCallback(
		() => history.push(onClickUrl),
		[history, onClickUrl]
	);

	return (
		<Button
			colorScheme={colorScheme}
			onClickUrl={onClickUrl}
			onClick={onClickEvent}
			width={width}
			fontSize="1.25rem"
		>
			{children}
		</Button>
	);
});

export default PrimaryButton;
