/// <reference types="vite/client" />

declare module '*.glb' {
    const content: any;
    export default content;
}