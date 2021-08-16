import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface VizCardProps {
  visualization: ReactNode;
  description: string;
}
interface CardProps {
  children: ReactNode;
}
export function Card({ children }: CardProps): JSX.Element {
  return (
    <Box
      h='full'
      maxW='sm'
      minW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      {children}
    </Box>
  );
}
export function VizCard({
  visualization,
  description,
}: VizCardProps): JSX.Element {
  return (
    <Card>
      <AspectRatio>{visualization}</AspectRatio>
      <Box px='6' py='3'>
        <Heading fontSize='lg'>This is a heading</Heading>
        <Text fontSize='md'>{description}</Text>
      </Box>
    </Card>
  );
}
