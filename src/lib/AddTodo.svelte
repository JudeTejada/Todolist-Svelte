<script lang="ts">
  export let themeColor;

  let text = '';
  const handleInput = e => {
    text = e.target.value;
  };

  const addNewTodo = () => {
    if (text === '') return;
  };
</script>

<div>
  <input type="text" on:input={handleInput} />
  <button
    type="button"
    style="background-color:{themeColor}"
    on:click={addNewTodo}>add New todo</button
  >
</div>
