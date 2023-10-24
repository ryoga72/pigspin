<template>
    <section>
        <div class="image-zoom-container">
            <img class="background-image zoom-bg" src="../assets/bgvideo.webp" alt="Background Image"
                :class="{ 'zoomed': zoomFactorImg }" :style="{ transform: `scale(${zoomFactorImg})` }" />
            <video autoplay="autoplay" loop="loop" muted defualtMuted playsinline class="zoom-video"
                src="../assets/video_1.mp4" :class="{ 'zoomed': isZoomed }"
                :style="{ transform: `scale(${zoomFactor})` }"></video>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';


const isZoomed = ref(false);
const isZoomedImg = ref(false);
const zoomFactor = ref(1.2); // Initial zoom factor
const zoomFactorImg = ref(5); // Initial zoom factor

const handleScroll = () => {
    const scrollTop = window.scrollY;
    const containerOffset = container.value.offsetTop;
    isZoomed.value = scrollTop > containerOffset;
    isZoomedImg.value = scrollTop > containerOffset;
    zoomFactorImg.value = scrollTop > containerOffset;

    if (isZoomed.value) {
        zoomFactor.value = 0.6; // Zoom out
    } else {
        zoomFactor.value = 1.5; // Zoom in
    }
    if (isZoomedImg.value) {
        zoomFactorImg.value = 1; // Zoom out
    } else {
        zoomFactorImg.value = 6; // Zoom in
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
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    z-index: 1;
    transform-origin: center center
}

.background-image-mobile {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: block;
    background-size: auto;
    z-index: 1;
}

.zoom-video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    transition: transform 1.5s ease;
}

.zoom-bg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    transition: transform 1.5s ease;
}

.zoomed {
    transform: scale(1.2);
}

.zoomedimg {
    transform: scale(1.2);
}
</style>