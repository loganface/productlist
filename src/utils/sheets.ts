import { Product } from '../data/products';

export async function fetchProductsFromSheet(sheetId: string) {
  // Use the Google Sheets API URL format that supports CORS
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'text/csv',
      },
    });
    
    if (!response.ok) {
      console.error('Failed to fetch sheet data:', response.status, response.statusText);
      throw new Error('Failed to fetch sheet data');
    }
    
    const text = await response.text();
    // Remove any Google Sheets API wrapper if present
    const csvContent = text.replace(/^\)]\}'\n/, '');
    
    const rows = csvContent.split('\n').map(row => {
      // Improved CSV parsing that handles quoted strings with commas and spaces
      const matches = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        
        if (char === '"') {
          if (inQuotes && row[i + 1] === '"') {
            // Handle escaped quotes
            current += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          matches.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      matches.push(current); // Add the last field
      
      return matches.map(val => val.trim().replace(/^"(.*)"$/, '$1')); // Remove surrounding quotes
    });

    // Skip header row and map to Product objects
    const products: Product[] = rows
      .slice(1) // Skip header row
      .filter(row => row.length >= 5 && row[0]) // Ensure row has required fields and name is not empty
      .map((row, index) => ({
        id: index + 1,
        name: row[0],
        productLink: row[1] || '#',
        imageUrl: row[2] || '/placeholder.png',
        primarySource: row[3] || '#',
        secondarySources: row[4] ? row[4].split(',').map(s => s.trim()) : []
      }));

    if (products.length === 0) {
      console.error('No valid products found in sheet');
      throw new Error('No products found');
    }

    return products;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
} 