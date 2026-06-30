<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="p-4 bg-purple-950 flex justify-between text-gray-300 font-semibold">
    <div>
      <RouterLink to="/">Codex</RouterLink>
    </div>

    <ul class="flex justify-evenly gap-4">
      <!-- Dropdown for Developers in Systems -->
      <details class="dropdown">
        <summary class="">Developers</summary>
        <ul class="menu dropdown-content rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      <RouterLink to="/blogs" active-class="text-orange-400">Blogs</RouterLink>
      <RouterLink to="/about" active-class="text-orange-400">About</RouterLink>
      <RouterLink to="/releases" active-class="text-orange-400">Releases</RouterLink>
    </ul>
  </nav>
</template>
