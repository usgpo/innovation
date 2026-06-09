/**
 * Table Sorting Script for DCAT Data Table
 * No external dependencies - uses vanilla JavaScript
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTableSort);
  } else {
    initTableSort();
  }

  function initTableSort() {
    // Find the DCAT data table
    const table = document.querySelector('table.dcat-data');
    if (!table) return; // Exit if table doesn't exist on this page

    const tbody = table.querySelector('tbody');
    const headers = table.querySelectorAll('thead th button');
    const mobileSelect = document.getElementById('mobile-sort-select');

    // Track current sort state
    let currentSortColumn = null;
    let isAscending = true;

    // Attach click handlers to sortable column buttons (desktop)
    headers.forEach((button, columnIndex) => {
      // Only Title (index 0) and Publisher (index 2) columns have buttons
      button.addEventListener('click', () => {
        sortTable(columnIndex, button);
      });

      // Make buttons keyboard accessible
      button.setAttribute('aria-label', `Sort by ${button.textContent.trim()}`);
    });

    // Attach change handler to mobile sort dropdown
    if (mobileSelect) {
      mobileSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        if (!value) {
          // Reset to default order (reload page or clear sorting)
          location.reload();
          return;
        }
        
        // Parse value: "0-asc" means column 0, ascending
        const [columnIndex, direction] = value.split('-');
        const column = parseInt(columnIndex, 10);
        isAscending = direction === 'asc';
        currentSortColumn = column;
        
        // Find the corresponding button for visual updates
        const button = headers[column];
        sortTable(column, button, true); // true = from mobile dropdown
      });
    }

    /**
     * Sort the table by the specified column
     * @param {number} columnIndex - The column to sort by (0 = Title, 2 = Publisher)
     * @param {HTMLElement} button - The button element that was clicked
     * @param {boolean} fromMobile - Whether this was triggered from mobile dropdown
     */
    function sortTable(columnIndex, button, fromMobile = false) {
      // Toggle sort direction if clicking the same column (desktop only)
      if (!fromMobile) {
        if (currentSortColumn === columnIndex) {
          isAscending = !isAscending;
        } else {
          isAscending = true;
          currentSortColumn = columnIndex;
        }
      }
      // If fromMobile, isAscending is already set by the dropdown handler

      // Get all rows as an array
      const rows = Array.from(tbody.querySelectorAll('tr'));

      // Sort rows based on the column's text content
      rows.sort((rowA, rowB) => {
        // Get the cell at the specified column index
        const cellA = rowA.children[columnIndex];
        const cellB = rowB.children[columnIndex];

        // Extract text content, handling links in Publisher column
        const textA = cellA.textContent.trim().toLowerCase();
        const textB = cellB.textContent.trim().toLowerCase();

        // Compare and apply sort direction
        if (textA < textB) return isAscending ? -1 : 1;
        if (textA > textB) return isAscending ? 1 : -1;
        return 0;
      });

      // Remove all rows from tbody
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      // Append sorted rows back to tbody
      rows.forEach(row => tbody.appendChild(row));

      // Update visual indicators
      updateSortIndicators(button);
    }

    /**
     * Update arrow indicators to show current sort state
     * @param {HTMLElement} activeButton - The button for the currently sorted column
     */
    function updateSortIndicators(activeButton) {
      // Clear all indicators first
      headers.forEach(btn => {
        const span = btn.querySelector('span');
        if (span) {
          span.textContent = '';
          span.setAttribute('aria-label', '');
        }
        btn.classList.remove('sorted-asc', 'sorted-desc');
      });

      // Set indicator for active column
      const span = activeButton.querySelector('span');
      if (span) {
        span.textContent = isAscending ? ' ▲' : ' ▼';
        span.setAttribute('aria-label', isAscending ? 'sorted ascending' : 'sorted descending');
      }
      activeButton.classList.add(isAscending ? 'sorted-asc' : 'sorted-desc');

      // Update ARIA attributes for accessibility
      activeButton.setAttribute('aria-pressed', 'true');
      headers.forEach(btn => {
        if (btn !== activeButton) {
          btn.setAttribute('aria-pressed', 'false');
        }
      });
      
      // Update mobile dropdown to match
      if (mobileSelect) {
        const direction = isAscending ? 'asc' : 'desc';
        mobileSelect.value = `${currentSortColumn}-${direction}`;
      }
    }
  }
})();
