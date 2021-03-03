import { NavigationLinks } from '@/types';
import MobileMenuLinks from '@/json/MobileMenuLinks.json';
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/navigation/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class MobileMenuNavigation extends Vue {
  links: NavigationLinks;

  constructor() {
    super();

    this.links = MobileMenuLinks;
  }
}
