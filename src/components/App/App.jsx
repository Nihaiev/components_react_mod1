import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events.json';
import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
    <div><PageTitle text="24th Core Worlds" />
        <EventBoard events={upcomingEvents} /></div>;
      </Container>
  );
};

