import { AspectRatio, Box } from '@chakra-ui/react';
import { ReactComponent as LogoSvg } from 'src/logo.svg';

export function Logo(): JSX.Element {
  return (
    <Box w='40px'>
      <AspectRatio ratio={1}>
        <LogoSvg />
      </AspectRatio>
    </Box>
  );
}
