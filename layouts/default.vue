<template>
    <div class="fixed top-0 left-0 right-0 z-50 shadow-xl navbar bg-base-100">
        <div class="flex-1">
            <a class="text-xl normal-case btn btn-ghost">PIGSPIN</a>
        </div>
        <div class="flex-none gap-4">
            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer-4"> <img for="my-drawer-4" src="../assets/msg.svg" alt="maquee-cover"
                            class="w-[35px] h-[35px]" />
                    </label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <div class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">

                    </div>
                    <!-- <ul class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul> -->
                </div>
            </div>
            <button class="text-white rounded-full btn btn-primary btn-md">
                สมัคร / เข้าสู่ระบบ
            </button>
            <!-- <ul class="px-1 menu menu-horizontal">
                <li>
                    <a>
                        <button class="text-white rounded-full btn btn-primary btn-md">
                            สมัคร / เข้าสู่ระบบ
                        </button>
                    </a>
                </li>
                <li>
                    <div class="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                            <label for="my-drawer-4" class="btn btn-primary">Open</label>
                        </div>
                        <div class="drawer-side">
                            <label for="my-drawer-4" class="drawer-overlay"></label>
                            <ul class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul> -->

        </div>
    </div>
    <slot></slot>

    <footer class="footer bg-[#310077] text-[#ffffff] p-10">
        <div class="w-full">
            <div class="container py-2 mx-auto lg:w-[60%] md:w-[100%]">
                <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                    <div>
                        <figure><img src="../assets/logo-greyscale-inverse.webp" alt="maquee-cover"
                                class="w-[140px] h-[35px]" /></figure>
                    </div>
                    <div class="flex flex-col ">
                        <span class="footer-title">Services</span>
                        <a class="link link-hover text-[#ffffff]">Branding</a>
                        <a class="link link-hover text-[#ffffff]">Design</a>
                        <a class="link link-hover text-[#ffffff]">Marketing</a>
                        <a class="link link-hover text-[#ffffff]">Advertisement</a>
                    </div>
                    <div class="flex">
                        <div>
                            <figure>
                                <img src="../assets/icon.png" alt="maquee-cover" class="w-[25px] h-[25px] m-4" />
                            </figure>
                        </div>
                        <div>
                            <div class="">Secure</div>
                            <div class="">SSL Encryption</div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="grid grid-cols-7 gap-2">
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/KBANK.png" alt="KBANK">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/SCB.png" alt="SCB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/KTB.png" alt="KTB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/BAY.png" alt="BAY">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/TRUEWALLET.png" alt="TRUEWALLET">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/GSB.png" alt="GSB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/BBL.png" alt="BBL">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/BAAC.png" alt="BAAC">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/KKB.png" alt="KKB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/OSK.png" alt="OSK">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/TTB.png" alt="TTB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/TISGO.png" alt="TISGO">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/UOB.png" alt="UOB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/CITI.png" alt="CITI">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/LNH.png" alt="LNH">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/CIMB.png" alt="CIMB">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/TCR.png" alt="TCR">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/MIZUHO.png" alt="MIZUHO">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/SCBT.png" alt="SCBT">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/ICBC.png" alt="ICBC">
                            </div>
                            <div>
                                <img class="h-10 rounded-full w-15" src="~/assets/ISBT.png" alt="ISBT">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4 mb-4">
                    <h6>พาร์ทเนอร์</h6>
                </div>
                <div class="flex justify-center gap-8 mt-4 mb-4">
                    <div class="grid gap-4 lg:grid-cols-5 md:grid-cols-2">
                        <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                            <figure><img src="../assets/logo-greyscale-inverse.webp" alt="maquee-cover"
                                    class=" w-[160px] h-[40px]" /></figure>
                        </button>
                        <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                            <figure><img src="../assets/116lotto.webp" alt="maquee-cover" class=" w-[160px] h-[40px]" />
                            </figure>
                        </button>
                        <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                            <figure><img src="../assets/betflik168.svg" alt="maquee-cover" class=" w-[160px] h-[40px]" />
                            </figure>
                        </button>
                        <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                            <figure><img src="../assets/hungrypussy888.webp" alt="maquee-cover"
                                    class=" w-[160px] h-[40px]" />
                            </figure>
                        </button>
                        <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                            <figure><img src="../assets/918kissme.webp" alt="maquee-cover" class=" w-[160px] h-[40px]" />
                            </figure>
                        </button>
                    </div>
                </div>
                <hr>
                <div class="flex justify-center mt-4">
                    <div class="text-center lg:w-[50%] md:w=[100%]">
                        <p> สัญลักษณ์และรูปภาพต่างๆบนเว็บไซต์ PIGSPIN.com ถือเป็นทรัพย์สินทางปัญญา ห้ามมิให้มีการคัดลอก
                            ดัดแปลง
                            ทำซ้ำ แก้ไข แผยแพร่โดยมิได้รับการยินยอมเป็นลายลักษณ์อักษรจากทาง PIGSPIN
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>