// TODO Генерация изображения ✅
document.querySelector('.generate').addEventListener('click', function() {
    const imageHolder = document.querySelector('.imageHolder');
    const scale = 4; // Increase the scale for better quality

    // Получаем текущую дату и время
    const now = new Date();
    const formattedDate = now.toISOString().replace(/:/g, '-').replace('T', '_').split('.')[0];
    const fileName = `Подарочный сертификат ${formattedDate}.png`;

    html2canvas(imageHolder, {
      scale: scale,
      useCORS: true, // Allows cross-origin images to be loaded
      logging: true, // Enable logging for debugging
      letterRendering: true // Ensures letter rendering
    }).then(canvas => {
      // Создаем новое canvas с нужным разрешением
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = 5192;
      finalCanvas.height = 2898;
      const ctx = finalCanvas.getContext('2d');

      // Масштабируем изображение
      ctx.drawImage(canvas, 0, 0, finalCanvas.width, finalCanvas.height);

      // Конвертируем canvas в blob и скачиваем
      finalCanvas.toBlob(function(blob) {
        saveAs(blob, fileName);
      }, 'image/png', 1.0); // Сохраняем изображение с максимальным качеством
    }).catch(function(error) {
      console.error('Error generating image:', error);
    });
  });

// TODO Передача значения input => div ✅

const nameGiftInput = document.querySelector(".nameGiftInput")
const costGiftInput = document.querySelector(".costGiftInput")
const courseGiftInput = document.querySelector(".courseGiftInput")

nameGiftInput.addEventListener("input", ()=>{nameGiftClean()});
function nameGiftClean(){
    let nameGift = document.querySelector(".nameGift")
    nameGift.textContent = nameGiftInput.value
}
costGiftInput.addEventListener("input", ()=>{costGiftClean()});
function costGiftClean(){
    let costGift = document.querySelector(".costGift")
    costGift.textContent = document.querySelector(".costGiftInput").value
};
courseGiftInput.addEventListener("input", ()=>{courseGiftClean()});
function courseGiftClean(){
    let courseGift = document.querySelector(".courseGift")
    courseGift.textContent = document.querySelector(".courseGiftInput").value
}

// TODO Кнопка очищения input ✅

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.inputContainer');

    containers.forEach(container => {
        const deleteDiv = container.querySelector('.deleteInput');
        const inputField = container.querySelector('.dataInput');

        function deleteFromImage(){
            if(inputField.classList.contains('nameGiftInput')){
                nameGiftClean()
            } else if(inputField.classList.contains('costGiftInput')){
                costGiftClean()
            } else if(inputField.classList.contains('courseGiftInput')){
                courseGiftClean()
            } else{
                console.log("eror ❌")
            }
        }
        
        deleteDiv.addEventListener('click', () => {
            inputField.value = '';
            deleteFromImage();
        });
    });
});


// TODO Отправлять изображение с описанием через бота в Телеграм ❌
