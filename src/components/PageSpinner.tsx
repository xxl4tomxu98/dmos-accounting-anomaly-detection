import { Box, Grid, Spinner, styled } from '@chakra-ui/react';

const SpinnerContainer = styled(Box, {
  baseStyle: {
    zIndex: 'overlay',
    h: '100vh',
    w: '100vw',
    backgroundColor: 'gray.200',
    inset: 0,
    pos: 'absolute',
  },
});

export function PageSpinner(): JSX.Element {
  return (
    <SpinnerContainer>
      <Grid h='full' placeContent='center'>
        <Spinner size='xl' variant='' />
      </Grid>
    </SpinnerContainer>
  );
}
