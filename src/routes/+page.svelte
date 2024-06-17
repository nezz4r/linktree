<script lang="ts">
	import Link from "../components/Link.svelte";
	import SocialLink from "../components/SocialLink.svelte";

  export let data;
</script>

<svelte:head>
  <title>
    {data.name}
  </title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.name} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content="{data.profilePicture}" />
  <meta property="og:url" content="https://raulvictor.dev" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="flex justify-center items-center w-full pt-16 flex-col gap-4 max-w-[540px] px-4 absolute left-[50%] -translate-x-[50%]">
  <img src={data.profilePicture} alt="Raul Victor de Queiroz" class="rounded-full w-32 h-32" />
  <div class="flex justify-center items-center gap-4 w-full">
    {#each data.socialLinks as socialLink}
      <SocialLink data={socialLink} />
    {/each}
  </div>
  <h1 class='text-2xl text-white text-center'>{data.name}</h1>
  <h2 class='text-md text-gray-100 text-center'>{data.description}</h2>
  <div class="flex flex-col justify-center items-center gap-4 w-full pt-8">
    {#each data.links as link}
      <Link data={link} />
    {/each}
  </div>
</section>

<style>
  :global(body){
    min-height: 100vh;
    background: hsla(231, 76%, 46%, 1);
    background: linear-gradient(135deg, hsla(231, 76%, 46%, 1) 0%, hsla(295, 100%, 52%, 1) 100%);
    background: -moz-linear-gradient(135deg, hsla(231, 76%, 46%, 1) 0%, hsla(295, 100%, 52%, 1) 100%);
    background: -webkit-linear-gradient(135deg, hsla(231, 76%, 46%, 1) 0%, hsla(295, 100%, 52%, 1) 100%);
    backdrop-filter: brightness(0.5);
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>