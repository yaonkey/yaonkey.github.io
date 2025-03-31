<script setup>
import validator from "validator"
import { Notyf } from "notyf"
import "notyf/notyf.min.css"

const seoTitle = "Связаться со мной | Дмитрий Лисовский"
const seoDescription = "Связаться с Дмитрией Лисовским - Fullstack-разработчиком"

useSeoMeta({
    title: "Связаться со мной",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDescription,
    ogDescription: seoDescription,
    twitterDescription: seoDescription,
})

let step = ref(1)
let time = ref(5)
let isLoading = ref(false)
let errorMessage = ref("")
let mail = {
    name: "",
    email: "",
    subject: "",
    textEdit: "",
}

function returnLine(text) {
    return validator.escape(text).replace(/\r\n|\r|\n/g, "<br>")
}

function validateForm(testStep) {
    switch (testStep) {
        case 1:
            if (mail.name === undefined || !validator.isLength(mail.name, { min: 4, max: 30 })) {
                errorMessage.value = "Ошибка в написании вашего имени."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 2:
            if (mail.from === undefined || !validator.isEmail(mail.from)) {
                errorMessage.value = "Ошибка в написании вашего E-mail."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 3:
            if (mail.subject === undefined || !validator.isLength(mail.subject, { min: 4, max: 50 })) {
                errorMessage.value = "Ошибка в написании темы."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 4:
            if (mail.textEdit === undefined || !validator.isLength(mail.textEdit, { min: 10, max: 1500 })) {
                errorMessage.value = "Ваше сообщение пустое или слишком короткое."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break
    }
}

async function sendEmail() {
    let timeCount = 5
    isLoading.value = true
    mail.text = returnLine(mail.textEdit)

    const { error } = await useFetch("/api/email", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: mail,
    })

    if (!error.value) {
        step.value++
        isLoading.value = false

        setInterval(() => {
            timeCount--
            time.value--

            if (timeCount === 0) {
                time.value = "… 🚀"
                setTimeout(() => {
                    navigateTo("/")
                }, 500)
            }
        }, 1000)
    } else {
        const notyf = new Notyf({
            duration: 5000,
            position: {
                x: "right",
                y: "bottom",
            },
        })

        notyf.error("Произошла ошибка, пожалуйста, попробуйте снова")
        navigateTo("/")
    }
}
</script>

<template>
    <div class="relative w-full">
        <div class="flex h-screen flex-col items-center justify-center">
            <div v-if="step <= 5">
                <form @submit.prevent="sendEmail()">
                    <p
                        v-if="step <= 4"
                        class="mb-1.5 text-center text-xs text-red-500"
                    >
                        {{ errorMessage }}&nbsp;
                    </p>

                    <input
                        v-show="step === 1"
                        v-model="mail.name"
                        :class="errorMessage === '' ? 'input-default' : 'input-error'"
                        placeholder="Имя"
                        type="text"
                        name="name"
                        @focus="errorMessage = ''"
                        @keypress.enter="validateForm(step)"
                    />

                    <input
                        v-show="step === 2"
                        v-model="mail.from"
                        :class="errorMessage === '' ? 'input-default' : 'input-error'"
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        @focus="errorMessage = ''"
                        @keypress.enter="validateForm(step)"
                    />

                    <input
                        v-show="step === 3"
                        v-model="mail.subject"
                        :class="errorMessage === '' ? 'input-default' : 'input-error'"
                        placeholder="Тема"
                        type="text"
                        name="subject"
                        @focus="errorMessage = ''"
                        @keypress.enter="validateForm(step)"
                    />

                    <textarea
                        v-show="step === 4"
                        v-model="mail.textEdit"
                        :class="errorMessage === '' ? 'input-default' : 'input-error'"
                        placeholder="Сообщение"
                        name="message"
                        rows="10"
                        @focus="errorMessage = ''"
                    />

                    <div
                        v-if="step <= 4"
                        class="mt-10 mb-20 flex w-full justify-center"
                    >
                        <a
                            class="cursor-pointer text-xl hover:text-blue-300"
                            @click="validateForm(step)"
                        >
                            Далее
                        </a>
                    </div>

                    <div v-if="step === 5">
                        <p class="text-center text-3xl lg:text-5xl">Резюме</p>
                        <div class="resume">
                            <p class="col-span-2 lg:col-span-1">{{ mail.name }}</p>
                            <p class="col-span-2 lg:col-span-1">{{ mail.from }}</p>
                            <p class="col-span-2">{{ mail.subject }}</p>
                            <div
                                class="col-span-2 max-h-96 overflow-y-scroll text-left"
                                v-html="returnLine(mail.textEdit)"
                            />
                        </div>
                        <div
                            v-if="!isLoading"
                            class="mb-20 flex w-full justify-between"
                        >
                            <a
                                class="cursor-pointer text-xl hover:text-blue-300"
                                @click="step = 1"
                            >
                                Отмена
                            </a>
                            <input
                                class="cursor-pointer text-xl hover:text-blue-300"
                                type="submit"
                                value="Отправить"
                            />
                        </div>
                        <div
                            v-else
                            class="mb-20 flex w-full justify-center"
                        >
                            <div class="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-300 border-t-transparent" />
                        </div>
                    </div>
                </form>
                <p class="w-full text-center text-xs text-gray-500 md:text-sm">
                    или через
                    <a
                        class="hypertext font-bold text-gray-500"
                        href="mailto:yaonkey@duck.com"
                    >
                        yaonkey@duck.com
                    </a>
                </p>
            </div>
            <div
                v-if="step === 6"
                class="space-y-5 px-14 text-center text-lg lg:text-4xl"
            >
                <p class="text-5xl lg:text-7xl">🎉🎉🎉</p>
                <p>
                    Письмо отправлено с
                    <span class="font-bold text-blue-300">успехом</span>
                    !
                </p>
                <p>
                    Вы будете перенаправлены через
                    <span class="font-bold text-blue-300">{{ time }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
