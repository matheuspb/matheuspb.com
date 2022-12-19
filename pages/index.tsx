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

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  image: {
    borderRadius: '50%',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    height: 180,
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
      url: 'https://linkedin.com/in/matheus-bittencourt',
    },
    {
      Icon: MailIcon,
      url: 'mailto:me@matheuspb.com',
    },
  ]

  return (
    <Box className={styles.container}>
      <Box flex={1} />
      <img
        className={styles.image}
        src='/api/me'
        alt='me'
        width={180}
        height={180}
      />
      <Box height='30px' />
      <Typography color='textPrimary' variant='h4'>
        Matheus Bittencourt
      </Typography>
      <Typography color='textSecondary'>
        I&apos;m a software developer at{' '}
        <Link href='https://withleaf.io/' color='secondary'>Leaf</Link>.
      </Typography>
      <Box height='30px' />
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
      <Box flex={1} />
    </Box>
  )
}

export default Home
