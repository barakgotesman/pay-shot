<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Add Drink to your menu
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div class="accordion-body">
          <div class="row align-items-center">
            <div class="col-auto">
              <label for="dSelect" class="form-label">Type</label>
              <select class="form-select" v-model="newDrink.class">
                <option value="fa-beer-mug-empty">Beer</option>
                <option value="fa-martini-glass">Cocktail</option>
                <option value="fa-whiskey-glass">Shot</option>
                <option value="fa-cake-candles">Dessert</option>
                <option value="fa-wine-glass-empty">Wine</option>
              </select>
            </div>
            <div class="col-auto">
              <label for="dName" class="form-label">Name</label>
              <input
                required
                type="text"
                v-model="newDrink.label"
                id="dName"
                class="form-control"
              />
            </div>
            <div class="col-auto">
              <label for="dPrice" class="form-label">Price</label>
              <input
                type="number"
                id="dPrice"
                class="form-control"
                v-model="newDrink.price"
              />
            </div>
            <div class="col-sm-12 mt-2 d-grid">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="
                  addDrink(newDrink);
                  clean();
                "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, ref, unref } from 'vue';

export default {
  name: 'AddDrinkForm',
  props: {
    addDrink: Function,
  },
  setup() {
    const initDrink = {
      label: '',
      price: 0,
      type: null,
    },
    const newDrink = reactive(initDrink);
    const clean = () =>{
      newDrink.label = "";
      newDrink.price = 0;
}
    return { newDrink, clean , initDrink};
  },
};
</script>
<style></style>
