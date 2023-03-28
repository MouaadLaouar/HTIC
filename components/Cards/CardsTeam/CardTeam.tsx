import { Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Link from 'next/link'
import { CardTeamStyle } from './CardTeam.Style'
import Style from './CardTeam.module.scss'
import imgtest from '@/assets/mouaad.jpg'
import Image from 'next/image'
//props.Data.ImgURL
export default function CardTeam(props:any) {
  return (
    <ThemeProvider theme={ CardTeamStyle }>
        <Grid item xs={6} sm={6} md={3} lg={3}>
            <Link href={`/Team/${ props.Data.ID }`} className={ Style.CardTeamLink }>
                {/* <img alt='/' src={ props.Data.ImgURL } /> */}
                <Image alt='/' src={ imgtest } height={75} width={75}/>
                <Typography variant='h2'>{ `${ props.Data.First_Name } ${ props.Data.Last_Name }` }</Typography>
                <Typography variant='h3'>{ `${ props.Data.Role }` }</Typography>
                <Typography variant='body2'>{ `${ props.Data.Education }` }</Typography>
            </Link>
        </Grid>
    </ThemeProvider>
  )
}
