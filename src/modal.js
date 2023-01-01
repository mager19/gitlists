import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./overlay";
import styled from "styled-components";
import { ButtonContrast } from "./components/button";
import InputText from "./components/input-text";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal");

class ModalPortal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default function Modal({ isActive, setModal }) {
	if (isActive) {
		return (
			<ModalPortal>
				<ModalContent setModal={setModal} />
			</ModalPortal>
		);
	}
	return null;
}

const ModalContentStyled = styled.form`
	background: var(--bg);
	border-radius: 0.5rem;
	color: var(--white);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1.5rem;
	position: fixed;
	inset-block-start: 50%;
	transform: translateY(-50%);
	inset-inline-start: 50%;
	transform: translateX(-50%);
	inline-size: 24rem;

	.title {
		font: var(--headline2-semibold);
		margin: 0;
	}
`;

function ModalContent({ setModal }) {
	const form = useRef(null);
	const navigator = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(form.current);

		navigator(`/${formData.get("username")}`);
		setModal(false);
	}

	return (
		<Overlay>
			<ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
				<h2 className="title">Busca tu usuario</h2>
				<InputText
					type="text"
					autoComplete="off"
					name="username"
					placeholder="Username"
				/>
				<ButtonContrast text="Buscar" />
			</ModalContentStyled>
		</Overlay>
	);
}
