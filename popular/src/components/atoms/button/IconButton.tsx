import {VFC, ReactNode, memo, useCallback} from "react";
import {Button} from "@chakra-ui/react";

type Props = {
	children: ReactNode;
	leftIcon: any;
	colorScheme?: string;
	onClickUrl: string;
};

const IconButton: VFC<Props> = memo((props) => {
	const {children, leftIcon, colorScheme = "", onClickUrl} = props;

	const onClickEvent = useCallback(() => {
		window.location.href = onClickUrl;
	}, [onClickUrl]);

	return (
		<Button
			leftIcon={leftIcon}
			colorScheme={colorScheme}
			onClickUrl={onClickUrl}
			onClick={onClickEvent}
			mr={2}
		>
			{children}
		</Button>
	);
});

export default IconButton;
