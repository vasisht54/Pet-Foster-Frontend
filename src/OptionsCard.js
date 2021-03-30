import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: 360,
    maxWidth: 245,
    marginLeft: 200,
    marginTop: 100,
    display: 'inline-block',
  },
  media: {
    marginLeft: 25,
    marginTop: 10,
    height: 200,
    width: 200,
  },
});

export default function OptionsCard({ title, description, image, route }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = event => {
    event.preventDefault();
    history.push(route);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title='Paw' />
      <CardContent>
        <Button
          onClick={handleClick}
          variant='contained'
          component='h1'
          color='primary'
        >
          {title}
        </Button>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
