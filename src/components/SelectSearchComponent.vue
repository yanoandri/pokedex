<template>
    <div class="form-group">
        <div class="row">
            <div class="col-8">
                <input type="text" class="form-control" placeholder="Bulbasaur..."/>
            </div>
            <div class="col-4">
                <select class="form-control">
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
                50, 100, 150
            ],
            limit: 50,
            keyword: ''
        }
    }
}
</script>