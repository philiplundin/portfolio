declare module "*.svg" {
    const content: any;
    export default content;
  }

  declare module "*.jpg" {
    const path: string;
    export default path;
}

  declare module "*webp" {
    const path: string;
    export default path;
  }