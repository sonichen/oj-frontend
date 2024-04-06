<template>
  <Viewer :value="value" :plugins="plugins" />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { withDefaults, defineProps } from "vue";

interface Props {
  value: string;
}

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
});
</script>
<script lang="ts">
export default {
  name: "MdViewer",
};
</script>
<style></style>
