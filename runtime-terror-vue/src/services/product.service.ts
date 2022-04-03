import { ref, customRef } from 'vue'

const debounce = (fn: Function, delay: number = 0, immediate: boolean = false) => {
    let timeout: any;
    return (...args: any) => {
        if (immediate && !timeout) fn(...args);
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const useDebouncedRef = (initialValue: any, delay: number = 500, immediate: boolean = false) => {
    const state = ref(initialValue);
    const debouncedRef = customRef((track, trigger) => ({
        get() {
            track()
            return state.value
        },
        set: debounce(
            (value: any) => {
                state.value = value
                trigger()
            },
            delay,
            immediate
        ),
    }))
    return debouncedRef;
}

export default useDebouncedRef;
