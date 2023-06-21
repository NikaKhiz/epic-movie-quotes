<template>
  <div class="flex flex-col gap-5 font-medium text-2xl md:text-3xl">
    <div class="flex items-center justify-center">
      <slot name="notification-image"></slot>
    </div>
    <p>
      <slot name="notification-heading"></slot>
    </p>
  </div>
</template>
