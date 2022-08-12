import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, SignInPage, SignUpPage, TodoPage } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
