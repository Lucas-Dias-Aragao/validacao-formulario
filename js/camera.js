const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";


//função que inicia a câmera do usuário
botaoIniciarCamera.addEventListener("click", async function(){

  //navigator.mediaDevices = pede ao navegador para iniciar a câmera
  const iniciarVideo = await navigator.mediaDevices
  .getUserMedia({video: true, audio: false});

  botaoIniciarCamera.style.display = "none";
  campoCamera.style.display = "block";

  video.srcObject = iniciarVideo;

});


//função que faz a captura da imagem
botaoTirarFoto.addEventListener("click", function(){
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  //transforma a imagem em uma url
  imagemURL = canvas.toDataURL("image/jpeg");

  campoCamera.style.display = "none";
  mensagem.style.display = "block";
})

//Recebe os dados do cadastro
botaoEnviarFoto.addEventListener("click", () => {
  const receberDadosExistentes = localStorage.getItem("cadastro");
  const converteRetorno = JSON.parse(receberDadosExistentes);

  converteRetorno.imagem = imagemURL;
  localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

  window.location.href = "./abrir-conta-form-3.html";
});