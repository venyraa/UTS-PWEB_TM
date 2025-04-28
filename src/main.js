import './style.css';

document.querySelectorAll('.relative').forEach(card => {
  const frontImage = card.querySelector('img:first-child');
  const hoverImage = card.querySelector('img:nth-child(2)');

  card.addEventListener('mouseenter', () => {
    frontImage.classList.add('hidden');
    hoverImage.classList.remove('hidden');
  });

  card.addEventListener('mouseleave', () => {
    frontImage.classList.remove('hidden');
    hoverImage.classList.add('hidden');
  });
});


const productVariant = document.getElementById('product-variant');
const productImage = document.getElementById('product-image');

productVariant.addEventListener('change', function () {
  const selectedImage = productVariant.value;
  productImage.src = `asset/${selectedImage}`;
});
