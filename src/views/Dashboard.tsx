import {
  Box,
  Heading,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import {
  selectHeroes,
  selectHeroesStatus,
} from 'src/features/heroes/store/heroes.reducers';
import { CallStatus } from 'src/types/call-status';
import { useAppSelector } from 'src/utils/redux-hooks';

export function Dashboard(): JSX.Element {
  const heroes = useAppSelector(selectHeroes);
  const heroesStatus = useAppSelector(selectHeroesStatus);

  const HeroesListUi = React.useMemo(() => {
    switch (heroesStatus) {
      case CallStatus.FAILURE: {
        return <Text>Hero data failed to load</Text>;
      }
      case CallStatus.SUCCESS: {
        return (
          <UnorderedList>
            {heroes.length > 0 ? (
              heroes.map((hero) => (
                <ListItem key={hero.heroId}>{hero.heroName}</ListItem>
              ))
            ) : (
              <ListItem>No heroes to display</ListItem>
            )}
          </UnorderedList>
        );
      }
      case CallStatus.LOADING: {
        return <Spinner />;
      }
      default:
        return null;
    }
  }, [heroes, heroesStatus]);

  return (
    <Box>
      <Heading as='h1'>Startpack Homepage</Heading>
      <Box p='5'>
        <Heading size='lg'>Heroes Data</Heading>
        {HeroesListUi}
      </Box>
    </Box>
  );
}
