import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");
import { useState } from "react";
import NewBuildModal from "../components/modal/NewBuildModal";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "1rem",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(168, 180, 202, 0.75)",
    },
  };
  return (
    <Wrapper>
      <MainContainer>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Click to show modal
        </Button>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <NewBuildModal setIsOpen={setIsOpen} />
        </Modal>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MainContainer = styled.div``;

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
