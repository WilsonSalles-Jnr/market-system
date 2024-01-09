'use client';

import { AppShell, AppShellHeader, AppShellMain, Button, Group, Text } from '@mantine/core';
import { useRouter, usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  const path = usePathname();
  return (
    <AppShell header={{ height: 50 }}>
      <AppShellHeader h={50}>
        <Group justify="space-between" m={5}>
          <Text fz={24} fw={700}>
            Market System
          </Text>
          <Group>
            <Button
              variant={path === '/app/dashboard' ? 'light' : 'subtle'}
              onClick={() => router.push('/app/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant={path === '/app/market' ? 'light' : 'subtle'}
              onClick={() => router.push('/app/market')}
            >
              Cash Register
            </Button>
            <Button
              variant={path === '/app/stock' ? 'light' : 'subtle'}
              onClick={() => router.push('/app/stock')}
            >
              Stock
            </Button>
            <Button
              variant={path === '/app/configuration' ? 'light' : 'subtle'}
              onClick={() => router.push('/app/configuration')}
            >
              Configuration
            </Button>
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellMain bg="dark.1">{children}</AppShellMain>
    </AppShell>
  );
}
