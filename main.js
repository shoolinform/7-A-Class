function getUserData() {
    const name = prompt("Введіть ваше ім'я:");
    const birthday = prompt("Введіть ваш день народження (формат РРРР-ММ-ДД):");
  
    showAlert(name, birthday);
  }
  
  function showAlert(name, birthday) {
    alert(`Привіт, ${name}! Твій день народження: ${birthday}`);
  }
  
  getUserData();