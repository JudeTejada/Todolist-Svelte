<script lang="ts">
  import type { VisiblityTypes } from 'src/util/types';

  import AddTodo from './AddTodo.svelte';
  export let themeColor = '';
  export let visibility: VisiblityTypes = 'active';

  console.log(themeColor, 'themeColor');

  // export const visibility: string;
</script>

<h1>{visibility}</h1>

<AddTodo {themeColor} />
