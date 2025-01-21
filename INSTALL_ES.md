<h1>Guía de Instalación 🚀</h1>

<p>Sigue estos pasos para configurar la <strong>React Game App for Beginners</strong> en tu máquina local.</p>

<h2>🔧 Requisitos Previos</h2>
<ul>
  <li><strong>Node.js:</strong> Versión 18.18.0 LTS (recomendada).</li>
  <li><strong>npm:</strong> Versión 9.8.1 (incluida con Node.js 18.18.0).</li>
  <li><strong>React Native CLI:</strong> Última versión. Instálala globalmente:
    <pre><code>npm install -g react-native-cli</code></pre>
  </li>
  <li><strong>Android Studio:</strong> Giraffe | 2022.3.1 o superior para emulación de Android.
    <ul>
      <li>Asegúrate de tener el SDK de Android instalado y configurado.</li>
      <li>Habilita la depuración USB si estás usando un dispositivo físico.</li>
    </ul>
  </li>
  <li><strong>Xcode:</strong> Versión 14 o superior (para usuarios de macOS desarrollando para iOS).</li>
  <li><strong>Git:</strong> Asegúrate de tener Git instalado y configurado:
    <pre><code>git --version</code></pre>
  </li>
</ul>

<h2>📦 Pasos de Instalación</h2>
<ol>
  <li>Clona el repositorio:
    <pre><code>git clone https://github.com/KRSNA-BLR/React-game-app-for-beginners.git</code></pre>
  </li>
  <li>Navega al directorio del proyecto:
    <pre><code>cd React-game-app-for-beginners</code></pre>
  </li>
  <li>Instala las dependencias del proyecto:
    <pre><code>npm install</code></pre>
    <p>Esto instalará todos los paquetes requeridos listados en el archivo <code>package.json</code>.</p>
  </li>
</ol>

<h2>▶️ Ejecutar la Aplicación</h2>
<p>Usa los siguientes comandos para lanzar la aplicación:</p>
<ul>
  <li><strong>Para Android:</strong>
    <pre><code>npx react-native run-android</code></pre>
    <p>Asegúrate de que tu emulador o dispositivo Android esté conectado y ejecutándose.</p>
  </li>
  <li><strong>Para iOS:</strong>
    <pre><code>npx react-native run-ios</code></pre>
    <p>Requiere un Mac con Xcode instalado. Abre el proyecto en Xcode si es necesario.</p>
  </li>
</ul>

<h2>⚙️ Configuración Adicional</h2>
<p>Si encuentras problemas, revisa lo siguiente:</p>
<ul>
  <li>Asegúrate de tener instalada la versión correcta de Node.js. Compruébalo con:
    <pre><code>node -v</code></pre>
  </li>
  <li>Verifica que el CLI de React Native esté instalado globalmente:
    <pre><code>npm install -g react-native-cli</code></pre>
  </li>
  <li>Asegúrate de que Android Studio esté configurado correctamente:
    <ul>
      <li>Abre Android Studio y navega a <strong>SDK Manager</strong> para confirmar que los SDK de los niveles de API deseados están instalados.</li>
      <li>Configura un emulador desde el <strong>AVD Manager</strong>.</li>
    </ul>
  </li>
  <li>Para Xcode:
    <ul>
      <li>Instala Xcode desde la App Store o desde <a href="https://developer.apple.com/xcode/" target="_blank">Apple Developer</a>.</li>
      <li>Asegúrate de que las herramientas de línea de comandos estén instaladas:
        <pre><code>xcode-select --install</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2>❓ Resolución de Problemas</h2>
<ul>
  <li><strong>Metro Bundler no se inicia:</strong> Ejecuta:
    <pre><code>npx react-native start</code></pre>
  </li>
  <li><strong>Error de compilación en Android:</strong>
    <ul>
      <li>Revisa la versión de Java JDK (se recomienda JDK 17).</li>
      <li>Asegúrate de que Gradle esté actualizado:
        <pre><code>gradle -v</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>Error de compilación en iOS:</strong>
    <ul>
      <li>Abre el proyecto en Xcode y verifica la configuración de compilación.</li>
      <li>Asegúrate de que las dependencias de Cocoapods estén instaladas:
        <pre><code>cd ios && pod install</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2>📄 Documentación</h2>
<p>Consulta la <a href="https://reactnative.dev/docs/environment-setup" target="_blank">documentación oficial de React Native</a> para más detalles.</p>

<h2>🖼️ Capturas de Pantalla</h2>
<p>A continuación, una vista previa de la interfaz del juego:</p>
<img src="https://github.com/KRSNA-BLR/React-game-app-for-beginners/blob/main/assets/React-game-app-for-beginners-kbasesorias.png" alt="React Game App Screenshot" style="width: 100%; height: auto;"/>

<h2>💬 Contacto</h2>
<p>Si tienes preguntas, abre un issue o contáctanos en <strong><a href="https://www.linkedin.com/in/danilo-viteri-moreno/">LinkedIn</a></strong>.</p>
