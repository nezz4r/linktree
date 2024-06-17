<script lang="ts">
	import { cssRippleEffect } from "../utils/utils";

  export let data;
</script>

<a use:cssRippleEffect href={data.href} target="_blank" class="relative flex justify-center items-center text-gray-800 text-lg font-semibold w-full bg-white rounded-md p-2">
  {#if data.icon}
    <img src={data.icon} aria-hidden={true} alt="" class="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 mr-2 text-green-300" />
  {/if}
  <span class="mx-12 text-center">{data.title}</span>
</a>

<style>
  img {
    filter: invert(0.2);
  }
</style>