<template>
  <div class="bg-gradientPrimary min-h-screen pb-32">
    <slot name="header"></slot>
    <div class="relative md:bg-transparent flex justify-center">
      <slot name="aside"></slot>
      <div class="flex w-full max-w-5xl flex-col gap-5">
        <slot name="profile-info"></slot>
      </div>
    </div>
  </div>
  <slot name="modals"></slot>
</template>
