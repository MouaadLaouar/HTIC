import { Grid } from '@mui/material'
import Style from './Team.module.scss'
import useGetMembers from '@/hooks/useGetMembers'
import CardTeam from '@/components/Cards/CardsTeam/CardTeam';

export default function Team() {

  const [MembersData] = useGetMembers();
  
  return (
    <section className={ Style.Team }>
      <h1>Our Team</h1>
      <p>Meet the members of HTIC, a diverse group of scientists and researchers from around the world. Our community is made up of experts in various fields and disciplines, all united by a shared passion for advancing our understanding of the world. Get to know our members and see how you can get involved.</p>

      <section className={ Style.AllTeam }>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {
            MembersData.map((data:any) => {
              return (
                <CardTeam Data={data} key={ data.ID }/>
              )
            })
          }
        </Grid>
      </section>
    </section>
  )
}
