'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SearchBar from '@/components/layout/SearchBar';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export default function ClientListPage() {
  const router = useRouter();
  const [clients, setClients] = React.useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = React.useState<Client[]>([]);

  React.useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const dummyClients: Client[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
        // Add more dummy clients as needed
      ];
      setClients(dummyClients);
      setFilteredClients(dummyClients);
    }, 1000);
  }, []);

  const handleSearch = (query: string) => {
    const filtered = clients.filter(client =>
      client.name.toLowerCase().includes(query.toLowerCase()) ||
      client.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <SearchBar onSearch={handleSearch} placeholder="Search clients..." />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>
                  <Button onClick={() => router.push(`/clients/${client.id}`)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

