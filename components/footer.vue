<template>
    <footer class="footer has-background-gray">
        <div class="container">
            <div class="content has-text-centered">
                <p>&copy; {{ year }} Hajime Sano.</p>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data() {
            return {year: new Date().getFullYear()}
        }
    }
</script>