import React from 'react';
import Layout from '@/components/layout/Layout';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout withSidebar={false}>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </Layout>
  );
}

