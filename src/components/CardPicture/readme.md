```js
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const classes = useStyles();

const cards = [
  {
    id: 1,
    name: 'Lucas Dev',
    description:
      'Criador e Desenvolvedor da empresa Think So!. Atualmente trabalho na empresa NG Sistemas na parte de Back-end e amo o que faço, acho que é tudo. XD',
    img:
      'https://avatars3.githubusercontent.com/u/5623855?s=400&u=ab4eeafe9e00f49a7bde59ee8a0f21113f198026&v=4',
  },
  {
    id: 2,
    name: 'Cristiano Cardoso',
    description: 'Desenvolvedor de Sistemas',
    img: 'https://avatars1.githubusercontent.com/u/18089666?s=460&v=4',
  },
  {
    id: 3,
    name: 'Ricardo de Maria',
    description:
      'Web Designer, programador front-end, back-end de vez em quando.',
    img:
      'https://avatars1.githubusercontent.com/u/42626024?s=460&u=ce4217f3e524a6cb10ffb2b96535adcbae8c0848&v=4',
  },
];

<Container className={classes.cardGrid} maxWidth="md">
  <Grid container spacing={4}>
    {cards.map(card => (
      <CardPicture key={card} card={card} />
    ))}
  </Grid>
</Container>;
```
