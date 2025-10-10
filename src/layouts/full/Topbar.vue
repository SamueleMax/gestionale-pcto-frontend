<script setup lang="ts">
import { Icon } from '@iconify/vue';

import icon1 from '@/assets/images/technology/vue-cat-icon.svg';
import icon2 from '@/assets/images/technology/angular-cat-icon.svg';
import icon3 from '@/assets/images/technology/next-cat-icon.svg';
import icon4 from '@/assets/images/technology/tailwind-icon.svg';
import icon5 from '@/assets/images/technology/nuxt-cat-icon.svg';
import icon6 from '@/assets/images/technology/bt-cat-icon.svg';

const items = [
    { text: 'Templates', icon: 'window-frame-linear', url: 'https://www.wrappixel.com/templates/category/vuejs-templates/' },
    { text: 'Help', icon: 'question-circle-linear', url: 'https://support.wrappixel.com/' },
    { text: 'Hire Us', icon: 'case-round-linear', url: 'https://www.wrappixel.com/hire-us/' }
];

const preview_link = [
    { title: 'VueJs Version', img: icon1, url: 'https://www.wrappixel.com/templates/spike-vuejs-admin-dashboard/?ref=376#demos' },
    { title: 'Angular Preview', img: icon2, url: 'https://www.wrappixel.com/templates/spike-angular-admin-template/?ref=376#demos' },
    { title: 'Nextjs Preview', img: icon3, url: 'https://www.wrappixel.com/templates/spike-nextjs-admin-template/?ref=376#demos' },
    {
        title: 'Tailwind Preview',
        img: icon4,
        url: 'https://www.wrappixel.com/templates/spike-tailwind-admin-template/?ref=376#demos'
    },
    {
        title: 'Nuxtjs Preview',
        img: icon5,
        url: 'https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=376#demos'
    },
    { title: 'Bootstrap Preview', img: icon6, url: 'https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=376#demos' }
];
</script>

