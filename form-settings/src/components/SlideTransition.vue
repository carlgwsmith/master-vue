<template>
    <Transition name="slide" mode="out-in">
        <slot></slot>
    </Transition>
</template>
<style scoped>
.slide-enter-active,
.slide-leave.active{
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave.to{
transform:translateX(-100%);
opacity: 0;
}

</style>