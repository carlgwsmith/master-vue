<script setup>

</script>
<template>
<div class="border-2 border-slate-300 p-5 rounded bg-slate-100">
    <slot name="name"></slot>
<hr class="h-[1px] my-2 bg-slate-300 border-0" v-if="$slots.date || $slots.description"/>
<slot name="date">
</slot>
<slot name="description"></slot>
<slot name="button"></slot>
</div>
</template>