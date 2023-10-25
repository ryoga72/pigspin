<template>
    <section>
        <div :style="{ opacity: textOpacity }">
            <h1>POPSLOT เว็บสล็อตออนไลน์ที่มาแรงที่สุด</h1>
            <h4>
                <span style="background-color: #ff9100;" class="p-2 rounded-lg text-[#2a2a2e]">TOP 1</span> อันดับ 1
                ในไทยตอนนี้
            </h4>
        </div>
        <div class="image-zoom-container">
            <img class="background-image zoom-bg" src="../assets/phone-mobile-cut.webp" alt="Background Image"
                :class="{ 'zoomed': zoomFactorImg }" :style="{ transform: `scale(${zoomFactorImg})` }" />
            <video autoplay="autoplay" loop="loop" muted defualtMuted playsinline class="zoom-video"
                src="../assets/PIGSPIN360x493.mp4" :class="{ 'zoomed': isZoomed }"
                :style="{ transform: `scale(${zoomFactor})` }"></video>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';


const isZoomed = ref(false);
const isZoomedImg = ref(false);
const zoomFactor = ref(2); // Initial zoom factor
const zoomFactorImg = ref(7); // Initial zoom factor

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
        zoomFactorImg.value = 5; // Zoom in
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
const textOpacity = computed(() => {
    if (isZoomed.value) {
        // If zoomed, set a slower transition for opacity
        return Math.min(1, Math.max(0, (window.scrollY - container.value.offsetTop) / 300));
    } else {
        // If not zoomed, keep opacity at 1
        return 1;
    }
});

</script>

<style scoped>
h1 {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 20px;
    z-index: 999;
    color: white
}

h4 {
    position: fixed;
    top: 60%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 18px;
    z-index: 999;
    color: white
}

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
    object-fit: cover;
    /* background-size: contain; */
    /* background-repeat: no-re peat; */
    /* background-position: 50%; */
    z-index: 1;
    /* transform-origin: center center */
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
    height: 100%;
    transition: transform 1.5s ease;
}

.zoomed {
    transform: scale(1.2);
}

.zoomedimg {
    transform: scale(1.2);
}
</style>