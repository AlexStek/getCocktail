<script setup lang="ts">
const menu = [
  {
    id: 1, 
    name: 'margarita'
  },
  {
    id: 2,
    name: 'mojito'
  },
  {
    id: 3,
    name: 'rum and coke'
  },
  {
    id: 4,
    name: 'gin and tonic'
  }
]

const isActive = (id: number) => {
  return id === 1
}
</script>

<template>
  <nav>
    <ul class="list">
      <li 
        v-for="item in menu" 
        :key="item.id"
        class="list-item" 
        :class="isActive(item.id) ? 'active' : ''"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.list {
  max-height: 390px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 5px 0 5px;
  border-left: none;
  border-right: none;
}

.list-item {
  list-style: none;
  background-color: rgba(0, 0, 0, 0.05);
  background-image: 
    linear-gradient(
      90deg,
      #FFD32E 10px,
      #EEE 10px,
      #EEE 11px,
      transparent 11px);
  padding: 10px 15px 10px 25px;
  border: 1px solid #CCC;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;

  &.active {
    background-color: rgba(0, 0, 0, 0.25);
  }
}
</style>