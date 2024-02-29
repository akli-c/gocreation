function toggleService(serviceId) {
    var allServiceDescriptions = document.querySelectorAll('.service-description');
    
    // Iterate over all service descriptions
    allServiceDescriptions.forEach(function(desc) {
        if(desc.id === serviceId) {
            // Toggle 'active' for the clicked service
            desc.classList.toggle('active');
        } else {
            // Ensure other services are not 'active'
            desc.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('theme-checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the theme based on localStorage
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        checkbox.checked = true; // Ensure this matches the theme
    } else {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = false; // Ensure this matches the theme
    }

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});


