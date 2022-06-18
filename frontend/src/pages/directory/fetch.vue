<template>
  <div class="wrap">
    <div v-if="customerPend || areaPend">pending</div>
    <div v-else>{{ customer }}{{ area }}</div>
  </div>
</template>
<script lang="ts" setup>
import AreaService from '~~/src/services/areaService';
import CustomerService from '~~/src/services/customerService';

// eslint-disable-next-line max-len
const { pending: customerPend, data: customer } = useLazyAsyncData('customer', async () => {
  return CustomerService.getCustomer(1);
});

// eslint-disable-next-line max-len
const { pending: areaPend, data: area } = useLazyAsyncData('area', async () => {
  return AreaService.getArea();
});

</script>
