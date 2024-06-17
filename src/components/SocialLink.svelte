<script lang="ts">
  export let data;
</script>

<a href={data.href} target="_blank" class="h-6 w-6 rounded-md">
  {#if data.icon}
    <img src={data.icon} alt={data.title} />
  {/if}
</a>


<style>
  img {
    filter: invert(1);
  }
</style>