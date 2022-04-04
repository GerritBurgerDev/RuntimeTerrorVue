import {products} from "./data/get-products";

const getProducts = () => {
    return cy.get(`[data-cy="product-row"]`);
}

const getLastProduct = () => {
    return cy.get(`[data-cy="product-row"]`).last();
}

const getButton = (name: string) => {
    return cy.get(`[data-cy="${name}-button"]`);
}

describe('Main', () => {
    it('should display header text', () => {
        cy.visit('/');
        cy.contains('h2', 'Welcome to the RTV Example Demo!');
    })

    it('should display 10 products', function () {
        const products = getProducts();
        products.should('have.length', 10);
    });

    describe('when the add product button is clicked', function () {
        beforeEach(() => {
            const button = getButton('add-product');

            button.click();
        });

        it('should add a new product', function () {
            const products = getProducts();
            products.should('not.have.length', 10);
        });
    });

    describe('when the remove product button is clicked', function () {
        beforeEach(() => {
            const button = getButton('remove-product').last();

            button.click();
        });

        it('should remove the last product', function () {
            const products = getProducts();
            products.should('have.length', 10);
        });
    });
})
