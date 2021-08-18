import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { Suspense } from 'react';

interface GraphicProps {
  graphic: React.ReactNode;
  isLazy?: boolean;
}
function Graphic({ graphic, isLazy = true }: GraphicProps): JSX.Element {
  return (
    <Box>
      <AspectRatio maxH='sm'>
        {isLazy ? (
          <Suspense
            fallback={
              <Center>
                <Spinner />
              </Center>
            }
          >
            {graphic}
          </Suspense>
        ) : (
          <Center>{graphic}</Center>
        )}
      </AspectRatio>
    </Box>
  );
}
interface HeaderProps {
  title: string;
  subTitle: string;
}
function Header({ title, subTitle }: HeaderProps): JSX.Element {
  return (
    <>
      <VStack pb='6' as='header' alignItems='left'>
        <Heading maxW='2xl'>{title}</Heading>
        <Text as='h3'>{subTitle}</Text>
      </VStack>
      <Divider />
    </>
  );
}
interface BodyProps {
  children: React.ReactNode;
}
function Body({ children }: BodyProps): JSX.Element {
  return (
    <Box pt='6' maxW='2xl'>
      {children}
    </Box>
  );
}

interface SubPageLayoutComposed {
  Header: typeof Header;
  Body: typeof Body;
  Graphic: typeof Graphic;
}
const SubPageLayout: React.FC & SubPageLayoutComposed = ({ children }) => {
  return (
    <Box p='6' h='full'>
      {children}
    </Box>
  );
};

SubPageLayout.Header = Header;
SubPageLayout.Body = Body;
SubPageLayout.Graphic = Graphic;

export { SubPageLayout };
