<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodexLogo from '@/assets/codex_logo_transparent.png'
</script>

<template>
  <nav
    class="py-4 px-16 bg-violet-900 flex justify-between items-center text-gray-300 font-semibold"
  >
    <div>
      <RouterLink to="/">
        <img :src="CodexLogo" alt="Codex Logo" class="h-8 w-auto" />
      </RouterLink>
    </div>

    <ul class="flex justify-evenly gap-4">
      <RouterLink to="/overview" active-class="text-orange-400">Overview</RouterLink>
      <!-- Dropdown for Developers in Systems -->
      <details class="dropdown">
        <summary class="cursor-pointer">Developers</summary>
        <ul class="menu dropdown-content bg-purple-900 rounded-box z-1 w-52 p-2 shadow-sm gap-2">
          <RouterLink to="/student_portal_api" active-class="text-orange-400"
            >Student Portal</RouterLink
          >
          <RouterLink to="/lockers_api" active-class="text-orange-400">Locker</RouterLink>
          <RouterLink to="/voting_api" active-class="text-orange-400">Voting</RouterLink>
        </ul>
      </details>
      <RouterLink to="/blogs" active-class="text-orange-400">Blogs</RouterLink>
      <RouterLink to="/about" active-class="text-orange-400">About</RouterLink>
      <RouterLink to="/releases" active-class="text-orange-400">Releases</RouterLink>
    </ul>
  </nav>
</template>
