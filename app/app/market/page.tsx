'use client';

import {
  Button,
  Card,
  Group,
  Input,
  InputWrapper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export default function Market() {
  const [search, setSearch] = useDebouncedState('', 500);
  const [item, setItem] = useState<
    undefined | { id: number; name: string; code: string; price: number; unit: string }
  >();
  const [quantity, setQuantity] = useState(1);

  const items = [
    { id: 1, name: 'Banana', code: '503', price: 2.2, unit: 'kg' },
    { id: 2, name: 'Maçã', code: '502', price: 4.25, unit: 'kg' },
    { id: 3, name: 'Bolacha', code: '301', price: 2.89, unit: 'un' },
  ];

  useEffect(() => {
    const selectedItem = items.find(({ code }) => code === search) || undefined;
    setItem(selectedItem);
  }, [search]);

  return (
    <SimpleGrid cols={2}>
      <Stack m={10} align="start" w="100%">
        <Group w="100%">
          <InputWrapper label="Quantia" w="15%">
            <Input
              placeholder="kg/un"
              onChange={(e) => setQuantity(Number(e.target.value || 1))}
              w="100%"
            />
          </InputWrapper>
          <InputWrapper w="80%" label="Código">
            <Input
              placeholder="código de barras"
              onChange={(e) => setSearch(e.target.value)}
              w="100%"
            />
          </InputWrapper>
        </Group>
        <Group justify="space-between" w="100%" align="start">
          <Text fz={30} fw={700}>
            {item?.name}
          </Text>
          <Stack>
            <Text fz={30} fw={700}>
              {item ? `${quantity} ${item.unit}` : 1}
            </Text>
            <Text fz={30} fw={700}>
              {`R$ ${item?.price ? (item.price * (quantity || 1)).toFixed(2) : '-'}`}
            </Text>
            <Text fz={24} fw={300}>
              {`R$ ${item?.price ? `${item.price}/${item.unit}` : '-'}`}
            </Text>
          </Stack>
        </Group>
      </Stack>
      <Card m={10} h={800} withBorder radius={8}>
        <ScrollArea type="always" h={700}>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
          <p>item a</p>
        </ScrollArea>
        <Stack w="100%" align="end">
          <Text fz={30} fw={700}>
            R$ 450,00
          </Text>
          <Button color="green" fullWidth>
            Finish
          </Button>
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
