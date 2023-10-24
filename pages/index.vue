<template>
    <div class="image-zoom-container">
        <img class="background-image" src="../assets/bgvideo.webp" alt="Background Image" />
        <video autoplay="autoplay" loop="loop" muted defualtMuted playsinline class="zoom-video" src="../assets/video_1.mp4"
            :class="{ 'zoomed': isZoomed }" :style="{ transform: `scale(${zoomFactor})` }"></video>
    </div>
    <div class="mt-8 vdo-2">
        <video autoplay muted class="w-[100%]">
            <source src="../assets/video_2.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';


const isZoomed = ref(false);
const zoomFactor = ref(1); // Initial zoom factor

const handleScroll = () => {
    const scrollTop = window.scrollY;
    const containerOffset = container.value.offsetTop;
    isZoomed.value = scrollTop > containerOffset;

    if (isZoomed.value) {
        zoomFactor.value = 0.4; // Zoom out
    } else {
        zoomFactor.value = 1.5; // Zoom in

    }
};

const container = ref(null);

onMounted(() => {
    container.value = document.querySelector('.image-zoom-container');
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.image-zoom-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-image {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    min-width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    /* background-image: url(/images/mobile-frame/phone-mobile-cut.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    /* z-index: 1; */
    transform-origin:
}

.zoom-video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    transition: transform 1s ease;
}

.zoomed {
    transform: scale(1.5);
}
</style>