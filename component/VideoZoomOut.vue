<template>
    <div>
        <div class="intro" :style="{ transform: introTransform }">
            <video autoplay muted class="w-[100%]">
                <source src="../assets/video_1.mp4" type="video/mp4" />
            </video>
        </div>
        <div id="mac">
            <video autoplay muted class="w-[100%]">
                <source src="../assets/video_1.mp4" type="video/mp4" />
            </video>
        </div>
        <h1 v-if="showH1">
            <!-- Your h1 content goes here -->
        </h1>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const windowTop = ref(0);
        const scrollPercent = ref(1);
        const showH1 = ref(true);

        const introTransform = ref(`scale(${scrollPercent.value})`);

        const handleScroll = () => {
            windowTop.value = window.scrollY;

            // Hide intro if the point is reached
            if (windowTop.value >= 940) {
                showH1.value = false;
            } else {
                if (windowTop.value < 200 && windowTop.value > 100) {
                    // Only perform in a 100px range
                    showH1.value = false;
                }
                showH1.value = true;
                scrollPercent.value = (document.getElementById('mac').offsetTop - windowTop.value) / document.getElementById('mac').offsetTop;
                introTransform.value = `scale(${scrollPercent.value})`;
            }
        };

        onMounted(() => {
            handleScroll(); // Initial call
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            introTransform,
            showH1,
        };
    },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
