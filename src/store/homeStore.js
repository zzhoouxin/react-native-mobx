import { observable,action} from "mobx";
class HomeStore {
  @observable homeNum = 99;
  @action addNum() {
    console.log('%caddNum: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',33333);
    this.homeNum += 1;
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
}
export default HomeStore;
