export class Component1 {
    async render(): Promise<string> {
        const response = await fetch('components/Component1/Component1.html');
        return await response.text();
    }
}