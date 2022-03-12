<template>
  <div class="container">
    <div
      class="
        bg-body
        mb-2
        d-flex
        justify-content-center
        text-center
        p-4
        align-items-center
      "
    >
      Bill:
      <span class="fs-5 p-4" id="topay"> {{ state.topay }} </span>
      <i class="fa-regular fa-money-bill-1 fa-2x"></i>
    </div>

    <AddDrinkForm :addDrink="addDrink" />
    <div v-for="(item, index) in sortedList" :key="index">
      <AddDrink :drink="item" :addCostFn="addCost" />
    </div>
  </div>
  <Footer />
</template>

<script>
import { watch,toRefs, reactive, computed, ref, unref } from 'vue';
import AddDrink from './components/AddDrink.vue';
import AddDrinkForm from './components/AddDrinkForm.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    AddDrink,
    AddDrinkForm,
    Footer
  },
  setup() {
    const state = reactive({
      topay: 0,
      items: [
        { label: 'shot', price: 10, class: 'fa-whiskey-glass', amount: 0 },
        { label: 'beer', price: 35, class: 'fa-beer-mug-empty', amount: 0 },
      ],
    });

    // add new drink to your array
    const addDrink =(newDrink) =>{
            const drink = state.items.find((d) => d.label == newDrink.label);
            if(newDrink.label=="") return;
            if(drink)
            {
              alert("already in our database")

              return;
            }
            state.items.push({
              label: newDrink.label,
              price: newDrink.price,
              class: '',
              amount: 0
            })
    },
    const sortedList = computed( ()=>{
        return state.items.sort((a,b)=>{return b.amount-a.amount})
    }

    ),
    const addCost = (label) => {
      const drink = state.items.find((d) => d.label == label);
      if (drink) {
        drink.amount += 1;
        state.topay += drink.price;
      }
    };

    return { state, addCost , addDrink, sortedList};
  },
};
</script>

<style>
body {
  background: url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
  background-size: cover;
}
</style>
