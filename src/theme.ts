import { extendTheme } from '@chakra-ui/react';

const Score = {
  // The styles all Scores have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'gray.50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    borderWidth: 'medium',
    borderColor: 'gray.300',
    width: '250px',
    height: '250px',
    gap: 3,
    lineHeight: 'shorter',
  },
  // Two variants: rounded and smooth
  variants: {
    neutral: {},
    positive: {
      borderColor: 'green.600',
      backgroundColor: 'green.300',
    },
    medium: {
      borderColor: 'yellow.500',
      backgroundColor: 'yellow.300',
    },
    negative: {
      borderColor: 'red.600',
      backgroundColor: 'red.300',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'neutral',
  },
};

const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  components: {
    Score,
  },
});

export default theme;
