import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navigation } from './components/layout/Navigation';

import { EventList } from './components/events/EventList';
import { EventDetails } from './components/events/EventDetails';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
          
          <main>
            <Routes>
              
              {/* Events Routes */}
              <Route path="/events" element={<EventList />} />
              <Route path="/events/:id" element={<EventDetails />} />
              
              
              
              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>&copy; 2025 UniVerse - University Club Management System</p>
              <p className="text-gray-400 text-sm mt-2">
                Made with ❤️ for students
              </p>
            </div>
          </footer>
        </div>
    </AuthProvider>
  );
};

export default App;