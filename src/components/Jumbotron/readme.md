```js
import GitHub from '@material-ui/icons/GitHub';

const contentJumbotron = `O projeto Request Repos foi criado com intuito de
  utilizar várias tecnologias, como: ReactJS, TypeScript, Netlify, CI/CD`;

<Jumbotron
  title="RequestRepos"
  icon={<GitHub fontSize="large" />}
  content={contentJumbotron}
  changeThemeButtons
/>;
```
