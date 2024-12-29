'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function ClientDetailsPage() {
  const params = useParams();
  const { id } = params;

  const [client, setClient] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setClient({
        id,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px] mt-4" />
          <Skeleton className="h-4 w-[150px] mt-4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Details</CardTitle>
      </CardHeader>
      <CardContent>
        {client && (
          <div className="space-y-4">
            <p><strong>Name:</strong> {client.name}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            <Button>Edit Client</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

