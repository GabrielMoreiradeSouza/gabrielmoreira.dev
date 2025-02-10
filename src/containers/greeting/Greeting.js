import React, { useState, useContext, useEffect } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// Importando imagens
import img1 from "../../assets/images/Foto1.jpg";
import img3 from "../../assets/images/Foto3.jpg";
import img4 from "../../assets/images/Foto4.jpg";
import img5 from "../../assets/images/Foto5.jpg";
import img6 from "../../assets/images/Foto6.jpg";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imagens
  const images = [img1, img3, img4, img5, img6];

  // Função para avançar imagem
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Efeito para trocar automaticamente a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(interval); // Cleanup ao desmontar o componente
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Área do carrossel estilo "book pages" */}
          <div
            className="greeting-image-div"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              width: "350px",
              height: "450px",
              perspective: "1000px",
              marginTop: "85px",
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Foto ${index + 1}`}
                onClick={handleNextImage}
                style={{
                  position: "absolute",
                  width: "500px",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transform: `translateX(${
                    index === currentImage ? "0" : "10px"
                  }) rotateY(${index === currentImage ? "0deg" : "15deg"})`,
                  opacity: index === currentImage ? 1 : 0,
                  zIndex: index === currentImage ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
