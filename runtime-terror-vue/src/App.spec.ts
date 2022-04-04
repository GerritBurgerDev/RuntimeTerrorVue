import {shallowMount} from "@vue/test-utils";
import App from "./App.vue";
import {userProductsStore} from "@/src/stores/productsStore";

describe('Main App Component', () => {
    it('should mount the component', function () {
        const wrapper = shallowMount(App);

        expect(wrapper).toBeTruthy();
    });
});
