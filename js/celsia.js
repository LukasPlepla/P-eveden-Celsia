document.addEventListener('DOMContentLoaded', function() {
    // Získání reference na elementy
    const celsiusInput = document.querySelector('#celsius');
    const convertButton = document.querySelector('#convert');
    const resultDiv = document.querySelector('#result');

    // Přidání event listeneru na tlačítko
    convertButton.addEventListener('click', function() {
        // Získání hodnoty ze vstupu
        const celsius = parseFloat(celsiusInput.value);
        
        // Kontrola, zda je vstup číslo
        if ((celsius)) {
            // Výpočet: (°C × 9/5) + 32 = °F
            const fahrenheit = (celsius * 9/5) + 32;
            
            // Zobrazení výsledku
            resultDiv.textContent = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
        } else {
            resultDiv.textContent = 'Prosím zadejte platné číslo';
        }
    });
});