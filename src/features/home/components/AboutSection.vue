<script lang="ts" setup>
import CodexCover from '@/assets/images/codex_cover.jpg'
import StatsCard from './cards/StatsCard.vue'

// From Colors
import * as Colors from '@/core/styles/colors.ts'
// From Typography
import * as Typography from '@/core/styles/typography.ts'
</script>

<!--

  This section is different from the about feature.
  This section is exclusive for the HomeView only

-->

<template>
  <section class="about py-24">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Image -->
        <div class="flex flex-col">
          <img
            :src="CodexCover"
            alt="IC-LSG Codex members"
            class="rounded-3xl shadow-2xl aspect-video object-cover w-full"
          />

          <div class="stats stats-vertical md:stats-horizontal shadow mt-6">
            <StatsCard title="Projects" value="6" description="Systems Developed" />
            <StatsCard title="Members" value="20" description="Trusted Codex Members" />
            <StatsCard title="Customers" value="2k+" description="Students catered" />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div class="badge badge-secondary badge-outline">About IC-LSG Codex</div>

          <h2 :class="Typography.sectionTitle">
            <span :class="Colors.textHighlight">Empowering</span> student developers to build
            solutions for the university.
          </h2>

          <p :class="[Typography.body, Colors.textSecondary]">
            IC-LSG Codex is the official student development team of Davao del Norte State College
            under the Institute of Computing Local Student Government (IC-LSG). Composed of student
            developers, UI/UX designers, and multimedia artists, the organization collaborates to
            design, develop, and maintain digital systems that support the university's academic and
            administrative initiatives.
          </p>

          <p :class="[Typography.body, Colors.textSecondary]">
            Established in 2024, Codex was founded during the transition from the Institute of
            Computing Student Association (ICSA) to the Institute of Computing Local Student
            Government (IC-LSG). Since then, it has served as a platform for collaboration,
            technical growth, and innovation, enabling students to gain real-world software
            development experience while delivering meaningful solutions for the college community.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
