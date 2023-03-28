import { Typography, useTheme, useMediaQuery, Stack, Drawer, IconButton } from '@mui/material'
import Link from 'next/link';
import Style from './MenuListCom.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { useRouter } from 'next/router';

export const MenuListCom = (props:any) => {
  const themeSize = useTheme();
  const isMatch:boolean = useMediaQuery(themeSize.breakpoints.down('md'));
  const [open, setopen] = useState<boolean>(false);

  const router = useRouter()
  const { route } = router;
  console.log(route);
  

  return (
    <>
    {
      isMatch ? (
      <>
      {/* mobile version */}
        <Drawer open={open} onClose={() => setopen(false)} >
          <section className={Style.SideBar}>
          <IconButton className={Style.CloseButton} onClick={() => setopen(false)}>
            <CloseIcon />
          </IconButton>
          <Stack direction='column' className={Style.Stack}>
            { props.Data.map((e:any) => (
              <div key={e.Name} className={Style.SideBarLink}>
                <Link href={e.Link} className={ Style.link }>
                  {
                    route === e.Link ? (
                    <>
                    <Typography variant='h5'>
                      {e.Name}
                    </Typography>
                    </>) : (
                      <>
                      <Typography variant='h6'>
                         {e.Name}
                      </Typography>
                      </>
                    )
                  }
                </Link>
              </div>
            ))
            }
          </Stack>
          </section>
        </Drawer>
        <IconButton onClick={() => setopen(true)}>
          <MenuIcon />
        </IconButton>
      </>) : (
      <>
      {/* Desktop version */}
        <Stack direction='row' spacing={2}>
          { props.Data.map((e:any) => (
            <div key={e.Name}>
              <Link href={e.Link} className={ Style.link }>
                {
                  route === e.Link ? (
                  <>
                  <Typography variant='h5'>
                    {e.Name}
                  </Typography>
                  </>) : (
                    <>
                    <Typography variant='h6'>
                      {e.Name}
                    </Typography>
                    </>
                  )
                }
              </Link>
            </div>
          ))}
        </Stack>
      </>)
    }
    </>
  )
}
