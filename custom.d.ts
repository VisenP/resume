declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const source: string;
    export default source;
}

declare module "*.webp" {
    const reference: string;
    export default reference;
}
