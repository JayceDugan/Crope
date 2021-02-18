import { Component, Vue, Prop } from 'vue-property-decorator';
import { NavigationLinks } from '@/types';
import NavigationItem from './NavigationItem.vue';

@Component({
  components: {
    NavigationItem,
  },
})
export default class Navigation extends Vue {
  @Prop({ type: Array, required: true, default: [] }) readonly links!: NavigationLinks;
}
