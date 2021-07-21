import {VFC, memo, ReactNode} from "react";
import styled from "styled-components";

type Props = {
	children: ReactNode;
	order: number;
};

const OrderContainer: VFC<Props> = memo((props) => {

	const Container: VFC<Props> = styled.div.attrs((props) => ({
		order: props.order,
	}))``;

	const {children, order} = props;
	console.log(order);

	return <Container order={order}>{children}</Container>;
});

export default OrderContainer;
