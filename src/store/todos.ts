import { writable } from 'svelte/store';

type TodoState = {
  text: string;
  id: string;
};

export const todos = writable<TodoState[]>([]);
