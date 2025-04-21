document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.parentElement.querySelector('img').alt;
        alert(`سيبدأ تحميل: ${itemName}`);
    });
});