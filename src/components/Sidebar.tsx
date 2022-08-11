import Connect from "./Connect";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FcApproval } from "react-icons/fc";
const NavItems = [
  { title: "Dashboard", href: "/", icon: <FcApproval /> },
  { title: "Wrap / Unwrap", href: "/wrap", icon: <FcApproval /> },
  { title: "Send Stream", href: "/send", icon: <FcApproval /> },
  { title: "Activity History", href: "/history", icon: <FcApproval /> },
  { title: "Address Book", href: "/address-book", icon: <FcApproval /> },
  { title: "Ecosystem", href: "/ecosystem", icon: <FcApproval /> },
];

export default function SideBar({ account }: any) {
  const [activeIcon, setActiveIcon] = useState(NavItems[0].title);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>{/* <Image src={} alt="" /> */}</Logo>
      </LogoContainer>
      <Connect account={account} />
      <NavItemsContainer>
        {NavItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
              <NavIcon>{item.icon}</NavIcon>
              <NavTitle>{item.title}</NavTitle>
            </NavItem>
          </Link>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  border-right: 1px solid #282b2f;
  width: calc(18rem - 16px - 16px);
  padding-left: 1rem;
`;
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #b5fa9e;
  }
`;

const NavIcon = styled.div`
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;

const NavTitle = styled.div``;
