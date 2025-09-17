// Navigation dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown trigger element
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownTrigger && dropdownMenu) {
        // Toggle dropdown visibility on click
        dropdownTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('hidden');
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
        
        // Add keyboard navigation support
        dropdownTrigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdownMenu.classList.toggle('hidden');
            }
            if (e.key === 'Escape') {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
});