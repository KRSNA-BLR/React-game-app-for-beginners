<h1>Installation Guide 🚀</h1>

<p>Follow these steps to set up the <strong>React Game App for Beginners</strong> on your local machine.</p>

<h2>🔧 Prerequisites</h2>
<ul>
  <li><strong>Node.js:</strong> Version 18.18.0 LTS (recommended).</li>
  <li><strong>npm:</strong> Version 9.8.1 (bundled with Node.js 18.18.0).</li>
  <li><strong>React Native CLI:</strong> Latest version. Install it globally:
    <pre><code>npm install -g react-native-cli</code></pre>
  </li>
  <li><strong>Android Studio:</strong> Giraffe | 2022.3.1 or later for Android emulation.
    <ul>
      <li>Ensure you have the Android SDK installed and configured.</li>
      <li>Enable USB debugging if running on a physical Android device.</li>
    </ul>
  </li>
  <li><strong>Xcode:</strong> Version 14 or later (for macOS users developing for iOS).</li>
  <li><strong>Git:</strong> Ensure Git is installed and configured:
    <pre><code>git --version</code></pre>
  </li>
</ul>

<h2>📦 Installation Steps</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/KRSNA-BLR/React-game-app-for-beginners.git</code></pre>
  </li>
  <li>Navigate to the project folder:
    <pre><code>cd React-game-app-for-beginners</code></pre>
  </li>
  <li>Install project dependencies:
    <pre><code>npm install</code></pre>
    <p>This will install all required packages listed in <code>package.json</code>.</p>
  </li>
</ol>

<h2>▶️ Running the App</h2>
<p>Use the following commands to launch the application:</p>
<ul>
  <li><strong>For Android:</strong>
    <pre><code>npx react-native run-android</code></pre>
    <p>Ensure your Android emulator or device is connected and running.</p>
  </li>
  <li><strong>For iOS:</strong>
    <pre><code>npx react-native run-ios</code></pre>
    <p>Requires a Mac with Xcode installed. Open the project in Xcode if needed.</p>
  </li>
</ul>

<h2>⚙️ Additional Configuration</h2>
<p>If you encounter issues, review the following:</p>
<ul>
  <li>Ensure the proper Node.js version is installed. Check with:
    <pre><code>node -v</code></pre>
  </li>
  <li>Verify that the React Native CLI is installed globally:
    <pre><code>npm install -g react-native-cli</code></pre>
  </li>
  <li>Ensure Android Studio is properly set up:
    <ul>
      <li>Open Android Studio and navigate to <strong>SDK Manager</strong> to confirm that SDKs for the desired API levels are installed.</li>
      <li>Set up an emulator from the <strong>AVD Manager</strong>.</li>
    </ul>
  </li>
  <li>For Xcode:
    <ul>
      <li>Install Xcode from the App Store or <a href="https://developer.apple.com/xcode/" target="_blank">Apple Developer</a>.</li>
      <li>Ensure command-line tools are installed:
        <pre><code>xcode-select --install</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2>❓ Troubleshooting</h2>
<ul>
  <li><strong>Metro Bundler not starting:</strong> Run:
    <pre><code>npx react-native start</code></pre>
  </li>
  <li><strong>Android build fails:</strong>
    <ul>
      <li>Check Java JDK version (JDK 17 recommended).</li>
      <li>Ensure Gradle is updated:
        <pre><code>gradle -v</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>iOS build fails:</strong>
    <ul>
      <li>Open the Xcode project and check build settings.</li>
      <li>Ensure Cocoapods dependencies are installed:
        <pre><code>cd ios && pod install</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2>📄 Documentation</h2>
<p>Refer to the <a href="https://reactnative.dev/docs/environment-setup" target="_blank">React Native official documentation</a> for more details.</p>

<h2>🖼️ Screenshots</h2>
<p>Below is a preview of the game interface:</p>
<img src="https://github.com/KRSNA-BLR/React-game-app-for-beginners/blob/main/assets/React-game-app-for-beginners-kbasesorias.png" alt="React Game App Screenshot" style="width: 100%; height: auto;"/>

<h2>💬 Contact</h2>
<p>If you have any questions, feel free to open an issue or contact us at <strong>https://www.linkedin.com/in/danilo-viteri-moreno/</strong>.</p>
