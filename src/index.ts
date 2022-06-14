import {createApp,} from 'vue';
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'normalize.css';
import 'ant-design-vue/dist/antd.less';


const app = createApp(App);
Antd.install(app).mount('#app');
