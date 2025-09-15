function showNotification(message, type = 'success') {
    const notification = document.getElementById('cart-notification');
    if (!notification) return;

    notification.classList.remove('bg-green-500', 'bg-red-500', 'bg-blue-500');

    if (type === 'success') {
        notification.classList.add('bg-green-500');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500');
    } else {
        notification.classList.add('bg-blue-500');
    }

    notification.innerHTML = `<span class="font-medium">${message}</span>`;
    notification.classList.remove('translate-x-full');

    setTimeout(() => {
        notification.classList.add('translate-x-full');
    }, 3000);
}

window.showNotification = showNotification;