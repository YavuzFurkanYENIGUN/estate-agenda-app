import Home from '../../modules/app/home/router';
import Privacy from '../../modules/app/privacy/router';
import Portfolio from '../../modules/app/portfolio/router';
import Customers from '../../modules/app/customers/router';
import Notes from '../../modules/app/notes/router';
import About from '../../modules/app/about/router';
import Documents from '../../modules/app/documents/router';

export default [...Home, ...Privacy, ...Portfolio, ...Customers, ...Notes, ...About, ...Documents];
