<template>
    <NuxtLayout name="default">
        <section v-if="$device.isDesktop">
            <VideoZoomOutIsDesktop />
        </section>
        <section v-if="$device.isMobile">
            <VideoZoomOutIsMobile />
        </section>
        <div class="mt-8 lg:mt-2 text">
            <div class="flex justify-center">
                <h2 class="text-[#ED7638] text-[1.2rem] font-normal">PG SLOT เว็บที่รวมเกมสล็อตแตกง่ายที่เยอะที่สุด
                </h2>
            </div>
            <div class="flex justify-center">

                <div class="lg:w-[40%] md:w-[100%] text-center text-white">
                    ยินดีต้อนรับเข้าสู่เว็บ pg slot ที่รวมเกมสล็อตแตกง่ายที่เยอะที่สุด เล่น สล็อตpg เว็บตรง
                    ได้สะดวกและปลอดภัย
                    บริการครบวงจรที่สุด พร้อมเกมหลากหลายที่มีให้เลือกเล่นอย่างจุใจเพียบ ให้ทุกวันที่นี้
                    มีมากกว่าความสนุกแน่นอน!
                    กับเว็บยอดนิยม ที่คนบอกต่อและชวนเพื่อนมาเล่นเยอะที่สุด
                    มาร่วมเป็นส่วนหนึ่งในชุมชนสล็อตออนไลน์ที่ใหญ่ที่สุดได้แล้ววันนี้ สมัครเลย!
                </div>
            </div>
        </div>
        <div class="mt-8 vdo-2">
            <video autoplay muted class="w-[100%]">
                <source src="../assets/video_2.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="mt-4 game-slide">
            <infinite-slide-bar duration="60s">
                <div class="flex gap-4">
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/circus-delight/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/cai-shen-wins/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/captains-bounty/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/circus-delight/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/cai-shen-wins/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/captains-bounty/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                </div>
            </infinite-slide-bar>
        </div>
        <div class="mt-4 game-slide">
            <infinite-slide-bar duration="60s" direction="reverse">
                <div class="flex gap-4">
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/dragon-legend/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/ganesha-gold/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/journey-to-the-wealth/maquee-cover.jpg"
                            alt="maquee-cover" class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/genies-wishes/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/ganesha-gold/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/journey-to-the-wealth/maquee-cover.jpg"
                            alt="maquee-cover" class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/genies-wishes/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/dragon-legend/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                </div>
            </infinite-slide-bar>
        </div>
        <div class="mt-4 game-slide">
            <infinite-slide-bar duration="60s">
                <div class="flex gap-4">
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/queen-bounty/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/vampires-charm/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/queen-bounty/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/vampires-charm/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                    <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
                        <img src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg" alt="maquee-cover"
                            class="rounded-lg" />
                    </div>
                </div>
            </infinite-slide-bar>
        </div>
        <div class="flex justify-center mt-4">
            <button class="rounded-full btn btn-outline">ดูเกมทั้งหมด</button>
        </div>
        <div class="flex justify-center mt-8">

            <div
                class=" shadow-xl card w-96  bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-neutral-content">
                <div class="items-center text-center text-white card-body">
                    <h2 class="card-title text-[1.7279166667rem]">สมัครง่าย</h2>
                    <p class="text-[1.4141666667rem]">แค่ใช้เบอร์มือถือและบัญชีธนาคาร</p>
                    <div class="justify-end mt-2 card-actions">
                        <a href="https://m.popslot.bet/login?action=register" class="no-underline">
                            <button class="rounded-full btn text-[#f0c373]">สมัครสมาชิกเลย!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="container py-2 mx-auto lg:w-[60%] w-[100%] p-4 lg:p-10">
                <div class="grid mt-8 justify-items-stretch">
                    <h2 class="text-[#ED7638] text-[40px] font-normal justify-self-center">โปรโมชั่น
                    </h2>
                    <div v-for="(data, index) in posts" :key="index" class="items-center justify-center w-full mb-4">
                        <!-- <NuxtLink :to="`/article/${data.id}`"> -->
                        <figure><nuxt-img :src="data.url_img" :alt="data.title.rendered" class="rounded-lg" />
                        </figure>
                        <!-- </NuxtLink> -->

                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button
                        class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl ">โปรโมชั่นทั้งหมด</button>
                </div>
                <div class="mt-8 service">
                    <h2 class="text-[24px] lg:text-[40px] font-normal justify-self-center text-[#ed7638]">บริการของเรา
                    </h2>
                    <p class="text-white">เว็บสล็อตออนไลน เว็บตรงที่พร้อมให้บริการ 24 ชม. เติม-ถอน อัตโนมัติ สะดวก รวดเร็ว
                        ปลอดภัย
                    </p>
                    <div class="grid grid-cols-2 gap-8 mt-4 lg:grid-cols-4">
                        <div class="justify-self-center ">
                            <div class="flex items-center justify-center mb-2">
                                <img src="../assets/serviec-1.png" class="rounded-lg w-[100px] lg:w-[150px]" />
                            </div>
                            <p class="text-center  text-white text-[14px]">เติม-ถอน อัตโนมัติ</p>
                            <p class="text-center  text-white text-[12px]">ปลอดภัย เข้าไว เพียงไม่กี่วินาที</p>
                        </div>
                        <div class="justify-self-center">
                            <div class="flex items-center justify-center mb-2">
                                <img src="../assets/serviec-2.png" class="rounded-lg w-[100px] lg:w-[150px]" />

                            </div>
                            <p class="text-center text-white text-[14px]">ทรู วอลเล็ท</p>
                            <p class="text-center  text-white text-[12px]">อีกทางเลือกของการเติม-ถอน</p>
                        </div>
                        <div class="justify-self-center">
                            <div class="flex items-center justify-center mb-2">
                                <img src="../assets/serviec-3.png" class="rounded-lg w-[100px] lg:w-[150px]" />

                            </div>
                            <p class="text-center  text-white text-[14px]">เกมสนุกกว่า 300 เกม</p>
                            <p class="text-center  text-white text-[12px]">กำลังรอคุณอยู่</p>
                        </div>
                        <div class="justify-self-center">
                            <div class="flex items-center justify-center mb-2">
                                <img src="../assets/serviec-4.png" class="rounded-lg w-[100px] lg:w-[150px]" />

                            </div>
                            <p class="text-center  text-white text-[14px]">พร้อมบริการ</p>
                            <p class="text-center  text-white text-[12px]">ตลอด 24 ชั่วโมง</p>
                        </div>
                    </div>
                    <div class="flex justify-center mt-4">

                        <a href="https://m.popslot.bet/login?action=register" class="no-underline">
                            <button
                                class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl ">สมัครสมาชิกเลย!</button>
                        </a>

                    </div>
                </div>
                <div class="mt-10 ">
                    <div v-html="contentJson.content.rendered">
                    </div>
                </div>
                <div class="mt-10 post">
                    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <div v-for="(data, index) in posts" :key="index"
                            class="items-center justify-center w-full mx-1 duration-300 bg-black rounded-lg cursor-pointer hero_div hover:scale-90 hover:bg-black">
                            <!-- <NuxtLink :to="`/article/${data.id}`"> -->

                            <figure><nuxt-img :src="data.url_img" :alt="data.title.rendered" class="rounded-lg" />
                            </figure>
                            <div class="p-2 card-body">
                                <p class="text-[11.5px] md:text-[18px] text-center text-white">{{ data.title.rendered }}
                                </p>
                            </div>
                            <!-- </NuxtLink> -->
                        </div>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button
                            class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl ">บทความทั้งหมด</button>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import VideoZoomOutIsDesktop from "../component/VideoZoomOutIsDesktop.vue"
import VideoZoomOutIsMobile from "../component/VideoZoomOutIsMobile.vue"
import "@wordpress/block-library/build-style/common.css"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const response = await useFetch(`https://wordpress-704245-3836348.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories=3&per_page=10`)
const content = await useFetch(`https://wordpress-704245-3836348.cloudwaysapps.com/wp-json/wp/v2/pages/16`)
const contentJson = JSON.parse(content.data.value)
const posts: any = []
for (const data of response.data.value) {
    posts.push({
        ...data,
        url_img: data._embedded["wp:featuredmedia"][0].source_url
    })
}
</script>
<style scoped></style>