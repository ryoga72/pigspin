<template>
    <section :style="{ position: positionValue }" class="w-[100%]">
        <div :style="{ opacity: textOpacity }">
            <h1>POPSLOT เว็บสล็อตออนไลน์ที่มาแรงที่สุด</h1>
            <h4>
                <span style="background-color: #ff9100; font-weight: 700;" class="p-2 rounded-lg text-[#2a2a2e] ">TOP
                    1</span>
                อันดับ
                1
                ในไทยตอนนี้
            </h4>
            <div class=" btn-regis">
                <a href="https://m.popslot.bet/login?action=register" class="no-underline">
                    <button class="rounded-full btn text-[#000000] w-[150px]	">สมัครเลย!</button>
                </a>
            </div>

        </div>
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
const positionValue = ref('fixed'); // Initial zoom factor

const handleScroll = () => {
    const scrollTop = window.scrollY;
    const containerOffset = container.value.offsetTop;
    isZoomed.value = scrollTop > containerOffset;
    isZoomedImg.value = scrollTop > containerOffset;
    if (scrollTop > 300) {
        positionValue.value = 'sticky'
    } else {
        positionValue.value = 'fixed'
    }
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
const textOpacity = computed(() => {
    if (isZoomed.value) {
        // If zoomed, set a slower transition for opacity
        return 0
    } else {
        // If not zoomed, keep opacity at 1
        return 1;
    }
});

</script>

<style scoped>
h1 {
    position: fixed;
    top: 71%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 36px;
    z-index: 999;
    color: white;
    font-weight: 700;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, .25));
}

h4 {
    position: fixed;
    top: 81%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 36px;
    z-index: 999;
    color: white;
    font-weight: 700;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, .25));

}

.btn-regis {
    position: fixed;
    top: 91%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 36px;
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