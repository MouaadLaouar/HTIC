import Style from './Events.module.scss';
import {ThemeProvider} from '@mui/material';
import { EventsStyle } from './Events.Style';
import { Typography } from '@mui/material';
import useGetEvents from '@/hooks/useGetEvents';

export default function Events() {
  const [ EventsData ] = useGetEvents();
  //console.log(EventsData);

  return (
    <section className={ Style.Events }>
      <ThemeProvider theme={ EventsStyle }>
        <Typography variant='h1'>
          Events
        </Typography>
        <Typography variant='body1'>
          Stay up-to-date with all the latest HTIC events! From workshops and conferences to guest speaker sessions and community gatherings, there`s always something happening in our community. Join us and experience the cutting-edge of science and research.
        </Typography>

        <section className={ Style.AllEvents }>
          <section className={ Style.UpcomingEvents }>
            <Typography variant='h2'>
              Upcoming Events
            </Typography>

          </section>

          <section className={ Style.PastEvents }>
            <Typography variant='h2'>
              Past Events
            </Typography>
          </section>
        </section>
      </ThemeProvider>
    </section>
  )
}
