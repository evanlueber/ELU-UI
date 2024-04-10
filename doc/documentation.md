# Typescript Component

## Beschrebiung

Ich habe einen Komponent auf NPM veröffentlicht, den ich in einem anderen Projekt gut verwenden kann. Dieser Komponent wurde mit Typescript geschrieben und TailwindCSS gestyled und soll einen Password Input darstellen.

## Vorgehensweise

1. Erstellen eines neuen Projekts mit

```bash
    npx create-react-app my-app --template typescript
```

2. Danach habe ich TailwindCSS und React-icons installiert, damit das Styling des Komponents auch funktioniert.

3. In diesem Schritt habe ich die überflüssigen Dateien im src Ordner gelöscht, damit nur noch ein components Ordner, die index.css, die index.tsx und die index.ts Datei vorhanden sind.

4. Im components Ordner habe ich die PasswordInput.tsx Datei erstellt und den Code für den Password Input geschrieben.

5. In den im dritten Schritt erwähnten Files musste ich noch ein paar Anpassungen machen.

6. Um den Komponent auf NPM zu veröffentlichen, habe ich zuerst ein NPM Account erstellt und mich eingeloggt. Dafür habe diese Commands verwendet:
    
    ```bash
        npm login
    ```
    
    ```bash
        npm publish
    ```

7. Danach habe ich ein GitHub Repository erstellt und den Code hochgeladen und einen Workdlow erstellt, der neue Releases automatisch auf NPM veröffentlicht. Dafür musste ich auf NPM einen Access Token erstellen und in den Secrets von GitHub einfügen.