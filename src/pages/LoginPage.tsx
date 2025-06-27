import React from 'react';

// Import custom components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoginForm from '@/components/LoginForm';
import SocialLoginButtons from '@/components/SocialLoginButtons';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header isLoggedIn={false} />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* The LoginForm component already includes the Card element */}
          <LoginForm />
          {/* The SocialLoginButtons component includes the Separator */}
          <SocialLoginButtons />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;