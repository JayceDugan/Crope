import { Vue, Component } from 'vue-property-decorator';
import { NavigationLinks } from '@/types';
import Navigation from '@/components/navigation/Navigation.vue';
import MobileMenuLinks from '@/json/MobileMenuLinks.json';

@Component({
  components: {
    Navigation,
  },
})
export default class MobileMenu extends Vue {
  links: NavigationLinks;

  constructor() {
    super();

    this.links = MobileMenuLinks;
  }
}
