import React from 'react';

function App() {
  return (
    <div style={styles.wrapper}>
      {/* Arka planda oynatılacak video */}
      <video autoPlay muted loop style={styles.video}>
        <source src={require('./video/gradient.mp4')} type="video/mp4" />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

      {/* Video üzerindeki içerik */}
      <div style={styles.body}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Lukiyi İndirin!</h1>
          <p style={styles.description}>
            Uygulamamız hem Android hem de iOS platformlarında mevcuttur.
          </p>
          <div style={styles.links}>
            <a href="https://play.google.com/store/search?q=luki&c=apps" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Google Play'de İndir
            </a>
            <a href="https://apps.apple.com/tr/app/luki/id6464115413?l=tr" target="_blank" rel="noopener noreferrer" style={styles.link}>
              App Store'da İndir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#fff',
  },
  container: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '90%',
    margin: '0 10px', // Mobilde kenarlardan boşluk bırak
  },
  heading: {
    color: '#fff',
    fontSize: '24px',
    margin: '0 0 10px', // Altında biraz boşluk bırak
  },
  description: {
    color: '#fff',
    fontSize: '16px',
    margin: '0 0 20px', // Üstünde ve altında boşluk bırak
  },
  links: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px 0',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
};

export default App;

