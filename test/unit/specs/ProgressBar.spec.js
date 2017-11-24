import Vue from 'vue'
import ProgressBar from '@/components/ProgressBar'

describe('ProggressBar.vue', () => {
  it('should render correct contents', () => {

    expect(typeof ProgressBar.created).toBe('function');


  });

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof ProgressBar.data).toBe('function');
    const defaultData = ProgressBar.data();
    expect(defaultData.msg).toBe('');
  });

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(ProgressBar);
    const vm = new Ctor().$mount();
    console.log(vm.$el.querySelector('.indeterminate'));
  })

})
