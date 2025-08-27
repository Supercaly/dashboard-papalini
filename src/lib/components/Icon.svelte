<script module lang="ts">
    const icons = import.meta.glob<string>("$lib/assets/icons/*.svg", {
        import: "default",
        eager: true,
        query: "?src",
    });
</script>

<script lang="ts">
    interface Props {
        name: string;
        size?: String;
    }

    const { name, size = "24px" }: Props = $props();
    const iconPath = $derived("/src/lib/assets/icons/" + name + ".svg");
</script>

<div class="icon-container" style="width: {size}; height: {size}">
    {#if icons[iconPath] !== undefined}
        {@html icons[iconPath]}
    {:else}
        <div><p>unknown</p></div>
    {/if}
</div>

<style lang="scss">
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>