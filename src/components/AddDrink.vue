<template>
<section class="menu bg-danger text-white" :class="{'bg-gradient p-0 border' : editMode }">
<div class="container ">
  <div class="row p-2 e">
    <div class="col-3  text-center align-self-center mb-2 image-col">

      <span class="fw-bold mb-2 d-block" v-if="!editMode">{{ drink.label }} </span>
      <input type="text" class="form-control form-control-sm" v-else
      v-model="drink.label" :value=drink.label>
      <i class="fa-solid fa-4x" :class="drink.class"></i>
      <span class="amount d-block bg-light rounded-pill text-dark fw-bold mt-2">{{ drink.amount }}</span>
    </div>

    <div class="col position-relative">

    <i class="fa-regular fa-pen-to-square position-absolute end-0 top-0" @click="toggleEditMode"></i>

      <label :for="drink.label" class="form-label">price:</label>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
        <span v-if="!editMode"> {{ drink.price}} </span>
          <input
          v-else
            :id="drink.label"
            class="form-control form-control-sm"
            type="number"
            v-model="drink.price"
            :value="drink.price"
          />
        </div>
        <div class="col-auto">
        <i class="fa-solid fa-shekel-sign"></i>
        </div>
      </div>

      <div class="d-grid" v-if="!editMode">
        <button
          type="button"
          class="btn btn-outline-light"
          @click="addCostFn(drink.label)"
        >
          One more {{ drink.label }}
        </button>
      </div>
    </div>
  </div>


  </div>
  </seciton>
</template>
<script>
import { toRefs, props, reactive, computed, ref, unref, onMounted } from 'vue';

export default {
  name: 'AddDrink',
  props: {
    drink: Object,
    addCostFn: Function,
  },
  setup() {
    const cost = ref(0);
    const editMode = ref(false);
     const toggleEditMode = () =>{
      editMode.value = !editMode.value;
  }
    return { cost,editMode, toggleEditMode};
  },
};
</script>
<style></style>
