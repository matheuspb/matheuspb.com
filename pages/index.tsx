import React from 'react'
import {
  Box,
  Link,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import Image from 'next/image'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    borderRadius: '50%',
  },
  name: {
    marginTop: 30,
  },
  subtitle: {
    color: 'gray',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
  },
  icon: {
    color: 'black',
    margin: '0px 5px 0px 5px',
  },
})

const Home: React.FunctionComponent = () => {
  const styles = useStyles()
  const icons = [
    {
      Icon: GithubIcon,
      url: 'https://github.com/matheuspb',
    },
    {
      Icon: LinkedInIcon,
      url: 'https://linkedin.com/in/matheus-bittencourt/',
    },
    {
      Icon: MailIcon,
      url: 'mailto:bittencourt.matheus@gmail.com',
    },
  ]

  return (
    <Box className={styles.container}>
      <Image
        className={styles.image}
        src='/me.jpg'
        alt='me'
        width={180}
        height={180}
        priority
      />
      <Typography className={styles.name} variant='h4'>
        Matheus Bittencourt
      </Typography>
      <Typography className={styles.subtitle}>
        I&apos;m a software developer at <Link href='https://ae.studio'>AE Studio</Link>
      </Typography>
      <Box className={styles.iconsContainer}>
        {icons.map(({ Icon, url }, key) => (
          <Link key={key} href={url}>
            <Icon className={styles.icon} />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default Home
