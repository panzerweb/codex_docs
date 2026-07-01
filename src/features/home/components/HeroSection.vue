<script lang="ts" setup>
import { useRouter, RouterLink } from 'vue-router'
import StatsCard from './cards/StatsCard.vue'

const router = useRouter()

function goToOverview() {
  router.push('/overview')
}
</script>

<template>
  <section class="hero min-h-[80vh]">
    <div class="hero-content max-w-5xl text-center">
      <div>
        <div class="badge badge-secondary badge-outline mb-5 px-4 py-4">Official Documentation</div>

        <h1 class="text-5xl md:text-7xl font-black leading-tight">
          <span class="text-purple-600">IC</span>-LSG
          <span class="text-orange-400">Codex</span>
        </h1>

        <p class="mt-6 text-xl md:text-2xl font-medium opacity-80">
          Student Developers of Davao del Norte State College
        </p>

        <p class="mt-8 max-w-3xl mx-auto text-lg leading-8 opacity-70">
          IC-LSG Codex is the official software development team under the Institute of Computing
          Local Student Government. We design, develop, and maintain digital systems that improve
          university services, streamline operations, and support continuous innovation across the
          Davao del Norte State College community.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <button class="btn btn-secondary btn-wide" @click="goToOverview">Get Started</button>

          <RouterLink to="/systems" class="btn btn-outline btn-wide"> Browse Systems </RouterLink>
        </div>

        <div class="divider my-12"></div>

        <div class="stats stats-vertical md:stats-horizontal shadow">
          <StatsCard title="Organization" value="IC-LSG" description="Institute of Computing" />
          <StatsCard title="Role" value="Developers" description="Official Student Team" />
          <StatsCard
            title="Mission"
            value="Innovation"
            description="University Digital Solutions"
          />
        </div>
      </div>
    </div>
  </section>
</template>
