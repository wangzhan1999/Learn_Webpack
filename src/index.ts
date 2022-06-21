import {createApp,} from 'vue';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'normalize.css';
import 'ant-design-vue/dist/antd.less';
import router from './router/index'



createApp(App).use(router).use(Antd).mount('#app');
// Antd.install(app);
