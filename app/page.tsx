'use client';

import { Button, Group, Input, PasswordInput, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <Group justify="center" h="100vh" bg="dark.1">
      <Stack justify="center">
        <Input placeholder="Usuário" />
        <PasswordInput placeholder="Senha" />
        <Button onClick={() => router.push('/app/market')}>Entrar</Button>
      </Stack>
    </Group>
  );
}
