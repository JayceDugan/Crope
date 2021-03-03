import { Vue, Component } from 'vue-property-decorator';
import MobileMenuNavigation from './MobileMenuNavigation.vue';

@Component({
  components: {
    MobileMenuNavigation,
  },
})
export default class MobileMenu extends Vue {}
