import {createPinia, Pinia} from 'pinia';
import {watch} from "vue";

const pinia: Pinia = createPinia();

// We require the following so pinia's state will persist after reload.
const state: string | null = localStorage.getItem("state");
if (state) {
    pinia.state.value = JSON.parse(state);
}

watch(
    // () => pinia.state.value.{storeName}, <- if we only want to store a singular store. Perhaps global?
    pinia.state,
    (state) => {
        localStorage.setItem("state", JSON.stringify(state));
    },
    { deep: true }
)
// END STATE PERSISTENCE BLOCK

export default pinia;
