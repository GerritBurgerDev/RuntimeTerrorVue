import {mount, VueWrapper} from "@vue/test-utils";
import HomeComponent from './home-component.vue';
import {createTestingPinia} from "@pinia/testing";
import {userProductsStore} from "../../stores/productsStore";

const getElementByClass = (wrapper: VueWrapper, elClass: string) => {
    return wrapper.find(`.${elClass}`);
}

const getButton = (wrapper: VueWrapper, identified: string) => {
    return wrapper.find(`[data-test="${identified}-button"]`);
}

describe('Testing The Home Component', () => {
    let wrapper: VueWrapper;
    let store: any;

    beforeEach(() => {
        wrapper = mount(HomeComponent, {
            global: {
                plugins: [createTestingPinia()]
            },
        });

        store = userProductsStore();
    });

    it('should mount the component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should have then title visible', () => {
        const element = getElementByClass(wrapper, 'headline');
        expect(element.text()).toContain('Welcome to the RTV Example Demo!');
    });

    describe('when the component is mounted', () => {
        describe('and the product are fetched successfully', () => {
            const products = [
                {
                    id: 1,
                    name: 'fake product 1'
                }
            ];

            beforeEach(() => {
                store.products = products;
            })

            it('should not have fetchProductsError', () => {
                expect((wrapper.vm as any).fetchProductsError).toEqual('');
            });

            it('should get the products successfully', () => {
                expect((wrapper.vm as any).products).toMatchObject(products);
            });
        });

        describe('and the products are not successfully fetched', () => {
            beforeEach(() => {
                store.products = [];
                store.fetchProductsError = 'Some Error';
            });

            it('should have a fetchProductsError', () => {
                expect((wrapper.vm as any).fetchProductsError).toEqual('Some Error');
            });

            it('should get the products as an empty array', () => {
                expect((wrapper.vm as any).products).toMatchObject([]);
            });
        })
    });
});
