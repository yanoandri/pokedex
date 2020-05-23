<template>
    <div class="col-sm-4 col-md-4 col-lg-4 mb-3">
        <div class="card">
            <label class="order">{{ data.id }}</label>
            <div class="card-body">
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
    margin-left: 5px;
    max-width: 40px;
    height: 20px;
    background: blue;
    color: white;
    font-weight: bold;
    border-radius: 5px;
}
</style>