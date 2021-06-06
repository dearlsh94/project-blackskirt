import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  '@keyframes blinker': {
    from: { opacity: 0.05 },
    to: { opacity: 0.25 }
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'white',

    '@media (min-width:786px)': {
      fontSize: '60px',
    }
  },
  backgroundWrapper: {
    opacity: 0.2,
    overflow: 'hidden',
    width: '100vw',

    animationDuration: '4s',
    animationName: '$blinker',
    animationDirection: 'alternate',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',

    '& img': {
      marginTop: '100px',
      marginRight: '500px',

      '@media (min-width:786px)': {
        marginLeft: '63vw',
        marginTop: '200px',
      },
    }
  }
}));

const Title = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.backgroundWrapper}>
        <img src='/assets/images/cali.jpeg' alt='black-skirtly-background-cali' />
      </div>
      <div className={classes.titleWrapper}>
        <h1 className={classes.title} >BlackSkirtly Radio</h1>
      </div>
    </div>
  )
}

export default Title;