import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header/Header.vue';
import MobileMenu from '@/components/mobile-menu/MobileMenu.vue';

@Component({
  components: {
    Header,
    MobileMenu,
  },
})
export default class App extends Vue {}
