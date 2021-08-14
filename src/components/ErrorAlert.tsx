import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Code,
  VStack,
} from '@chakra-ui/react';
interface ErrorAlertProps {
  error: Error;
}
export function ErrorAlert({ error }: ErrorAlertProps): JSX.Element {
  return (
    <Alert
      status='error'
      variant='top-accent'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='100vh'
    >
      <VStack spacing='4'>
        <AlertIcon boxSize='30px' />
        <AlertTitle fontSize='2xl'>Something went wrong.</AlertTitle>
        <AlertDescription maxWidth='sm'>
          <Code>{error.message}</Code>
        </AlertDescription>
      </VStack>
    </Alert>
  );
}
