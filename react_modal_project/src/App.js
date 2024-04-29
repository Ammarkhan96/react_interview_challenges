import React, { useState } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';

const App = () => {
	const [modalState1, setModalState1] = useState(false);
	const [modalState2, setModalState2] = useState(false);
	const [modalState3, setModalState3] = useState(false);
	const [modalState4, setModalState4] = useState(false);

	return (
		<div>
			<ButtonContainer>
				<Button onClick={() => setModalState1(!modalState1)}>Modal 1</Button>
				<Button onClick={() => setModalState2(!modalState2)}>Modal 2</Button>
				<Button onClick={() => setModalState3(!modalState3)}>Modal 3</Button>
				<Button onClick={() => setModalState4(!modalState4)}>Modal 4</Button>
			</ButtonContainer>

			{/* Modal #1 */}
			<Modal
				state={modalState1}
				setState={setModalState1}
				title="Modal"
				showHeader={true}
				showOverlay={true}
				modalPosition={'center'}
				padding={'20px'}
			>
				<Content>
					<h1>Modal window</h1>
					<p>Reusable and with customization options.</p>
					<Button onClick={() => setModalState1(!modalState1)}>To accept</Button>
				</Content>
			</Modal>

			{/* Modal #2 */}
			<Modal
				state={modalState2}
				setState={setModalState2}
				title="Window 2!"
				showHeader={false}
				showOverlay={false}
				modalPosition={'center'}
				padding={'20px'}
			>
				<Content>
					<h1>Modal window 2</h1>
					<p>Reusable and with customization options.</p>
					<Button onClick={() => setModalState2(!modalState2)}>To accept</Button>
				</Content>
			</Modal>

			{/* Modal #3 */}
			<Modal
				state={modalState3}
				setState={setModalState3}
				title="Modal 3!"
				showHeader={true}
				showOverlay={false}
				modalPosition={'start'}
				padding={'20px'}
			>
				<Content>
					<img src="https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg" alt="" />
				</Content>
			</Modal>

			{/* Modal #4 */}
			<Modal
				state={modalState4}
				setState={setModalState4}
				title="Modal 4!"
				showHeader={false}
				showOverlay={true}
				modalPosition={'center'}
				padding={'0px'}
			>
				<Content>
					<img src="https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg" alt="" />
				</Content>
			</Modal>
		</div>
	);
}

export default App;

const ButtonContainer = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Button = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
		color: #fff;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
		color: #fff;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
