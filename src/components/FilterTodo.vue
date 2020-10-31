<template>
  <div>
    filter todos:
    <select @change="filterTodos($event)" class="theme-construction">
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="5">5</option>
      <!-- <option value="100">100</option> -->
    </select>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["filterTodos"]),
  },
};
</script>
<style scoped>
select {
  
  -webkit-appearance: none;
  appearance: none;
  color: var(--baseFg);
  border: 1px solid var(--baseFg);
  line-height: 1;
  outline: 0;
  padding: 0.65em 2.5em 0.55em 0.75em;
  border-radius: var(--radius);
  background-color: var(--baseBg);
  background-image: linear-gradient(var(--baseFg), var(--baseFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
  background-position: right 20px center, right bottom, right bottom,
    right bottom;
}
.theme-construction {
  --radius: 0;
  --baseFg: white;
  --baseBg:#555;
  --accentFg: white;
  --accentBg: #555;
}
</style>