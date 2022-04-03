import {shallowMount, VueWrapper} from "@vue/test-utils";
import HomeComponent from './home-component.vue';
import {createPinia, setActivePinia} from "pinia";

const getElementByClass = (wrapper: VueWrapper, elClass: string) => {
    return wrapper.find(`.${elClass}`);
}

describe('Testing The Home Component', () => {
    let wrapper: any;

    beforeEach(() => {
        setActivePinia(createPinia());

        wrapper = shallowMount(HomeComponent);
    });

    it('should mount the component', function () {
        expect(wrapper).toBeTruthy();
    });

    it('should have then title visible', function () {
        const wrapper = shallowMount(HomeComponent);

        const element = getElementByClass(wrapper, 'headline');
        expect(element.text()).toContain('Welcome to the RTV Example Demo!');
    });
});
