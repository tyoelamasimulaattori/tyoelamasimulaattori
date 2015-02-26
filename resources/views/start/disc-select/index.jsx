import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {
    return (
      <div id="disc-view" className="modal">
        <div className="modal__dialog">
          <h1>DiSC-tyypin valinta</h1>
          <p className="subtitle">Lorem ipsum Eu proident magna deserunt nisi est proident cillum fugiat anim aute labore enim veniam Excepteur do id.</p>
          <div className="row">
            <div className="column column1-5">
              <div className="disc-selector">
                <label>DiSC-tyypit</label>
                <input type="text" />
                <select>
                  <option>CC</option>
                  <option>DC</option>
                  <option>AC</option>
                  <option>QC</option>
                  <option>DE</option>
                  <option>ÅÅ</option>
                </select>
              </div>

            </div>
            <div className="column column4-5">
              <h2>Olet CC - tyyppi</h2>
              <p>
                Lorem ipsum Velit non cillum consectetur et aliquip sint sed voluptate ut aliquip consequat tempor commodo amet anim eiusmod sit ut voluptate nulla occaecat irure Ut nostrud dolore Excepteur occaecat laborum reprehenderit amet magna velit nulla et ut aute in dolore.
                Lorem ipsum Velit non cillum consectetur et aliquip sint sed voluptate ut aliquip consequat tempor commodo amet anim eiusmod sit ut voluptate nulla occaecat irure Ut nostrud dolore Excepteur occaecat laborum reprehenderit amet magna velit nulla et ut aute in dolore.
              </p>


              <p> Tämä on vain yleiskuvaus profiilista, eikä välttämättä kuvaa sinua. Katso tarkennusta tyyppiisi DiSC - materiaaleistasi(?) </p>
              <Button to="/">
                Valitse ja jatka
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
