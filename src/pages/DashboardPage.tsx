import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* The Header component handles the avatar and dropdown menu for logout */}
      <Header isLoggedIn={true} />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to Your Dashboard!</CardTitle>
            <CardDescription>
              You have successfully logged in to SwiftLogin.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              This is a protected area. You can only see this page because you are authenticated.
            </p>
            {/* The primary logout is in the Header's dropdown menu. This button is for clear, direct action. */}
            <Button asChild size="lg">
              <Link to="/">Log Out</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;