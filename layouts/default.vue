<template>
    <div>
       <header>
          <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about?id=2">About</NuxtLink></li>
            </ul>
         </nav>
       </header>
       <slot />
    </div>
</template>

<script setup lang="ts"></script>
<style lang="sass" scoped>
</style>