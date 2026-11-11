document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sns_group .sns');

    items.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            item.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function () {
            item.style.transform = 'translateY(0)';
        });
    });
});