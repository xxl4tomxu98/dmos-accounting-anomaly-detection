import {
  Center,
  Divider,
  Spinner,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';

interface ScoreProps {
  score?: number;
  description?: string;
  variant?: 'neutral' | 'medium' | 'positive' | 'negative';
  isLoading?: boolean;
}

export function Score({
  variant = 'neutral',
  score,
  description,
  isLoading,
}: ScoreProps): JSX.Element {
  const styles = useStyleConfig('Score', { variant });
  return (
    <VStack __css={styles}>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <>
          <Text fontSize='3xl' variant={variant}>
            {score ?? '--'}
          </Text>

          <Divider w='25px' />
          <Text fontSize='xl' variant={variant}>
            {description ?? '--'}
          </Text>
        </>
      )}
    </VStack>
  );
}
