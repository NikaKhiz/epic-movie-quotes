<template>
  <div class="bg-gradientPrimary min-h-screen">
    <slot name="header"></slot>
    <div class="relative px-9 md:px-16 py-8 flex justify-end">
      <slot name="aside"></slot>
      <div class="flex-1 max-w-[1400px]">
        <div class="flex flex-col gap-5">
          <slot name="navigation"></slot>
          <slot name="list"></slot>
        </div>
      </div>
    </div>
  </div>
  <slot name="modals"></slot>
</template>
