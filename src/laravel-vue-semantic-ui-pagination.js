module.exports = {

    template: '<div class="ui pagination menu" :class="size" v-if="data.total > data.per_page">\
        <!-- First Item -->\
        <a class="item" @click.prevent="selectPage(--data.current_page)" v-if="data.prev_page_url">\
            <i class="left icon" :class="icon"></i>\
        </a>\
        <a class="disabled item" v-if="showDisabled && !data.prev_page_url">\
            <i class="left icon" :class="icon"></i>\
        </a>\
        <!-- Pagination Menu Items -->\
        <a class="item" v-for="n in getPages()" :class="{ \'active\': n == data.current_page }" @click.prevent="selectPage(n)">\
            {{ n }}\
        </a>\
        <!-- Last Item -->\
        <a class="item" @click.prevent="selectPage(++data.current_page)" v-if="data.next_page_url">\
            <i class="right icon" :class="icon"></i>\
        </a>\
        <a class="disabled item" v-if="showDisabled && !data.next_page_url">\
            <i class="right icon" :class="icon"></i>\
        </a>\
    </div>',


    props: {
        showDisabled: {
            type: Boolean,
            default: false,
            required: false
        },
        icon: {
            type: String,
            default: 'angle double',
            required: false
        },
        size: {
            type: String,
            default: 'small',
            required: false
        },
        data: {
            type: Object,
            default: function() {
                return {
                    current_page: 1,
                    data: [],
                    from: 1,
                    last_page: 1,
                    next_page_url: null,
                    per_page: 10,
                    prev_page_url: null,
                    to: 1,
                    total: 0,
                }
            },
            required: true
        },
        limit: {
            type: Number,
            default: 0,
            required: false
        }
    },

    methods: {
        selectPage: function(page) {
            this.$emit('change-page', page);
        },
        getPages: function() {
            if (this.limit === -1) {
                return 0;
            }

            if (this.limit === 0) {
                return this.data.last_page;
            }

            var start = this.data.current_page - this.limit,
                end   = this.data.current_page + this.limit + 1,
                pages = [],
                index;

            start = start < 1 ? 1 : start;
            end   = end >= this.data.last_page ? this.data.last_page + 1 : end;

            for (index = start; index < end; index++) {
                pages.push(index);
            }

            return pages;
        }
    }
};