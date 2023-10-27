<template>
    <section class="w-[100%] ">
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
const zoomFactorImg = ref(6); // Initial zoom factor
const zoomStep = 0.2; // Adjust the zoom step size


const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    const containerOffset = container.value.offsetTop;
    isZoomed.value = scrollTop > containerOffset + 100; // Adjust the trigger point (e.g., 100 pixels)
    isZoomedImg.value = scrollTop > containerOffset + 100; // Adjust the trigger point (e.g., 100 pixels)
    if (scrollTop <= 100) {
        if (isZoomedImg.value && event.deltaY > 0) {
            // Zoom out
            zoomFactorImg.value = Math.max(zoomFactorImg.value - zoomStep, 1);
        } else if (event.deltaY < 0) {
            // Zoom in
            zoomFactorImg.value = Math.min(zoomFactorImg.value + zoomStep, 6); // Adjust the max zoom level
        }
        else {
            zoomFactorImg.value = 1;

        }
        if (isZoomed.value && event.deltaY > 0) {
            // Zoom out
            zoomFactor.value = Math.max(zoomFactor.value - zoomStep, 0.6);
        } else if (event.deltaY < 0) {
            // Zoom in
            zoomFactor.value = Math.min(zoomFactor.value + zoomStep, 1.5); // Adjust the max zoom level
        } else {
            zoomFactor.value = 1;

        }

    }


};

const container = ref(null);

onMounted(() => {
    container.value = document.querySelector('.image-zoom-container');
    window.addEventListener('wheel', handleScroll);

});

onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleScroll);
});
const textOpacity = computed(() => {
    if (zoomFactorImg.value === 6) {
        // When not zoomed, keep text opacity at 1
        return 1;
    } else {
        // When zoomed, hide text by setting opacity to 0
        return 0;
    }
});
</script>

<style scoped>
.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    /* Adjust the z-index as needed */
}

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
    /* height: 100vh; */
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
    transition: transform 3s ease;
}

.zoom-bg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    transition: transform 3s ease;
}

.zoomed {
    transform: scale(1.2);
}

.zoomedimg {
    transform: scale(1.2);
}
</style>