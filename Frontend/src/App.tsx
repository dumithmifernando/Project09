import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navigation } from './components/layout/Navigation';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ClubAdminPanel } from './components/admin/ClubAdminPanel';

// Pages
import { ClubList } from './components/clubs/ClubList';
import { ClubDetails } from './components/clubs/ClubDetails';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
          
          <main>
            <Routes>
              
              {/* Clubs Routes */}
              <Route path="/clubs" element={<ClubList />} />
              <Route path="/clubs/:id" element={<ClubDetails />} />
              
             
              
              <Route 
                path="/admin/club" 
                element={
                  <ProtectedRoute requiredRole="CLUB_ADMIN">
                    <ClubAdminPanel />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
        </div>
    </AuthProvider>
  );
};

export default App;