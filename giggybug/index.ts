/* import { createApp } from 'vue' */
/* import App from './src/components/app.vue'; */
/* import Router from 'vue-router'; */
/* import Home from './src/components/app.vue'; */
/* import Contact from './src/components/contact.vue'; */
/* import About from './src/components/about.vue'; */

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);
app.use('/api/about', aboutRoute);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

createApp(App).mount('#app')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
