# Uuden näkymäkomponentin luominen

1. Luo uusi hakemisto `resources/views` hakemistoon
2. Luo hakemiston sisään näkymäkomponentin päätiedosto `index.jsx`
    * `index` tiedostonimi mahdollistaa komponentin importtaamisen ilman, että tiedostonimeä tarvii erikseen kirjoittaa polkuun
4. Käytä näkymän ympärillä [View](https://github.com/tyoelamasimulaattori/tyoelamasimulaattori/blob/master/resources/components/view/index.jsx) komponenttia ja anna näkymälle uniikki id `<View id="example-view">`
3. Lisää uusi komponentti resources/views/index.js tiedostoon
```javascript
import { default as ExampleView } from 'views/example';
export { ExampleView as ExampleView };
```

#### Jos näkymä pitää sisällään muita näkymäkomponentteja
Älä importtaa niitä `import {...} from 'views';` tyyliin vaan käyttäen lisäksi polussa näkymäkomponentin omaa hakemistoa `import { default as EndView } from 'views/end';`
* Muuten joudut todennäköisesti [Circular reference](http://en.wikipedia.org/wiki/Circular_reference) tilanteeseen, jossa näkymäsi importtaa `views` moduulin ja views moduuli importtaa näkymäsi.


#### Jos näkymä tarvii custom tyylejä
Asettelu on melkolailla ainoa asia mihin näkymäkohtaisia tyylejä kannattaa käyttää
1. Luo näkymäkomponentin hakemistoon lisäksi `index.styl` tiedosto ja lisää import käsky `resources/styles/_components.styl` tiedostoon.
```stylus
@import "../views/example"
```


# Näkymäkomponenttien käyttäminen

```javascript
import { MainView, EndView, CaseView } from 'views';
```

