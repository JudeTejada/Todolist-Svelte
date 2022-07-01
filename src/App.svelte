<script lang="ts">
  import TodoList from './lib/TodoList.svelte';
  import type { VisiblityTypes } from './util/types';

  let visibility: VisiblityTypes = 'all';
  let themeColor = '#045975';

  const handleRadio = e => {
    visibility = e.target.value;
  };

  const handleThemeChange = e => {
    themeColor = e.target.value;
  };

</script>

<div>
  <label>
    <input
      type="radio"
      value="all"
      checked={visibility === 'all'}
      bind:group={visibility}
      onInput={handleRadio}
    />
    All{' '}
  </label>
  <label>
    <input
      type="radio"
      value="active"
      checked={visibility === 'active'}
      bind:group={visibility}
      onInput={handleRadio}
    />
    Active{' '}
  </label>
  <label>
    <input
      type="radio"
      value="completed"
      checked={visibility === 'completed'}
      bind:group={visibility}
      onInput={handleRadio}
    />
    Completed{' '}
  </label>
  <label>
    <input type="color" on:change={handleThemeChange} />
    theme color
  </label>
  <TodoList {visibility} {themeColor} />
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
