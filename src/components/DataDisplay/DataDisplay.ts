interface DataItem {
    id: number;
    [key: string]: any;
}

interface ApiResponse {
    success: boolean;
    data: DataItem[];
    error?: string;
}

interface SummaryData {
    zawodnicy: number;
    mecze: number;
    druzyny: number;
}

class DataDisplay {
    private apiBaseUrl = 'http://localhost:3001/api';
    
    constructor() {
        this.init();
    }
    
    private async init(): Promise<void> {
        try {
            await this.loadAllData();
        } catch (error) {
            console.error('Error initializing data display:', error);
            this.showError('Failed to load data from server');
        }
    }
    
    private async loadAllData(): Promise<void> {
        await Promise.all([
            this.loadZawodnicy(),
            this.loadMecze(),
            this.loadDruzyny(),
            this.loadStatystyki(),
            this.loadSummary()
        ]);
    }
    
    private async fetchData(endpoint: string): Promise<DataItem[]> {
        const response = await fetch(`${this.apiBaseUrl}/${endpoint}`);
        const result: ApiResponse = await response.json();
        
        if (!result.success) {
            throw new Error(result.error || 'Failed to fetch data');
        }
        
        return result.data;
    }
    
    private async loadZawodnicy(): Promise<void> {
        try {
            const data = await this.fetchData('zawodnicy');
            this.displayZawodnicy(data);
        } catch (error) {
            this.showErrorInSection('zawodnicy-list', 'Failed to load players');
        }
    }
    
    private async loadMecze(): Promise<void> {
        try {
            const data = await this.fetchData('mecze');
            this.displayMecze(data);
        } catch (error) {
            this.showErrorInSection('mecze-list', 'Failed to load matches');
        }
    }
    
    private async loadDruzyny(): Promise<void> {
        try {
            const data = await this.fetchData('druzyny');
            this.displayDruzyny(data);
        } catch (error) {
            this.showErrorInSection('druzyny-list', 'Failed to load teams');
        }
    }
    
    private async loadStatystyki(): Promise<void> {
        try {
            const data = await this.fetchData('statystyki');
            this.displayStatystyki(data);
        } catch (error) {
            this.showErrorInSection('statystyki-list', 'Failed to load statistics');
        }
    }
    
    private async loadSummary(): Promise<void> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/summary`);
            const result = await response.json();
            
            if (result.success) {
                this.displaySummary(result.data);
            } else {
                throw new Error(result.error || 'Failed to load summary');
            }
        } catch (error) {
            this.showErrorInSection('summary', 'Failed to load summary');
        }
    }
    
    private displayZawodnicy(data: DataItem[]): void {
        const container = document.getElementById('zawodnicy-list');
        if (!container) return;
        
        if (data.length === 0) {
            container.innerHTML = '<div class="no-data">No players found</div>';
            return;
        }
        
        container.innerHTML = data.map(player => `
            <div class="data-item">
                <div class="item-title">${player.imie || player.nazwa || 'Unknown'}</div>
                <div class="item-details">
                    ${player.pozycja ? `Position: ${player.pozycja}` : ''}
                    ${player.wiek ? `Age: ${player.wiek}` : ''}
                </div>
            </div>
        `).join('');
    }
    
    private displayMecze(data: DataItem[]): void {
        const container = document.getElementById('mecze-list');
        if (!container) return;
        
        if (data.length === 0) {
            container.innerHTML = '<div class="no-data">No matches found</div>';
            return;
        }
        
        container.innerHTML = data.map(match => `
            <div class="data-item">
                <div class="item-title">${match.przeciwnik || 'Unknown Team'}</div>
                <div class="item-details">
                    ${match.data_meczu ? `Date: ${new Date(match.data_meczu).toLocaleDateString()}` : ''}
                    ${match.wynik ? `Result: ${match.wynik}` : ''}
                </div>
            </div>
        `).join('');
    }
    
    private displayDruzyny(data: DataItem[]): void {
        const container = document.getElementById('druzyny-list');
        if (!container) return;
        
        if (data.length === 0) {
            container.innerHTML = '<div class="no-data">No teams found</div>';
            return;
        }
        
        container.innerHTML = data.map(team => `
            <div class="data-item">
                <div class="item-title">${team.nazwa || 'Unknown Team'}</div>
                <div class="item-details">
                    ${team.kategoria ? `Category: ${team.kategoria}` : ''}
                    ${team.sezon ? `Season: ${team.sezon}` : ''}
                </div>
            </div>
        `).join('');
    }
    
    private displayStatystyki(data: DataItem[]): void {
        const container = document.getElementById('statystyki-list');
        if (!container) return;
        
        if (data.length === 0) {
            container.innerHTML = '<div class="no-data">No statistics found</div>';
            return;
        }
        
        container.innerHTML = data.map(stat => `
            <div class="data-item">
                <div class="item-title">${stat.sezon || 'Unknown Season'}</div>
                <div class="item-details">
                    ${stat.mecze ? `Matches: ${stat.mecze}` : ''}
                    ${stat.punkty ? `Points: ${stat.punkty}` : ''}
                </div>
            </div>
        `).join('');
    }
    
    private displaySummary(data: SummaryData): void {
        const container = document.getElementById('summary');
        if (!container) return;
        
        container.innerHTML = `
            <div class="summary-item">
                <div class="summary-number">${data.zawodnicy}</div>
                <div class="summary-label">Players</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${data.mecze}</div>
                <div class="summary-label">Matches</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${data.druzyny}</div>
                <div class="summary-label">Teams</div>
            </div>
        `;
    }
    
    private showErrorInSection(elementId: string, message: string): void {
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = `<div class="error">${message}</div>`;
        }
    }
    
    private showError(message: string): void {
        console.error(message);
        // You can implement a global error display here
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DataDisplay();
});

export default DataDisplay; 