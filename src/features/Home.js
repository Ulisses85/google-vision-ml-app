import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../helpers/auth';
const appTokenKey = "appToken";
export default class Home extends Component {
constructor(props) {
        super(props);
const allPhotos = [
         {
          id: 'randomstringimadeup43454356546',
          url: 'https://www.google.co.uk/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwidrJibjercAhVJLMAKHcYaB40QjRx6BAgBEAU&url=https%3A%2F%2Fofficialpsds.com%2Fhulk-png-r3vyk0&psig=AOvVaw2ifAACBNl_0Yfm0WRblr9y&ust=1534252254303944'
         },
         {
          id: 'randomstringimadeup43523526534565',
          url: 'https://www.google.co.uk/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwidrJibjercAhVJLMAKHcYaB40QjRx6BAgBEAU&url=https%3A%2F%2Fofficialpsds.com%2Fhulk-png-r3vyk0&psig=AOvVaw2ifAACBNl_0Yfm0WRblr9y&ust=1534252254303944'
         },
         {
          id: 'randomstringimadeup433245234534',
          url: 'https://www.google.co.uk/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwidrJibjercAhVJLMAKHcYaB40QjRx6BAgBEAU&url=https%3A%2F%2Fofficialpsds.com%2Fhulk-png-r3vyk0&psig=AOvVaw2ifAACBNl_0Yfm0WRblr9y&ust=1534252254303944'
         }
        ]
this.state = {
          allPhotos
        };
this.handleLogout = this.handleLogout.bind(this);
}
handleLogout() {
        logout()
        .then(() => {
            localStorage.removeItem(appTokenKey);
            this.props.history.push("/login");
            console.log("user signed out from firebase");
        });
    }
render() {
// our doppelganger images
        const allImages = this.state.allPhotos.map(photo => {
return (
            <div key={photo.id}>
              <div style={{minHeight: '215px'}}>
                <i className="bottom-icon material-icons main-close">close</i>
                <Image style={{ width: '100%' }} src={photo.url} responsive />
              </div>
            </div>
          );
        })
return (
   <div>
    {allImages}
<Grid className="bottom-nav">
      <Row className="show-grid">
        <Col xs={4} className="col-bottom">
            <Link to="/app/album"><i className="bottom-icon material-icons">collections</i></Link>
        </Col>
        <Col xs={4} className="col-bottom">
            <i className="bottom-icon material-icons">camera_alt</i>
        </Col>
        <Col onClick={this.handleLogout} xs={4} className="col-bottom">
          <i className="bottom-icon material-icons">assignment_return</i>
        </Col>
      </Row>
    </Grid>
</div>
  );
 }
}
