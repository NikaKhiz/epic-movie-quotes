<template>
  <div class="bg-gradientPrimary min-h-screen">
    <slot name="movies-header"></slot>
    <div class="relative px-9 md:px-16 py-8 flex justify-end">
      <slot name="movies-aside"></slot>
      <div class="flex-1 max-w-[1400px]">
        <div class="flex flex-col gap-5">
          <slot name="movies-navigation"></slot>
          <slot name="movies-grid"></slot>
        </div>
      </div>
    </div>
  </div>
  <slot name="movies-modals"></slot>
</template>
