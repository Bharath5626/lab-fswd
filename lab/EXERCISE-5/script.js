const itemsForSale = [];
function handleBuyButtonClick() {
const buyList = document.getElementById('buy-list');
buyList.innerHTML = '';
itemsForSale.forEach((item) => {
const listItem = document.createElement('li');
const titleElement = document.createElement('h3');
titleElement.textContent = item.title;
listItem.appendChild(titleElement);
const descriptionElement = document.createElement('p');
descriptionElement.textContent = item.description;
listItem.appendChild(descriptionElement);
const priceElement = document.createElement('p');
priceElement.textContent = `Price: $${item.price}`;
listItem.appendChild(priceElement);
const buyButton = document.createElement('button');
buyButton.textContent = 'Buy';
buyButton.addEventListener('click', () => {
handleBuyButtonClicked(item);
});
listItem.appendChild(buyButton);
buyList.appendChild(listItem);
});
}
function handleSellFormSubmit(event) {
event.preventDefault();
const sellTitle = document.getElementById('sell-title').value;
const sellDescription = document.getElementById('sell-description').value;
const sellPrice = document.getElementById('sell-price').value;
const item = {
title: sellTitle,
description: sellDescription,
price: sellPrice};
itemsForSale.push(item);
document.getElementById('sell-title').value = '';
document.getElementById('sell-description').value = '';
document.getElementById('sell-price').value = '';
handleBuyButtonClick();}
function handleBuyButtonClicked(item) {
alert(`Thank you for buying the item: ${item.title}`);}
document.getElementById('buy-button').addEventListener('click', handleBuyButtonClick);
document.getElementById('sell-form').addEventListener('submit', handleSellFormSubmit); 