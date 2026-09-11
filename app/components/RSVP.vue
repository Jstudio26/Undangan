<script setup lang="ts">
import { reactive, ref } from 'vue'
import { invitation } from '~/config/invitation'

type Attendance = '' | 'yes' | 'no'

const form = reactive({
  name: '',
  guests: 1,
  attendance: '' as Attendance,
})

const errors = reactive<{ name: string; guests: string; attendance: string }>({
  name: '',
  guests: '',
  attendance: '',
})

const sent = ref(false)

function validate(): boolean {
  errors.name = form.name.trim().length < 2 ? 'Please enter your name.' : ''
  errors.guests =
    !Number.isFinite(form.guests) || form.guests < 1 || form.guests > 20
      ? 'Enter a number between 1 and 20.'
      : ''
  errors.attendance = !form.attendance ? 'Please choose an option.' : ''
  return !errors.name && !errors.guests && !errors.attendance
}

function submit() {
  sent.value = false
  if (!validate()) return

  const guest = form.name.trim()
  const message =
    form.attendance === 'yes'
      ? `Hi ${invitation.name},\n\nI'm ${guest} and I'd like to confirm that I will attend ${invitation.name}'s Sweet Seventeen celebration with ${form.guests} guest(s).`
      : `Hi ${invitation.name},\n\nI'm ${guest} and unfortunately I won't be able to attend your Sweet Seventeen celebration. Wishing you an unforgettable night.`

  const url = `https://wa.me/${invitation.whatsappNumber}?text=${encodeURIComponent(message)}`
  sent.value = true
  window.open(url, '_blank', 'noopener')
}
</script>

<template>
  <section id="rsvp" class="section-pad bg-obsidian">
    <div class="mx-auto max-w-md">
      <h2 v-reveal class="font-display text-4xl tracking-wide text-offwhite sm:text-5xl">
        Will You Join Us?
      </h2>
      <p v-reveal class="mt-4 font-serif text-lg italic text-silver/80">
        Your presence will make the night complete.
      </p>

      <form v-reveal class="mt-10 space-y-6" novalidate @submit.prevent="submit">
        <div>
          <label for="rsvp-name" class="eyebrow">Your Name</label>
          <input
            id="rsvp-name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            class="mt-2 w-full border-b border-white/25 bg-transparent py-3 font-sans text-offwhite outline-none transition focus:border-gold"
          />
          <p v-if="errors.name" class="mt-1 font-sans text-xs text-gold">{{ errors.name }}</p>
        </div>

        <div>
          <label for="rsvp-guests" class="eyebrow">Number of Guests</label>
          <input
            id="rsvp-guests"
            v-model.number="form.guests"
            type="number"
            min="1"
            max="20"
            inputmode="numeric"
            class="mt-2 w-full border-b border-white/25 bg-transparent py-3 font-sans text-offwhite outline-none transition focus:border-gold"
          />
          <p v-if="errors.guests" class="mt-1 font-sans text-xs text-gold">{{ errors.guests }}</p>
        </div>

        <fieldset>
          <legend class="eyebrow">Attendance</legend>
          <div class="mt-3 grid grid-cols-2 gap-3">
            <label
              class="cursor-pointer border px-4 py-3 text-center font-sans text-xs tracking-[0.2em] transition"
              :class="
                form.attendance === 'yes'
                  ? 'border-gold bg-gold text-obsidian'
                  : 'border-white/25 text-silver hover:border-white/50'
              "
            >
              <input v-model="form.attendance" type="radio" name="attendance" value="yes" class="sr-only" />
              I'M IN
            </label>
            <label
              class="cursor-pointer border px-4 py-3 text-center font-sans text-xs tracking-[0.2em] transition"
              :class="
                form.attendance === 'no'
                  ? 'border-gold bg-gold text-obsidian'
                  : 'border-white/25 text-silver hover:border-white/50'
              "
            >
              <input v-model="form.attendance" type="radio" name="attendance" value="no" class="sr-only" />
              CAN'T MAKE IT
            </label>
          </div>
          <p v-if="errors.attendance" class="mt-1 font-sans text-xs text-gold">{{ errors.attendance }}</p>
        </fieldset>

        <button
          type="submit"
          class="w-full border border-gold bg-gold px-6 py-4 font-sans text-xs tracking-[0.3em] text-obsidian transition hover:bg-transparent hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          SEND VIA WHATSAPP →
        </button>

        <p v-if="sent" class="text-center font-sans text-xs text-silver/70" aria-live="polite">
          WhatsApp is opening in a new tab. If nothing happened, allow pop-ups and try again.
        </p>
      </form>
    </div>
  </section>
</template>
