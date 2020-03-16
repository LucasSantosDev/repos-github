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

const card = {
  id: 6,
  name: 'Ricardo de Maria',
  description:
    'Web Designer, programador front-end, back-end de vez em quando.',
  img:
    'https://avatars1.githubusercontent.com/u/42626024?s=460&u=ce4217f3e524a6cb10ffb2b96535adcbae8c0848&v=4',
};

const repos = [
  {
    id: 1,
    name: 'cadastro-eventos-pessoa-fatec',
    description:
      'Sistema criado para gerenciar eventos criados por alunos da FATEC. Mude algumas configurações no br.com.fateceventos.logic.JavaMail configure seu email e sua senha!',
  },
  {
    id: 2,
    name: 'PHPExcel',
    description:
      'Forked from KarinaDatore/PHPExcel. A pure PHP library for reading and writing spreadsheet files',
  },
  {
    id: 3,
    name: 'PHPMailer',
    description:
      'Forked from PHPMailer/PHPMailer. The classic email sending library for PHP',
  },
  {
    id: 4,
    name: 'nfephp',
    description:
      'API para comunicação entre o emitente de NFe e os serviços dos SEFAZ estaduais. Inteiramente construído em PHP, roda em qualquer sistema operacional.',
  },
];

<Container className={classes.cardGrid} maxWidth="md">
  <Grid container spacing={4}>
    <DetailsCard card={card} repos={repos} />;
  </Grid>
</Container>;
```
