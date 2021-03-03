import {
  Component, Vue, Prop, PropSync,
} from 'vue-property-decorator';
import { TextInputAttributes, LabelAttributes } from '@/types';

@Component({})
export default class TextInput extends Vue {
  @Prop({ type: Boolean, required: false, default: true }) readonly displayLabel!: boolean

  @Prop({ type: Array, required: true, default: {} }) readonly labelAttributes!: LabelAttributes

  @Prop({ type: Array, required: true, default: {} }) readonly inputAttributes!: TextInputAttributes

  @PropSync('value', { type: String }) valueBinding!: string
}
