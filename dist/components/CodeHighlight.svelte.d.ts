export default CodeHighlight;
type CodeHighlight = SvelteComponent<{
    title?: string | undefined;
    language?: string | undefined;
    code?: string | undefined;
    showCopy?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string | undefined;
};
declare const CodeHighlight: $$__sveltets_2_IsomorphicComponent<{
    title?: string | undefined;
    language?: string | undefined;
    code?: string | undefined;
    showCopy?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
