import { Product } from '../data/products';

export async function fetchProductsFromSheet(sheetId: string) {
  // Use the correct Google Sheets export URL format
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const text = await response.text();
    const rows = text.split('\n').map(row => {
      // Improved CSV parsing that handles quoted strings with commas and spaces
      const matches = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          matches.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      matches.push(current); // Add the last field
      
      return matches.map(val => val.trim());
    });

    // Skip header row and map to Product objects
    const products: Product[] = rows.slice(1).map((row, index) => ({
      id: index + 1,
      name: row[0] || '',
      productLink: row[1] || '',
      imageUrl: row[2] || '',
      primarySource: row[3] || '',
      secondarySources: row[4] ? row[4].split(',').map(s => s.trim()) : []
    }));

    return products;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
} 