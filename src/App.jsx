import routes from './routes';
import { Routes, Route } from 'react-router-dom';
import {
  AppShell,
  AppShellNavbar,
  AppShellMain,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DoubleNavbar } from './components/navbar/DoubleNavbar';
import { HeaderSimple } from './components/header/HeaderSimple';
import { FooterCentered } from './components/footer/FooterCentered';



function App() {
  const [opened, { toggle }] = useDisclosure();


  return (

    <AppShell
      header={{ height: rem('56') }}
      navbar={{ height: rem(750), width: rem('160px'), breakpoint: 'sm', collapsed: { mobile: !opened } }}
    // style={{ overflow: 'hidden' }} // Add this line to set overflow property
    >

      <AppShell.Main >
        <AppShell.Header >
          <HeaderSimple />
        </AppShell.Header>
        <AppShellNavbar zIndex={0} >
          <DoubleNavbar />
        </AppShellNavbar>
        <AppShellMain>
          <Routes>
            {
              routes.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)
            }
          </Routes>

        </AppShellMain>
        <AppShell.Footer style={{ borderTop: '0px' }} >
          <FooterCentered />
        </AppShell.Footer>

      </AppShell.Main>
    </AppShell >


  )
}

export default App
