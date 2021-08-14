import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Code,
  Collapse,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBoolean,
  VStack,
} from '@chakra-ui/react';

interface ErrorDrawerProps {
  isOpen: boolean;
  closeDrawerFn: () => void;
}
export function ErrorDrawer({
  isOpen,
  closeDrawerFn: closeDrawer,
}: ErrorDrawerProps): JSX.Element {
  const [isExpanded, set] = useBoolean(false);
  return (
    <>
      <Drawer isOpen={isOpen} onClose={closeDrawer} placement='bottom'>
        <DrawerOverlay />
        <DrawerContent>
          <Alert status='error' variant='subtle' flexDirection='column'>
            <VStack spacing='3'>
              <AlertIcon />
              <AlertDescription>
                <VStack spacing='5'>
                  <AlertTitle>Something went wrong.</AlertTitle>
                  <VStack spacing='4'>
                    <Button onClick={set.toggle}>Details</Button>
                    <Collapse in={isExpanded} animateOpacity>
                      <Box maxW='800px'>
                        <Code>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ad voluptatem dolorem perspiciatis a magnam
                          dolorum explicabo quaerat odit laborum, laboriosam
                          quae culpa quisquam corporis non aperiam doloribus
                          sapiente quidem possimus
                        </Code>
                      </Box>
                    </Collapse>
                  </VStack>
                </VStack>
              </AlertDescription>
            </VStack>
          </Alert>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </>
  );
}
