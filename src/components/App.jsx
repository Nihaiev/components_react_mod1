import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return <div><PageTitle text="24th Core Worlds" />
    <EventBoard events={ upcomingEvents} /></div>;
};

//1:19