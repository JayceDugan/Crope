import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavigationLink } from '@/types';

@Component
export default class NavigationItem extends Vue {
  @Prop(
    {
      type: Object,
      required: true,
      default: {
        to: '',
        text: '',
      },
    },
  ) readonly link!: NavigationLink;

  get text(): string {
    return this.link.text;
  }

  get to(): string {
    return this.link.to;
  }
}
