import {setActivePinia} from "pinia";
import {createTestingPinia} from "@pinia/testing";
import {useCounterStore} from "../../stores/counterStore";

describe('Counter Store Tests', function () {
    let store: any;

    beforeEach(() => {
        setActivePinia(createTestingPinia());

        store = useCounterStore();
    });

    it('should have the counter value as 0', function () {
        expect(store.count).toBe(0);
    });

    describe('when the increment action is called', function () {
        beforeEach(() => {
            store.increment(10);
        });

        it('should have the counter value as 10', function () {
            expect(store.count).toBe(10);
        });

        it('should have the doubleCount getter as 20', function () {
            expect(store.doubleCount).toBe(20);
        });
    });
});
