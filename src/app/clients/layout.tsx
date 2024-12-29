import React from 'react';
import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/layout/Sidebar';

const clientMenuItems = [
  { label: 'Client List', href: '/clients/list' },
  { label: 'Create Client', href: '/clients/create' },
];

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex">
        <Sidebar menuItems={clientMenuItems} />
        <div className="flex-1 p-6">{children}</div>
      </div>
    </Layout>
  );
}

