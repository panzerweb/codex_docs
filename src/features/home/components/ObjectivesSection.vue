<script lang="ts" setup>
// From Colors
import * as Colors from '@/core/styles/colors'
// From Typography
import * as Typography from '@/core/styles/typography'
</script>

<template>
  <section class="about py-24">
    <div class="container mx-auto px-6">
      <div class="text-center flex flex-col gap-4">
        <h1 :class="Typography.sectionTitle">Our goal is not just to code</h1>
        <p :class="Typography.body">
          <span :class="[Typography.bodyBold, Colors.textHighlight]">Codex</span> is not just any
          student developer that is out there just to code and get things done.
        </p>
      </div>
    </div>
  </section>
</template>
