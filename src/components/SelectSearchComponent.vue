<template>
    <div class="form-group">
        <div class="row">
            <div class="col-8">
                <input type="text" class="form-control" placeholder="Bulbasaur..." 
                v-model="keyword"
                @keyup.enter="setKeyword(keyword)"/>
            </div>
            <div class="col-4">
                <select class="form-control" 
                    v-model="limit" 
                    @change="setLimitData(limit)">
                <option v-for="(val, key) in option"
                    :key="key"
                > {{ val }} </option>
                </select>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'select-component',
    data() {
        return {
            option : [
                50, 100, 151
            ],
            limit: 50,
            keyword: ''
        }
    },
    methods: {
        setLimitData(val) {
            this.$emit('set-limit', val)
        },
        setKeyword(val) {
            this.$emit('set-keyword', val)
        }
    }
}
</script>