import { Navigate, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from "styled-components";
import Layout from './components/Layout';
import TodoPage from './pages/TodoPage';
import StatsPage from './pages/StatsPage';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; }
  :root { color-scheme: light; }
  body {
    margin: 0;
    font-family: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
    background-color: #0b1021;
    color: #0c1224;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; text-decoration: none; }
`

const AppShell = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, rgba(64, 182, 244, 0.16), transparent 25%),
    radial-gradient(circle at 80% 0%, rgba(255, 171, 104, 0.14), transparent 22%),
    linear-gradient(145deg, #0c1224 0%, #0a0f1b 45%, #0e1527 100%);
`

function App() {
  return (
    <AppShell>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<TodoPage filter="all" />} />
          <Route path="active" element={<TodoPage filter="active" />} />
          <Route path="completed" element={<TodoPage filter="completed" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="stats" element={<StatsPage/>}/>
        </Route>
      </Routes>
    </AppShell>
  )
}

export default App