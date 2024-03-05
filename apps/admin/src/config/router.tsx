import App from '../App'
import Layouts from '../pages/layout'

const routerConfig = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/layout',
    element: <Layouts />,
  },
]

export default routerConfig
