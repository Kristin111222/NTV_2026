<<<<<<< HEAD
import './App.css';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected route */}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
import { useState } from 'react';
import './App.css';
import { Layout } from '@/components/Layout';
import type { AppPage } from '@/navigation';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';

function App() {
  const [page, setPage] = useState<AppPage>('home');

  return (
    <Layout activePage={page} onNavigate={setPage}>
      {page === 'home' ? <HomePage /> : <AboutPage />}
    </Layout>
  );
}

export default App;
>>>>>>> d687c8e3256f464e156504c1fe9982e44e7ddda4
