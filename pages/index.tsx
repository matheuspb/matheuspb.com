import React from 'react'
import {
  Box,
  Button,
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
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  icon: {
    margin: '0px 12px 0px 12px',
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
      url: 'https://linkedin.com/in/matheus-bittencourt/?locale=en_US',
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
      <Typography className={styles.name} color='textPrimary' variant='h4'>
        Matheus Bittencourt
      </Typography>
      <Typography color='textSecondary'>
        I&apos;m a software developer at{' '}
        <Link href='https://withleaf.io/' color='secondary'>Leaf</Link>.
      </Typography>
      <Box className={styles.iconsContainer}>
        {icons.map(({ Icon, url }, key) => (
          <Button
            key={key}
            href={url}
            className={styles.icon}
            color='primary'
            variant='contained'
          >
            <Icon />
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default Home
