import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Hamburger extends Vue {
  isActive: boolean;

  constructor() {
    super();
    this.isActive = false;
  }

  get active(): string {
    return this.isActive ? 'hamburger--active' : '';
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }
}
