export class Component2 {
    async render(): Promise<string> {
        const response = await fetch('http://localhost:3001/api/zawodnicy');
        const zawodnicy = await response.json();
        return `
            <div class="component2" style="max-width:700px;margin:40px auto 0 auto;padding:24px 32px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);text-align:center;">
                <h1 style="font-size:2.2rem;font-weight:700;margin-bottom:24px;">Zawodnicy</h1>
                <table style="width:100%;border-collapse:collapse;">
                    <thead>
                        <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Wiek</th>
                            <th>Pozycja</th>
                            <th>Klub</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${zawodnicy.map((z: any) => `
                            <tr>
                                <td>${z.imie}</td>
                                <td>${z.nazwisko}</td>
                                <td>${z.wiek ?? ''}</td>
                                <td>${z.pozycja ?? ''}</td>
                                <td>${z.klub ?? ''}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}