# Uuden komponentin luominen

1. Luo uusi hakemisto `resources/components` hakemistoon
2. Luo hakemiston sisään päätiedosto `index.jsx`
    * `index` tiedostonimi mahdollistaa komponentin importtaamisen ilman, että tiedostonimeä tarvii erikseen kirjoittaa polkuun.
3. Luo komponentti `export default React.createClass({})` lauseen sisälle.
4. Lisää komponentti `resources/components/index.js` tiedostoon
```javascript
import {default as ExampleComponent} from 'components/example-component';
export { ExampleComponent as ExampleComponent};
``` 
####Jos näkymä tarvitsee custom tyylejä
Luo komponentin hakemistoon lisäksi index.styl tiedosto ja lisää import käsky `resources/styles/_components.styl` tiedostoon.
```stylus
@import "../components/example"
```

#Komponentin käyttäminen
Mene näkymään, johon haluat lisätä tekemäsi komponentin ja importtaa komponentti.
```javascript
import { Button, Controls, View } from 'components';
```
#### Jos komponentti pitää sisällään muita näkymäkomponentteja
Jos komponentisi käyttää esim. `Button` komponenttia, älä importtaa sitä käyttämällä edellä mainittua 
`import {...} from 'views';` muotoa, vaan käytä lisäksi polussa näkymäkomponentin omaa hakemistoa `import { default as EndView } from 'views/end';`
* Jos tätä ohjetta ei seuraa, on todennäköistä joutua  [Circular reference] tilanteeseen, jossa komponenttisi importtaa      komponentin, joka  importtaa komponenttisi.

[Circular reference]:http://en.wikipedia.org/wiki/Circular_reference