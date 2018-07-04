<template>
  <section class="section">
    <div class="container">
        <h1 class="title">Clientes</h1>
        <h2 class="subtitle">Listado de clientes registrados</h2>
        <button class="button field is-info">
            <b-icon icon="plus"></b-icon>
            <span>Agregar</span>
        </button>
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
        { name: 'David', email: 'davgeek@outlook.com', phone: '+526441202020' },
        { name: 'Juan', email: 'juan@outlook.com', phone: '+526441202020' },
        { name: 'Pedro', email: 'pedro@outlook.com', phone: '+526441202020' },
      ],
      columns: [
        { field: 'name', label: 'Nombre' },
        { field: 'email', label: 'Email' },
        { field: 'phone', label: 'Telefono', centered: true },
      ],
    };
  },
};
</script>

<style>

</style>
