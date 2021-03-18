<template>
    <div class="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200">
        <div class="w-full sm:max-w-2xl mt-6 px-4 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div class="w-full px-4 py-2">
                <slot name="title"></slot>
            </div>
            <div class="w-full">
                <slot name="content"></slot>
            </div>
        </div>

    </div>
</template>
