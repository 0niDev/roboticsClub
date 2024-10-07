const m_aboutText = document.querySelectorAll(".m-aboutText");

const AboutText = `
    Welcome to our Robotics Club! We’re a group of passionate students exploring the exciting world of robotics through hands-on projects in coding and hardware.

    Our mission is to foster creativity and collaboration while preparing members for future careers in technology. We believe in learning by doing, tackling real-world challenges, and building innovative solutions together.

    Join us and be part of a community that brings ideas to life and embraces the future of tech!
`;

const abc = "abcdefghijklmnopqrstuvwxyz1234567890";

function typeEffect() {
  const wordsList = AboutText.trim().split(" ");
  const duration = 50;
  const randomInterval = 50;
  let currentWordIndex = 0;

  const intervalId = setInterval(() => {
    let randomText = wordsList
      .map((word, index) => {
        if (index === currentWordIndex) {
          return word;
        } else {
          let randomWord = "";
          for (let i = 0; i < word.length; i++) {
            randomWord += abc[Math.floor(Math.random() * abc.length)];
          }
          return randomWord;
        }
      })
      .join(" ");

    m_aboutText.forEach((el) => {
      el.innerHTML = randomText;
    });
  }, randomInterval);

  setTimeout(() => {
    clearInterval(intervalId);

    const revealInterval = setInterval(() => {
      currentWordIndex++;

      if (currentWordIndex >= wordsList.length) {
        clearInterval(revealInterval);
      } else {
        let updatedText = wordsList
          .map((word, index) => {
            if (index <= currentWordIndex) {
              return word;
            } else {
              let randomWord = "";
              for (let i = 0; i < word.length; i++) {
                randomWord += abc[Math.floor(Math.random() * abc.length)];
              }
              return randomWord;
            }
          })
          .join(" ");

        m_aboutText.forEach((el) => {
          el.innerHTML = updatedText;
        });
      }
    }, randomInterval);
  }, duration);
}
