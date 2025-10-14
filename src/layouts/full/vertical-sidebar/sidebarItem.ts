import {
    LayoutDashboardIcon,
    BorderAllIcon,
    AlertCircleIcon,
    CircleDotIcon,
    BoxMultiple1Icon,
    LoginIcon,
    MoodHappyIcon,
    ApertureIcon,
    UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    external?: boolean;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'graph-new-linear',
        to: '/'
    },
    { header: 'School Pages' },
    {
        title: 'Professore',
        icon: 'square-academic-cap-linear',
        to: '',
        children: [
            {
                title: 'Tutti i Professori',
                to: 'http://localhost:5173/all-teachers',
                
                external: true
            },
            {
                title: 'Dettagli Professori',
                to: 'http://localhost:5173/teachers-details',
                
                external: true
            }
        ]
    },
    {
        title: 'Esami',
        icon: 'notebook-minimalistic-outline',
        to: '',
        children: [
            {
                title: 'Schede Esame',
                to: 'http://localhost:5173/exam-schedule',
                
                external: true
            },
            {
                title: 'Risultati Esame',
                to: 'http://localhost:5173/exam-results',
                external: true
            },
        ]
    },
    {
        title: 'Studenti',
        icon: 'case-broken',
        to: '',
        children: [
            {
                title: 'Tutti gli Studenti',
                to: 'http://localhost:5173/all-students',
                external: true
            },
            {
                title: 'Students Details',
                to: 'http://localhost:5173/students-details',
                
                external: true
            }
        ]
    },
    {
        title: 'Classi',
        icon: 'smart-home-broken',
        to: 'http://localhost:5173/classes',
        
        external: true
    },
    {
        title: 'Aziende',
        icon: 'diploma-linear',
        to: 'http://localhost:5173/agency',
        
        external: true
    },
    /*{
        title: 'Aziende',
        icon: 'home-angle-linear',
        to: '/frontpages',
        children: [
            {
                title: 'Homepage',
                to: 'https://spike-vue-main.netlify.app/front-page/homepage',
                
                external: true
            },
            {
                title: 'About Us',
                to: 'https://spike-vue-main.netlify.app/front-page/about-us',
                
                external: true
            },
            {
                title: 'Blog',
                to: 'https://spike-vue-main.netlify.app/front-page/blog/posts',
                
                external: true
            },
            {
                title: 'Blog Details',
                to: 'https://spike-vue-main.netlify.app/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                
                external: true
            },
            {
                title: 'Contact Us',
                to: 'https://spike-vue-main.netlify.app/front-page/contact-us',
                
                external: true
            },
            {
                title: 'Portfolio',
                to: 'https://spike-vue-main.netlify.app/front-page/portfolio',
                
                external: true
            },
            {
                title: 'Pricing',
                to: 'https://spike-vue-main.netlify.app/front-page/pricing',
                
                external: true
            }
        ]
    },
    { header: 'Ui' },
    {
        title: 'Alert',
        icon: 'volume-small-broken',
        to: '/ui/alerts'
    },
    {
        title: 'Button',
        icon: 'tag-horizontal-outline',
        to: '/ui/buttons'
    },
    {
        title: 'Cards',
        icon: 'cardholder-linear',
        to: '/ui/cards'
    },
    {
        title: 'Tables',
        icon: 'suspension-outline',
        to: '/ui/tables'
    },
    {
        title: 'Ui Elements',
        icon: 'code-scan-line-duotone',
        to: '/components/',
        children: [
            {
                title: 'Alert',
                to: 'https://spike-vue-main.netlify.app/ui-components/alert',
                
                external: true
            },
            {
                title: 'Accordion',
                to: 'https://spike-vue-main.netlify.app/ui-components/accordion',
                
                external: true
            },
            {
                title: 'Avatar',
                to: 'https://spike-vue-main.netlify.app/ui-components/avatar',
                
                external: true
            },
            {
                title: 'Chip',
                to: 'https://spike-vue-main.netlify.app/ui-components/chip',
                
                external: true
            },
            {
                title: 'Dialog',
                to: 'https://spike-vue-main.netlify.app/ui-components/dialogs',
                
                external: true
            },
            {
                title: 'List',
                to: 'https://spike-vue-main.netlify.app/ui-components/list',
                
                external: true
            },
            {
                title: 'Menus',
                to: 'https://spike-vue-main.netlify.app/ui-components/menus',
                
                external: true
            },
            {
                title: 'Rating',
                to: 'https://spike-vue-main.netlify.app/ui-components/rating',
                
                external: true
            },
            {
                title: 'Tabs',
                to: 'https://spike-vue-main.netlify.app/ui-components/tabs',
                
                external: true
            },
            {
                title: 'Tooltip',
                to: 'https://spike-vue-main.netlify.app/ui-components/tooltip',
                
                external: true
            },
            {
                title: 'Typography',
                to: 'https://spike-vue-main.netlify.app/ui-components/typography',
                
                external: true
            }
        ]
    },

    { header: 'Apps' },
    {
        title: 'Contact',
        icon: 'phone-line-duotone',
        to: 'https://spike-vue-main.netlify.app/apps/contacts',
        
        external: true
    },

    {
        title: 'Blog',
        icon: 'align-vertical-spacing-line-duotone',
        to: '/',
        children: [
            {
                title: 'Posts',
                to: 'https://spike-vue-main.netlify.app/apps/blog/posts',
                
                external: true
            },
            {
                title: 'Detail',
                to: 'https://spike-vue-main.netlify.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                
                external: true
            }
        ]
    },
    {
        title: 'E-Commerce',
        icon: 'smart-speaker-minimalistic-line-duotone',
        to: '/ecommerce',
        children: [
            {
                title: 'Shop One',
                to: 'https://spike-vue-main.netlify.app/ecommerce/products-one',
                
                external: true
            },
            {
                title: 'Shop Two',
                to: 'https://spike-vue-main.netlify.app/ecommerce/products-two',
                
                external: true
            },
            {
                title: 'Details One',
                to: 'https://spike-vue-main.netlify.app/ecommerce/product/detail/one/1',
                
                external: true
            },
            {
                title: 'Details Two',
                to: 'https://spike-vue-main.netlify.app/ecommerce/product/detail/two/1',
                
                external: true
            },
            {
                title: 'List',
                to: 'https://spike-vue-main.netlify.app/ecommerce/productlist',
                
                external: true
            },
            {
                title: 'Checkout',
                to: 'https://spike-vue-main.netlify.app/ecommerce/checkout',
                
                external: true
            },
            {
                title: 'Add Product',
                to: 'https://spike-vue-main.netlify.app/ecommerce/add-product',
                
                external: true
            },
            {
                title: 'Edit Product',
                to: 'https://spike-vue-main.netlify.app/ecommerce/edit-product',
                
                external: true
            }
        ]
    },
    {
        title: 'Chats',
        icon: 'chat-round-unread-line-duotone',
        to: 'https://spike-vue-main.netlify.app/apps/chats',
        
        external: true
    },
    {
        title: 'User Profile',
        icon: 'user-rounded-line-duotone',
        to: '/',
        children: [
            {
                title: 'Profile One',
                to: 'https://spike-vue-main.netlify.app/apps/user/profileone',
                
                external: true
            },
            {
                title: 'Profile Two',
                to: 'https://spike-vue-main.netlify.app/apps/user/profiletwo',
                
                external: true
            }
        ]
    },
    {
        title: 'Invoice',
        icon: 'bill-check-outline',
        to: '/',
        children: [
            {
                title: 'List',
                to: 'https://spike-vue-main.netlify.app/apps/invoice',
                
                external: true
            },
            {
                title: 'Details',
                to: 'https://spike-vue-main.netlify.app/apps/invoice/details/102',
                
                external: true
            },
            {
                title: 'Create',
                to: 'https://spike-vue-main.netlify.app/apps/invoice/create',
                
                external: true
            },
            {
                title: 'Edit',
                to: 'https://spike-vue-main.netlify.app/apps/invoice/edit/102',
                
                external: true
            }
        ]
    },
    {
        title: 'Notes',
        icon: 'notification-unread-line-duotone',
        to: 'https://spike-vue-main.netlify.app/apps/notes',
        
        external: true
    },
    {
        title: 'Calendar',
        icon: 'calendar-line-duotone',
        to: 'https://spike-vue-main.netlify.app/apps/calendar',
        
        external: true
    },
    {
        title: 'Email',
        icon: 'letter-linear',
        to: 'https://spike-vue-main.netlify.app/apps/email',
        
        external: true
    },
    {
        title: 'Kanban',
        icon: 'widget-4-linear',
        to: 'https://spike-vue-main.netlify.app/apps/kanban',
        
        external: true
    },
    {
        title: 'Tickets',
        icon: 'ticker-star-outline',
        to: 'https://spike-vue-main.netlify.app/apps/tickets',
        
        external: true
    },

    { header: 'Pages' },
    {
        title: 'Pricing',
        icon: 'tag-price-line-duotone',
        to: 'https://spike-vue-main.netlify.app/pages/pricing',
        
        external: true
    },
    {
        title: 'FAQ',
        icon: 'question-circle-line-duotone',
        to: 'https://spike-vue-main.netlify.app/pages/faq',
        
        external: true
    },
    {
        title: 'Account Setting',
        icon: 'settings-minimalistic-line-duotone',
        to: 'https://spike-vue-main.netlify.app/pages/account-settings',
        
        external: true
    },
    {
        title: 'Landing Page',
        icon: 'layers-minimalistic-line-duotone',
        to: 'https://spike-vue-main.netlify.app',
        
        external: true
    },
    {
        title: 'Gallery Lightbox',
        icon: 'gallery-minimalistic-outline',
        to: 'https://spike-vue-main.netlify.app/pages/gallery-lightbox',
        
        external: true
    },
    {
        title: 'Search Results',
        icon: 'calendar-search-line-duotone',
        to: 'https://spike-vue-main.netlify.app/pages/search-results',
        
        external: true
    },
    {
        title: 'Social Contacts',
        icon: 'socket-outline',
        to: 'https://spike-vue-main.netlify.app/pages/social-media-contacts',
        
        external: true
    },
    {
        title: 'Treeview',
        icon: 'transmission-line-duotone',
        to: 'https://spike-vue-main.netlify.app/pages/treeview',
        
        external: true
    },
    {
        title: 'Widget',
        icon: 'widget-add-line-duotone',
        to: '/widget-card',
        children: [
            {
                title: 'Cards',
                to: 'https://spike-vue-main.netlify.app/widgets/cards',
                
                external: true
            },
            {
                title: 'Banners',
                to: 'https://spike-vue-main.netlify.app/widgets/banners',
                
                external: true
            },
            {
                title: 'Charts',
                to: 'https://spike-vue-main.netlify.app/widgets/charts',
                
                external: true
            }
        ]
    },

    { header: 'Forms' },
    {
        title: 'Form Elements',
        icon: 'widget-3-line-duotone',
        to: '/forms',
        children: [
            {
                title: 'Autocomplete',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/autocomplete',
                
                external: true
            },
            {
                title: 'Combobox',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/combobox',
                
                external: true
            },
            {
                title: 'Button',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/button',
                
                external: true
            },
            {
                title: 'Checkbox',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/checkbox',
                
                external: true
            },
            {
                title: 'Custom Inputs',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/custominputs',
                
                external: true
            },
            {
                title: 'File Inputs',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/fileinputs',
                
                external: true
            },
            {
                title: 'Radio',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/radio',
                
                external: true
            },
            {
                title: 'Date Time',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/date-time',
                
                external: true
            },
            {
                title: 'Select',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/select',
                
                external: true
            },
            {
                title: 'Slider',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/slider',
                
                external: true
            },
            {
                title: 'Switch',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/switch',
                
                external: true
            },
            {
                title: 'Time Picker',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/time-picker',
                
                external: true
            },
            {
                title: 'Stepper',
                to: 'https://spike-vue-main.netlify.app/forms/form-elements/stepper',
                
                external: true
            }
        ]
    },

    {
        title: 'Form Input',
        icon: 'book-minimalistic-outline',
        BgColor: 'success',
        to: '/forms/',
        children: [
            {
                title: 'Form Layout',
                to: 'https://spike-vue-main.netlify.app/forms/form-layouts',
                
                external: true
            },
            {
                title: 'Form Horizontal',
                to: 'https://spike-vue-main.netlify.app/forms/form-horizontal',
                
                external: true
            },
            {
                title: 'Form Vertical',
                to: 'https://spike-vue-main.netlify.app/forms/form-vertical',
                
                external: true
            },
            {
                title: 'Form Custom',
                to: 'https://spike-vue-main.netlify.app/forms/form-custom',
                
                external: true
            },
            {
                title: 'Form Validation',
                to: 'https://spike-vue-main.netlify.app/forms/form-validation',
                
                external: true
            }
        ]
    },
    {
        title: 'Editor',
        icon: 'gallery-edit-line-duotone',
        to: 'https://spike-vue-main.netlify.app/forms/editor',
        
        external: true
    },

    { header: 'Tables' },
    {
        title: 'Basic Table',
        icon: 'tablet-line-duotone',
        to: 'https://spike-vue-main.netlify.app/tables/basic',
        
        external: true
    },
    {
        title: 'Dark Table',
        icon: 'bedside-table-2-linear',
        to: 'https://spike-vue-main.netlify.app/tables/dark',
        
        external: true
    },
    {
        title: 'Density Table',
        icon: 'password-minimalistic-input-linear',
        to: 'https://spike-vue-main.netlify.app/tables/density',
        
        external: true
    },
    {
        title: 'Fixed Header Table',
        icon: 'align-left-line-duotone',
        to: 'https://spike-vue-main.netlify.app/tables/fixed-header',
        
        external: true
    },
    {
        title: 'Height Table',
        icon: 'bookmark-square-minimalistic-outline',
        to: 'https://spike-vue-main.netlify.app/tables/height',
        
        external: true
    },
    {
        title: 'Editable Table',
        icon: 'pen-new-square-broken',
        to: 'https://spike-vue-main.netlify.app/tables/editable',
        
        external: true
    },

    { header: 'Data Tables' },
    {
        title: 'Basic Table',
        icon: 'database-outline',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/basic',
        
        external: true
    },
    {
        title: 'Header Table',
        icon: 'clapperboard-text-broken',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/header',
        
        external: true
    },
    {
        title: 'Selection Table',
        icon: 'documents-minimalistic-linear',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/selection',
        
        external: true
    },
    {
        title: 'Sorting Table',
        icon: 'sort-from-bottom-to-top-linear',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/sorting',
        
        external: true
    },
    {
        title: 'Pagination Table',
        icon: 'programming-linear',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/pagination',
        
        external: true
    },
    {
        title: 'Filtering Table',
        icon: 'filter-outline',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/filtering',
        
        external: true
    },
    {
        title: 'Grouping Table',
        icon: 'users-group-rounded-line-duotone',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/grouping',
        
        external: true
    },
    {
        title: 'Table Slots',
        icon: 'server-line-duotone',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/slots',
        
        external: true
    },
    {
        title: 'CRUD Table',
        icon: 'medal-star-square-outline',
        to: 'https://spike-vue-main.netlify.app/tables/datatables/crudtable',
        
        external: true
    },

    { header: 'Charts' },
    {
        title: 'Apex Charts',
        icon: 'pie-chart-2-linear',
        to: '/charts/',
        children: [
            {
                title: 'Line',
                to: 'https://spike-vue-main.netlify.app/charts/line-chart',
                
                external: true
            },
            {
                title: 'Gredient',
                to: 'https://spike-vue-main.netlify.app/charts/gredient-chart',
                
                external: true
            },
            {
                title: 'Area',
                to: 'https://spike-vue-main.netlify.app/charts/area-chart',
                
                external: true
            },
            {
                title: 'Candlestick',
                to: 'https://spike-vue-main.netlify.app/charts/candlestick-chart',
                
                external: true
            },
            {
                title: 'Column',
                to: 'https://spike-vue-main.netlify.app/charts/column-chart',
                
                external: true
            },
            {
                title: 'Doughnut & Pie',
                to: 'https://spike-vue-main.netlify.app/charts/doughnut-pie-chart',
                
                external: true
            },
            {
                title: 'Radialbar & Radar',
                to: 'https://spike-vue-main.netlify.app/charts/radialbar-chart',
                
                external: true
            }
        ]
    },

    { header: 'Auth' },
    {
        title: 'Login',
        icon: 'login-2-line-duotone',
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: 'user-plus-line-duotone',
        to: '/auth/register'
    },
    {
        title: 'Auth Pages',
        icon: 'shield-user-outline',
        to: '/auth',
        children: [
            {
                title: 'Side Login',
                to: 'https://spike-vue-main.netlify.app/auth/login',
                
                external: true
            },
            {
                title: 'Boxed Login',
                to: 'https://spike-vue-main.netlify.app/auth/login2',
                
                external: true
            },
            {
                title: 'Side Register',
                to: 'https://spike-vue-main.netlify.app/auth/register',
                
                external: true
            },
            {
                title: 'Boxed Register',
                to: 'https://spike-vue-main.netlify.app/auth/register2',
                
                external: true
            },
            {
                title: 'Side Forgot Password',
                to: 'https://spike-vue-main.netlify.app/auth/forgot-password',
                
                external: true
            },
            {
                title: 'Boxed Forgot Password',
                to: 'https://spike-vue-main.netlify.app/auth/forgot-password2',
                
                external: true
            },
            {
                title: 'Side Two Steps',
                to: 'https://spike-vue-main.netlify.app/auth/two-step',
                
                external: true
            },
            {
                title: 'Boxed Two Steps',
                to: 'https://spike-vue-main.netlify.app/auth/two-step2',
                
                external: true
            }
        ]
    },
    {
        title: 'Error',
        icon: 'bug-line-duotone',
        to: 'https://spike-vue-main.netlify.app/auth/404',
        
        external: true
    },
    {
        title: 'Maintenance',
        icon: 'settings-line-duotone',
        to: 'https://spike-vue-main.netlify.app/auth/maintenance',
        
        external: true
    },
    { header: 'Extra' },
    {
        title: 'Tabler Icons',
        icon: 'sticker-smile-circle-2-line-duotone',
        to: '/icons'
    },
    {
        title: 'Solar Icons',
        icon: "ghost-smile-outline",
        to: 'https://spike-vue-main.netlify.app/icons/solar',
        
        external: true
    },
    {
        title: 'Sample Page',
        icon: "book-bookmark-linear",
        to: '/sample-page'
    }*/
];

export default sidebarItem;
