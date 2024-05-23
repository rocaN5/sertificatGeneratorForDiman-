// TODO Генерация изображения ✅
document.querySelector('.generate').addEventListener('click', function() {
    const imageHolder = document.querySelector('.imageHolder');
    const scale = 4; // Increase the scale for better quality

    // Получаем текущую дату и время
    const now = new Date();
    const formattedDate = now.toISOString().replace(/:/g, '-').replace('T', '_').split('.')[0];
    const fileName = `Сертификат о конце обучения ${formattedDate}.png`;

    html2canvas(imageHolder, {
      scale: scale,
      useCORS: true, // Allows cross-origin images to be loaded
      logging: true, // Enable logging for debugging
      letterRendering: true // Ensures letter rendering
    }).then(canvas => {
      // Создаем новое canvas с нужным разрешением
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = 2528;
      finalCanvas.height = 3556;
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

const nameGradInput = document.querySelector(".nameGradInput")
const masterGradInput = document.querySelector(".masterGradInput")
const courseGradInput = document.querySelector(".courseGradInput")
const dateGradInput = document.querySelector(".dateGradInput")

nameGradInput.addEventListener("input", ()=>{nameGradClean()});
function nameGradClean(){
    const nameGrad = document.querySelector(".nameGrad")
    nameGrad.textContent = nameGradInput.value
}
masterGradInput.addEventListener("input", ()=>{masterGradClean()});
function masterGradClean(){
    const masterGrad = document.querySelector(".masterGrad")
    masterGrad.textContent = document.querySelector(".masterGradInput").value
};
courseGradInput.addEventListener("input", ()=>{courseGradClean()});
function courseGradClean(){
    const courseGrad = document.querySelector(".courseGrad")
    courseGrad.textContent = document.querySelector(".courseGradInput").value
}
dateGradInput.addEventListener("input", ()=>{dateGradClean()});
function dateGradClean(){
    const dateGrad = document.querySelector(".dateGrad")
    dateGrad.textContent = document.querySelector(".dateGradInput").value
}

// TODO Кнопка очищения input ✅

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.inputContainer');

    containers.forEach(container => {
        const deleteDiv = container.querySelector('.deleteInput');
        const inputField = container.querySelector('.dataInput');

        function deleteFromImage(){
            if(inputField.classList.contains('nameGradInput')){
                nameGradClean()
            } else if(inputField.classList.contains('masterGradInput')){
                masterGradClean()
            } else if(inputField.classList.contains('courseGradInput')){
                courseGradClean()
            } else if(inputField.classList.contains('dateGradInput')){
                dateGradClean()
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

// TODO Кнопка установки текщей даты ✅
const setDateInput = document.querySelector(".setDateInput")
setDateInput.addEventListener('click', ()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;
    dateGradInput.value = today
    document.querySelector(".dateGrad").textContent = today
})

// TODO Отправлять изображение с описанием через бота в Телеграм ❌