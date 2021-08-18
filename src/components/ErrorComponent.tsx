import { RepeatIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Code,
  IconButton,
  VStack,
} from '@chakra-ui/react';
interface ErrorComponentProps {
  message: string | undefined;
  refreshCb?: () => void;
}
export function ErrorComponent({
  message,
  refreshCb,
}: ErrorComponentProps): JSX.Element {
  return (
    <Alert
      status='error'
      variant='top-accent'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      h='full'
      w='full'
    >
      <VStack spacing='4'>
        <AlertIcon boxSize='30px' />
        <AlertTitle fontSize='2xl'>Something went wrong.</AlertTitle>
        <AlertDescription maxWidth='sm'>
          <Code>{message ?? 'An unknown error occurred'}</Code>
        </AlertDescription>
        {refreshCb ? (
          <Center>
            <IconButton
              onClick={refreshCb}
              aria-label='refresh-icon-button'
              icon={<RepeatIcon />}
            />
          </Center>
        ) : null}
      </VStack>
    </Alert>
  );
}
