import Connect from "./Connect";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = [
  { title: "Dashboard", href: "/" },
  { title: "Wrap / Unwrap", href: "/wrap" },
  { title: "Stream", href: "/stream" },
];

export default function Header({ account }: any) {
  const router = useRouter();

  const makeHandleClick = (href: string) => (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Wrapper>
      <NavContainer>
        <LogoContainer>
          <Link href="/">
            <Logo>
              <strong>StarkStream</strong>
            </Logo>
          </Link>
        </LogoContainer>
        <NavItemsContainer>
          {NavItems.map((item: any) => (
            <NavItem
              key={item.href}
              href={item.href}
              onClick={makeHandleClick(item.href)}
            >
              {item.title}
            </NavItem>
          ))}
        </NavItemsContainer>
      </NavContainer>
      <Connect account={account} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  flex: 1;
`;

const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.a`
  font-size: 1.2rem;
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;
