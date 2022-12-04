/* vue文件补充说明文件 */

// 对.vue进行补充说明
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// 对jsx进行补充说明
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
