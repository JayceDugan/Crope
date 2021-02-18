import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
  @Prop() private width!: number;
}
