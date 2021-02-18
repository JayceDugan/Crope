import { Component, Prop, Vue } from 'vue-property-decorator';
import Hamburger from '@/components/hamburger/Hamburger.vue';
import Logo from '@/components/logo/Logo.vue';

@Component({
  components: {
    Logo,
    Hamburger,
  },
})
export default class Header extends Vue {
  @Prop() private links!: Array<object>;
}
