import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { FaListAlt } from "react-icons/fa";

const Page = styled.main`
    max-width: 1024px;
    margin: 0 auto;
    padding: 64px 24px 80px;
    color: #e2e8f0;
    @media (max-width: 720px) { padding: 32px 18px 56px }
`

const Header = styled.header`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    gap: 16px;
    
    @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }

`

const Brand = styled.div`
display:flex;
align-items: center;
gap: 12px;
`

const Title = styled.div`
    display: flex;
`

const Heading = styled.h1`
    font-size: 26px;
    /* color: gold */
`

const Nav = styled.nav`
    border: 1px solid gold;
    padding: 10px;
    border-radius: 10px;
    display: inline-flex;
    gap: 10px;
`
const NavItem = styled(NavLink)`
padding: 10px;
color: #a6b8d8;
&.active {
    color: red;
}    
&:hover {
    color: gold;
}
`
const Card = styled.section`
  background: rgba(11, 15, 29, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 28px;
  box-shadow:
    0 20px 60px rgba(5, 10, 25, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  @media (max-width: 640px) {
    padding: 22px;
  }
`

function Layout() {
    return (
        <Page>
            <Header>
                <Brand>
                    <FaListAlt color='Red' size={40} />
                    <Title>
                        <Heading>My Tasks</Heading>
                    </Title>
                </Brand>
                <Nav>
                    <NavItem to="/">All</NavItem>
                    <NavItem to="/active">Active</NavItem>
                    <NavItem to="/completed">Completed</NavItem>
                    <NavItem to="/stats">Stats</NavItem>
                </Nav>
            </Header>
            <Card>
                <Outlet />
            </Card>
        </Page>

    )
}

export default Layout;