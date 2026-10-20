/*jslint browser */
"use strict";

function calculate() {
    const quantityField = document.getElementById("quantity");
    const productField = document.getElementById("product");
    const result = document.getElementById("result");
    const quantityText = quantityField.value.trim();
    const pattern = /^[0-9]+$/;

    if (!pattern.test(quantityText)) {
        result.className = "error";
        result.textContent = "Ошибка: в поле количества допустимы только цифры (целое число).";
        return;
    }

    const quantity = parseInt(quantityText, 10);
    const price = parseInt(productField.value, 10);

    result.className = "";
    result.textContent = "Стоимость заказа: " + (price * quantity) + " ₽";
}

function init() {
    const button = document.getElementById("calc-button");
    button.addEventListener("click", calculate);
}

document.addEventListener("DOMContentLoaded", init);
