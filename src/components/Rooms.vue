<template>
  <section class="section">
    <div class="container">
        <h1 class="title">Habitaciones</h1>
        <h2 class="subtitle">Listado de habitaciones</h2>
        <b-table :data="data" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Customers',
  data() {
    return {
      data: [
        { number: '501', type: 'Suite', price: 99.90 },
        { number: '502', type: 'Suite', price: 99.90 },
        { number: '503', type: 'Presidential', price: 199.90 },
        { number: '504', type: 'Double', price: 69.90 },
        { number: '505', type: 'Suite', price: 99.90 },
      ],
      columns: [
        { field: 'number', label: 'Número' },
        { field: 'type', label: 'Tipo' },
        { field: 'price', label: 'Precio', numeric: true },
      ],
    };
  },
};
</script>

<style>

</style>
