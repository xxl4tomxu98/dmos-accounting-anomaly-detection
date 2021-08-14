import { Box, Button, Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import { useMachine } from '@xstate/react';
import { stopLightMachine } from 'src/machines/stopLightMachine';
import {
  decrement,
  increment,
  incrementAndLog,
} from 'src/store/counter/counter.actions';
import { selectCount } from 'src/store/counter/counter.reducers';
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks';

export function Playground(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCount = useAppSelector(selectCount);
  const [current] = useMachine(stopLightMachine);

  return (
    <Box p='6'>
      <VStack alignItems='start' spacing='5'>
        <Box>
          <Heading mb='3' variant='2xl'>
            Redux Example
          </Heading>
          <Box>
            {currentCount}
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(incrementAndLog())}>
              Increment and Log
            </Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Heading mb='3' variant='2xl'>
            XState Example
          </Heading>
          <Flex
            h={150}
            w={150}
            justifyContent='center'
            alignItems='center'
            backgroundColor={current.context.colorSwatchValue}
            textAlign='center'
          >
            current state:
            <br /> {current.value}
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
