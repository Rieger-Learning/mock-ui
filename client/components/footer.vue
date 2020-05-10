<template>
    <b-container class="text-center text-muted mb-3">
        <hr>
        <div>
            Found an issue?
            <a href="https://github.com/Rieger-Learning/mock-ui/issues/new" target="_blank">
                <fa icon="bug"></fa>
                Report a bug</a>.
        </div>
        <div class="mt-2">
            <small>v.{{ version }}</small>
        </div>
    </b-container>
</template>

<style lang="scss">
    #site-footer {
    }
</style>

<script>
    import npmPackage from '../../package.json';

    export default {
        name: 'SiteFooter',
        data() {
            return {
                version: npmPackage.version
            }
        }
    }
</script>