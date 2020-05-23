<template>
    <div class="col-sm-4 col-md-4 col-lg-4">
        <div class="card">
            <div class="card-body">
                <label class="order">{{ data.order }}</label>
                <h5 class="text-capitalize">{{ data.name }}</h5>
                <img :src="image" alt="gambar">
                <p>{{ types }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pokemon-card-component',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        image() {
            if (this.data) {
                return this.data.sprites.front_default
            }

            return ''
        },
        types() {
            if (this.data) {
                return this.data.types.map((v) => {
                    return v.type.name
                }).join(", ")
            }
            return 'unknown'
        }
    }
}
</script>

<style scoped>
.order {
    display: inline-block;
}
</style>